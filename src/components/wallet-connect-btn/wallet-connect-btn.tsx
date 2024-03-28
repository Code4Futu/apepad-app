import React from "react";
import {
  useWallet,
  WalletReadyState,
  Wallet,
  isRedirectable,
  WalletName,
} from "@aptos-labs/wallet-adapter-react";
import { twMerge } from "tailwind-merge";

function WalletConnectBtn() {
  const { connected, wallets, isLoading, account } = useWallet();
  const address = account?.address;
  const truncatedAddress =
    address && `${address.slice(0, 6)}...${address.slice(-4)}`;

  if (connected) {
    return (
      <button
        type="button"
        className="btn btn-md px-3 border-green-500 bg-green-500 hover:border-green-500 hover:bg-green-500 text-[#111315] text-xs md:text-sm"
      >
        <span className="text-xs md:text-sm">{truncatedAddress}</span>
      </button>
    );
  }

  if (isLoading || !wallets?.[0]) {
    return (
      <button
        type="button"
        className="btn btn-md px-3 border-green-500 bg-green-500 hover:border-green-500 hover:bg-green-500 text-[#111315] text-xs md:text-sm"
      >
        <span className="text-xs md:text-sm">Connecting</span>
      </button>
    );
  }

  return <WalletView wallet={wallets[0]} />;
}

const WalletView = ({ wallet }: { wallet: Wallet }) => {
  const { connect } = useWallet();
  const isWalletReady =
    wallet.readyState === WalletReadyState.Installed ||
    wallet.readyState === WalletReadyState.Loadable;
  const mobileSupport = wallet.deeplinkProvider;

  const onWalletConnectRequest = async (walletName: WalletName) => {
    try {
      await connect(walletName);
    } catch (error) {
      console.warn(error);
      window.alert("Failed to connect wallet");
    }
  };

  /**
   * If we are on a mobile browser, adapter checks whether a wallet has a `deeplinkProvider` property
   * a. If it does, on connect it should redirect the user to the app by using the wallet's deeplink url
   * b. If it does not, up to the dapp to choose on the UI, but can simply disable the button
   * c. If we are already in a in-app browser, we don't want to redirect anywhere, so connect should work as expected in the mobile app.
   *
   * !isWalletReady - ignore installed/sdk wallets that don't rely on window injection
   * isRedirectable() - are we on mobile AND not in an in-app browser
   * mobileSupport - does wallet have deeplinkProvider property? i.e does it support a mobile app
   */
  if (!isWalletReady && isRedirectable()) {
    // Wallet has mobile app
    if (mobileSupport) {
      return (
        <button
          type="button"
          className="btn btn-md px-3 border-green-500 bg-green-500 hover:border-green-500 hover:bg-green-500 text-[#111315] text-xs md:text-sm"
          key={wallet.name}
          onClick={() => onWalletConnectRequest(wallet.name)}
        >
          <span className="text-xs md:text-sm">Connect wallet</span>
        </button>
      );
    }
    // Wallet does not have mobile app
    return (
      <button
        type="button"
        key={wallet.name}
        className="btn btn-md px-3 border-green-500 bg-green-500 hover:border-green-500 hover:bg-green-500 text-[#111315] text-xs md:text-sm"
      >
        <span className="text-xs md:text-sm">
          Connect wallet - Desktop Only
        </span>
      </button>
    );
  } else {
    // Desktop
    return (
      <button
        type="button"
        className={twMerge(
          "btn btn-md px-3 border-green-500 bg-green-500 hover:border-green-500 hover:bg-green-500 text-[#111315] text-xs md:text-sm",
          !isWalletReady && "opacity-50 cursor-not-allowed"
        )}
        disabled={!isWalletReady}
        key={wallet.name}
        onClick={() => onWalletConnectRequest(wallet.name)}
      >
        <span className="text-xs md:text-sm">Connect wallet</span>
      </button>
    );
  }
};

export default WalletConnectBtn;
