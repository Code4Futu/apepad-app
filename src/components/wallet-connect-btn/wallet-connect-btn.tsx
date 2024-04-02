import React, { useCallback, useMemo, useState } from "react";
import {
  useWallet,
  WalletReadyState,
  Wallet,
} from "@manahippo/aptos-wallet-adapter";
import Image from "next/image";

export const walletAddressEllipsis = (address: string | undefined) => {
  if (!address) {
    return "";
  }
  return address.slice(0, 4) + "..." + address.slice(-6);
};

function WalletConnectBtn() {
  const { wallets, select, connect, connected, account } = useWallet();

  const [detectedWallets, notDetectedWallets] = useMemo(() => {
    const detectedWallets2: Wallet[] = [];
    const notDetectedWallets2: Wallet[] = [];
    wallets.forEach((w) => {
      if (
        w.readyState === WalletReadyState.Installed ||
        w.readyState === WalletReadyState.Loadable
      ) {
        detectedWallets2.push(w);
      } else {
        notDetectedWallets2.push(w);
      }
    });
    return [detectedWallets2, notDetectedWallets2];
  }, [wallets]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const toggleDialog = () => setIsDialogOpen(!isDialogOpen);

  const renderWalletConnectorGroup = () => {
    return wallets?.map((wallet) => {
      const option = wallet?.adapter;
      return (
        <div
          onClick={async () => {
            try {
              if (option.readyState === "Installed") {
                await connect(option.name);
              } else {
                window.open(option.url, "_blank");
              }
            } catch (e) {
              console.log(e);
            }
          }}
          id={option.name.split(" ").join("_")}
          key={option.name}
          className="flex justify-between gap-2 self-stretch px-2 p-2 md:py-4 bg-[#2b2b31] rounded-lg cursor-pointer"
        >
          <div className="flex gap-2">
            <div className="relative w-5 h-5 rounded-full">
              <Image fill src={option.icon} alt="" />
            </div>
            {option.name}
          </div>
          {/* {(wallet?.readyState === WalletReadyState.Installed ||
            wallet?.readyState === WalletReadyState.Loadable) && (
            <span>Detected</span>
          )} */}
        </div>
      );
    });
  };

  return (
    <>
      {connected && account ? (
        <button
          type="button"
          className="btn btn-md px-3 border-[#90E788] bg-[#90E788] hover:border-[#90E788] hover:bg-[#90E788] text-[#111315] text-xs md:text-sm rounded-xl"
        >
          <span className="text-xs md:text-sm">
            {walletAddressEllipsis(String(account?.address))}
          </span>
        </button>
      ) : (
        <button
          type="button"
          className="btn btn-md px-3 border-[#90E788] bg-[#90E788] hover:border-[#90E788] hover:bg-[#90E788] text-[#111315] text-xs md:text-sm rounded-xl"
          onClick={() => setIsDialogOpen(true)}
        >
          <span className="text-xs md:text-sm">Connect Wallet</span>
        </button>
      )}
      <dialog
        id="mobileMenu_modal"
        className={`${
          isDialogOpen ? "fixed z-20" : "hidden z-0"
        } modal modal-middle max-sm:!ml-0`}
        open={isDialogOpen}
        onClose={toggleDialog}
      >
        <form
          method="dialog"
          className="modal-box text-sm relative flex flex-col !p-6 gap-4 bg-[#272B30]"
        >
          <button
            className="btn btn-sm btn-circle modal-box--close"
            onClick={toggleDialog}
          >
            ✕
          </button>

          <div className="modal-box--body !py-2 !px-2">
            <div className="flex flex-col text-center self-stretch justify-center">
              <span className="text-2xl font-semibold">
                Welcome to Launchpad Aptos
              </span>
              <span className="text-sm font-normal">
                To get started, please connect your wallet.
              </span>
            </div>
            <div className="flex flex-col gap-3 p-2 self-stretch">
              {renderWalletConnectorGroup()}
            </div>
          </div>
        </form>
      </dialog>
    </>
  );
}

export default WalletConnectBtn;
