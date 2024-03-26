import React, { useState } from "react";

function BurnReceiptDialog() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const toggleDialog = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  return (
    <>
      {/* Receipt Dialog */}
      <dialog
        id="burnReceipt_modal"
        className={`${
          isDialogOpen ? "z-20" : " -z-10"
        } modal modal-bottom md:modal-middle`}
        open={isDialogOpen}
        onClose={toggleDialog}
      >
        <form
          method="dialog"
          className="modal-box text-sm relative md:max-w-sm"
        >
          <button
            className="btn btn-sm btn-circle modal-box--close"
            onClick={toggleDialog}
          >
            ✕
          </button>

          <div className="modal-box--body !p-8 text-center">
            <div className=" bg-success/10 text-success w-12 h-12 inline-flex justify-center items-center rounded-full mb-4">
              <i className="fa-duotone fa-fire text-2xl "></i>
            </div>
            <h3 className="text-xl mb-8">Successfully Burn</h3>

            <div className="space-y-3">

              <div className="flex items-baseline justify-between">
                <span className="text-base-content/70 flex-shrink-0">
                  Package
                </span>
                <span className="border-b border-dashed border-base-content border-opacity-10 w-full mx-2"></span>
                <span className="whitespace-nowrap font-medium">
                  <strong className="font-bold">1</strong>
                  <span className="opacity-70 ml-1">xLOOT</span>
                </span>
              </div>

              <div className="flex items-baseline justify-between">
                <span className="text-base-content/70 flex-shrink-0">
                  Burned
                </span>
                <span className="border-b border-dashed border-base-content border-opacity-10 w-full mx-2"></span>
                <span className="whitespace-nowrap font-medium">
                  <strong className="font-bold">10K</strong>
                  <span className="opacity-70 ml-1">$LOOT</span>
                </span>
              </div>

              <div className="flex items-baseline justify-between">
                <span className="text-base-content/70 flex-shrink-0">
                  Bonus
                </span>
                <span className="border-b border-dashed border-base-content border-opacity-10 w-full mx-2"></span>
                <span className="whitespace-nowrap font-medium">
                  <strong className="font-bold">15%</strong>
                </span>
              </div>
            </div>

            <div className="flex items-baseline justify-between border-t border-base-content/20 pt-6 mt-6">
              <span className="text-base-content/70 flex-shrink-0">
                Total Received
              </span>
              <span className="border-b border-dashed border-base-content border-opacity-10 w-full mx-2"></span>
              <span className="whitespace-nowrap font-medium">
                <strong className="font-bold text-xl">1</strong>
                <span className="opacity-70 ml-1">xLOOT</span>
              </span>
            </div>

            <div className="flex items-baseline justify-between text-left bg-accent/20 px-3 py-2 rounded-box mt-6">
              <div>
                <span className="text-base-content/70 flex-shrink-0">xLOOT (ERC-20):</span>
                <span className="font-mono ml-2">0x95...8005</span>
              </div>
              <button className="btn btn-sm btn-ghost btn-circle tooltip" data-tip="Copy Address"><i className="fa-solid fa-copy"></i></button>
            </div>
          </div>

          <div className="px-8 pb-6 flex flex-col md:flex-row justify-evenly items-center gap-2">
            <a
              className="btn btn-md btn-neutral w-full md:w-1/2"
              target="_blank" rel="noreferrer"
            >
              View on Etherscan
            </a>
            <button
              className="btn btn-md btn-primary w-full md:w-1/2"
              onClick={toggleDialog}
            >
              Close
            </button>
          </div>

        </form>
      </dialog>
      {/* //Receipt Dialog  */}
    </>
  );
}

export default BurnReceiptDialog;
