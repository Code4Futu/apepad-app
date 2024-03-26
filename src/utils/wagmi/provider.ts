import { goerli, zkSync, mainnet } from "wagmi/chains";
import { JsonRpcProvider } from "@ethersproject/providers";
import { ChainId } from "./wagmi";

const goerliProvider = new JsonRpcProvider(
  // goerli.rpcUrls.default.http[0],
  "https://serene-silent-county.ethereum-goerli.quiknode.pro/66813b4f198ca2dec31e25964f94e1d891167d3a/",
  goerli.id
);

const zksyncMainnetProvider = new JsonRpcProvider(
  zkSync.rpcUrls.default.http[0],
  zkSync.id
);

const mainnetProvider = new JsonRpcProvider(
  // mainnet.rpcUrls.default.http[0],
  "https://compatible-lingering-lake.quiknode.pro/4015cf6393313a9f4ba99abccc6cba587b039960/",
  mainnet.id
);

export const PROVIDERS: { [chainId in ChainId]: JsonRpcProvider } = {
  [ChainId.GOERLI]: goerliProvider,
  [ChainId.ZKSYNC_MAINNET]: zksyncMainnetProvider,
  [ChainId.MAINNET]: mainnetProvider,
};

export function getProvider(chainId: ChainId): JsonRpcProvider {
  if (!PROVIDERS[chainId]) {
    throw new Error(`Unknown provider for chainId ${chainId}`);
  }

  return PROVIDERS[chainId];
}
