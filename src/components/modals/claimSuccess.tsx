import { ChainId } from "@/config/type";
import React from "react";

interface Props {
  isDialogOpen: boolean;
  toogleDialog: () => void;
  totalClaimable: string;
  txUrl: string;
}

const ClaimSuccessDialog = ({
  isDialogOpen,
  toogleDialog,
  totalClaimable,
  txUrl,
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
              <i className="fa-duotone fa-sack-dollar text-2xl "></i>
            </div>
            <h3 className="text-xl mb-8">Claimed Successfully</h3>

            <div className="space-y-3">
              <div className="flex items-baseline justify-between">
                <span className="text-base-content/70 flex-shrink-0">
                  Total Claimable
                </span>
                <span className="border-b border-dashed border-base-content border-opacity-10 w-full mx-2"></span>
                <span className="whitespace-nowrap font-medium">
                  <strong className="font-bold">{totalClaimable}</strong>
                  <span className="opacity-70 ml-1">ETH</span>
                </span>
              </div>
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
            <button
              className="btn btn-md btn-primary w-full md:w-1/2"
              onClick={toogleDialog}
            >
              Close
            </button>
          </div>
        </form>
      </dialog>
      {/* //Receipt Dialog  */}
    </>
  );
};

export default ClaimSuccessDialog;
