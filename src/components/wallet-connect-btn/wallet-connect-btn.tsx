import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
function WalletConnectBtn() {
  return (
    <>
      <ConnectButton.Custom>
        {({
          account,
          chain,
          openAccountModal,
          openChainModal,
          openConnectModal,
          authenticationStatus,
          mounted,
        }) => {
          // Note: If your app doesn't use authentication, you
          // can remove all 'authenticationStatus' checks
          const ready = mounted && authenticationStatus !== "loading";
          const connected =
            ready &&
            account &&
            chain &&
            (!authenticationStatus || authenticationStatus === "authenticated");
          const address = account?.address;
          const truncatedAddress =
            address && `${address.slice(0, 6)}...${address.slice(-4)}`;

          if (!connected) {
            return (
              <button
                type="button"
                className="btn btn-md px-3 border-green-500 bg-green-500 hover:border-green-500 hover:bg-green-500 text-[#111315] text-xs md:text-sm"
                onClick={openConnectModal}
              >
                <i className="fa-duotone fa-wallet mr-3 text-base"></i>
                <span className="text-xs md:text-sm">Connect wallet</span>
              </button>
            );
          }

          if (chain.unsupported) {
            return (
              <button
                type="button"
                className="btn btn-md px-3 btn-primary text-xs md:text-sm"
                onClick={openChainModal}
              >
                <span className="text-xs md:text-sm">Wrong Network</span>
              </button>
            );
          }

          return (
            <div>
              <button
                type="button"
                className="btn btn-md px-3 btn-primary text-xs md:text-sm"
                onClick={openAccountModal}
              >
                <span className="text-xs md:text-sm">{truncatedAddress}</span>
              </button>
            </div>
          );
        }}
      </ConnectButton.Custom>
    </>
  );
}

export default WalletConnectBtn;
