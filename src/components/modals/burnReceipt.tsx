import { CONTRACTS } from "@/config/contracts";
import { ChainId } from "@/config/type";
import { shortenString } from "@/utils/helper/number";
import React, { useState } from "react";
import { Tooltip } from "react-tooltip";
import { CopyToClipboardState } from "react-use/lib/useCopyToClipboard";

interface Props {
  isDialogOpen: boolean;
  toogleDialog: () => void;
  handleClickCopy: () => void;
  currentPackage: {
    name: string;
    price: string;
    discount: string;
  };
  addressXloot: string;
  copyResult: CopyToClipboardState;
  txUrl: string;
  chainId: ChainId;
}

const BurnReceiptDialog = ({
  isDialogOpen,
  toogleDialog,
  currentPackage,
  handleClickCopy,
  addressXloot,
  copyResult,
  txUrl,
  chainId,
}: Props) => {
  return (
    <>
      {/* Receipt Dialog */}
      <dialog
        id="burnReceipt_modal"
        className={`${
          isDialogOpen ? "z-99" : " -z-10"
        } modal modal-bottom md:modal-middle`}
        open={isDialogOpen}
        onClose={toogleDialog}
      >
        <form
          method="dialog"
          className="modal-box text-sm relative md:max-w-sm"
        >
          <button
            className="btn btn-sm btn-circle modal-box--close"
            onClick={toogleDialog}
          >
            ✕
          </button>

          <div className="modal-box--body !p-8 text-center">
            <div className=" bg-success/10 text-success w-12 h-12 inline-flex justify-center items-center rounded-full mb-4">
              <i className="fa-duotone fa-fire text-2xl "></i>
            </div>
            <h3 className="text-xl mb-8">Successfully Burnt</h3>

            <div className="space-y-3">
              <div className="flex items-baseline justify-between">
                <span className="text-base-content/70 flex-shrink-0">
                  Package
                </span>
                <span className="border-b border-dashed border-base-content border-opacity-10 w-full mx-2"></span>
                <span className="whitespace-nowrap font-medium">
                  <strong className="font-bold">{currentPackage.name}</strong>
                  <span className="opacity-70 ml-1">xLOOT</span>
                </span>
              </div>

              <div className="flex items-baseline justify-between">
                <span className="text-base-content/70 flex-shrink-0">
                  Burnt
                </span>
                <span className="border-b border-dashed border-base-content border-opacity-10 w-full mx-2"></span>
                <span className="whitespace-nowrap font-medium">
                  <strong className="font-bold">{currentPackage.price}</strong>
                  <span className="opacity-70 ml-1">$LOOT</span>
                </span>
              </div>

              <div className="flex items-baseline justify-between">
                <span className="text-base-content/70 flex-shrink-0">
                  Bonus
                </span>
                <span className="border-b border-dashed border-base-content border-opacity-10 w-full mx-2"></span>
                <span className="whitespace-nowrap font-medium">
                  <strong className="font-bold">
                    {currentPackage.discount || "-"}
                  </strong>
                </span>
              </div>
            </div>

            <div className="flex items-baseline justify-between border-t border-base-content/20 pt-6 mt-6">
              <span className="text-base-content/70 flex-shrink-0">
                Total Received
              </span>
              <span className="border-b border-dashed border-base-content border-opacity-10 w-full mx-2"></span>
              <span className="whitespace-nowrap font-medium">
                <strong className="font-bold text-xl">
                  {currentPackage.name}
                </strong>
                <span className="opacity-70 ml-1">xLOOT</span>
              </span>
            </div>

            <div className="flex  justify-between items-center text-left bg-accent/20 px-3 py-2 rounded-box mt-6">
              <div>
                <span className="text-base-content/70 flex-shrink-0">
                  xLOOT (ERC-721):
                </span>
                <span className="font-mono ml-2">
                  {shortenString(addressXloot, 12)}
                </span>
              </div>

              <>
                <div
                  className="flex justify-center btn btn-sm btn-ghost btn-circle tooltip"
                  data-tooltip-id="my-tooltip-1"
                  data-tooltip-content={
                    copyResult?.value ? "Copied" : "Copy address"
                  }
                  onClick={handleClickCopy}
                >
                  <i className="fa-solid fa-copy"></i>
                </div>
                <Tooltip id="my-tooltip-1" />
              </>
            </div>
          </div>

          <div className="px-8 pb-6 flex flex-col md:flex-row justify-evenly items-center gap-2">
            <a
              href={txUrl}
              className="btn btn-md btn-neutral w-full md:w-1/2"
              target="_blank"
              rel="noreferrer"
            >
              View on Etherscan
            </a>
            <a
              href={`https://opensea.io/assets/ethereum/${CONTRACTS[chainId]["XLOOT"]}`}
              className="btn btn-md btn-primary w-full md:w-1/2"
              target="_blank"
              rel="noreferrer"
            >
              View on OpenSea
            </a>
          </div>
        </form>
      </dialog>
      {/* //Receipt Dialog  */}
    </>
  );
};

export default BurnReceiptDialog;
