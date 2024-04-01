import { PropsWithChildren, useMemo } from "react";
import {
  WalletProvider,
  AptosWalletAdapter,
  MartianWalletAdapter,
  PontemWalletAdapter,
  RiseWalletAdapter,
  NightlyWalletAdapter,
  FewchaWalletAdapter,
  SpikaWalletAdapter,
  FletchWalletAdapter,
  HyperPayWalletAdapter,
  TokenPocketWalletAdapter,
  BitkeepWalletAdapter,
} from "@manahippo/aptos-wallet-adapter";
import { AptosWalletProvider } from "./AptosWalletProvider";
import { message } from "antd";

export function Provider({ children }: PropsWithChildren) {
  const wallets = useMemo(
    () => [
      new RiseWalletAdapter(),
      new MartianWalletAdapter(),
      new AptosWalletAdapter(),
      new PontemWalletAdapter(),
      new FewchaWalletAdapter(),
      new BitkeepWalletAdapter(),
      new SpikaWalletAdapter(),
      new NightlyWalletAdapter(),
      new FletchWalletAdapter(),
      new TokenPocketWalletAdapter(),
      new HyperPayWalletAdapter(),
    ],
    []
  );

  return (
    <WalletProvider
      wallets={wallets}
      autoConnect={true}
      onError={(error: Error) => {
        console.log("wallet errors: ", error);
        message.error(error.message);
      }}
    >
      <AptosWalletProvider>{children}</AptosWalletProvider>
    </WalletProvider>
  );
}
