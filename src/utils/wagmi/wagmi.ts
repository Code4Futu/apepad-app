import { configureChains, createClient, mainnet } from "wagmi";
import { Chain, arbitrum, goerli, zkSync, zkSyncTestnet } from "wagmi/chains";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { publicProvider } from "wagmi/providers/public";
import { okxWallet } from "@rainbow-me/rainbowkit/wallets";

import memoize from "lodash/memoize";
import {
  connectorsForWallets,
  getDefaultWallets,
} from "@rainbow-me/rainbowkit";
import { ChainId } from "@/config/type";

export let CHAINS: Chain[] = [goerli, zkSyncTestnet, zkSync, mainnet];

let defaultChain: Chain = goerli;
if (process.env.NEXT_PUBLIC_MODE === "production") {
  defaultChain = mainnet;
} else if (
  process.env.NEXT_PUBLIC_MODE === "staging" ||
  process.env.NEXT_PUBLIC_MODE === "develop"
) {
  defaultChain = goerli;
} else {
  defaultChain = zkSync;
}

// if (process.env.NEXT_PUBLIC_MODE === "production") {
//   console.log(
//     "%c process.env.NEXT_PUBLIC_MODE",
//     "color: #26bfa5;",
//     process.env.NEXT_PUBLIC_MODE
//   );
//   console.log("%c Default chain", "color: #26bfa5;", defaultChain);
// }

CHAINS = [defaultChain];
const projectId = "740582df3e4aab53da39c544d1f17fb3";

export const { chains, provider, webSocketProvider } = configureChains(CHAINS, [
  publicProvider(),
]);

export const coinbaseConnector = new CoinbaseWalletConnector({
  chains,
  options: {
    appName: "LOOT BOT",
  },
});

export const walletConnectConnector = new WalletConnectConnector({
  chains,
  options: {
    projectId,
  },
});

// export const bitKeepWalletConnector = new BitKeepWalletConnector({
//   chains,
//   options: {
//     shimDisconnect: false,
//     shimChainChangedDisconnect: true,
//   },
// });
const { wallets } = getDefaultWallets({
  appName: "LOOT",
  projectId,
  chains,
});
const connectors = connectorsForWallets([
  ...wallets,
  {
    groupName: "Popular",
    wallets: [okxWallet({ projectId, chains })],
  },
]);
export const wagmiClient = createClient({
  autoConnect: true,
  provider,
  // webSocketProvider,
  connectors,
});

export const isChainSupported = memoize(
  (chainId: number, chainsIds?: ChainId[]) =>
    (chainsIds || chains.map((e) => e.id)).includes(Number(chainId)),
  (chainId: number, chainsIds?: ChainId[]) =>
    `${chainId}-${(chainsIds || chains.map((e) => e.id))
      .map((c) => c)
      .join("-")}`
);

export { defaultChain, ChainId };
