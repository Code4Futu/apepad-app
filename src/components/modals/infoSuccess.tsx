import { ChainId } from "@/config/type";
import React, { ReactNode } from "react";

interface Props {
  isDialogOpen: boolean;
  toogleDialog: () => void;
  txUrl: string;
  title?: string;
  icon?: string;
  children: ReactNode;
}

const InfoSuccessDialog = ({
  isDialogOpen,
  toogleDialog,
  txUrl,
  title,
  children,
  icon = "fa-duotone fa-sack-dollar text-2xl",
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
              <i className={icon}></i>
            </div>
            <h3 className="text-xl mb-8">{title}</h3>

            {children}
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

export default InfoSuccessDialog;
