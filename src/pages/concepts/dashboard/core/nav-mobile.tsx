import { useAtom } from "jotai";
import React, { Fragment, useState } from "react";
import MainNavigation from "./nav-main";

// Mobile Bottom Navigation
function MobileNavigation() {
  const itemClass = "nav-mobile-item cursor-pointer";
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const toogleDialog = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  return (
    <>
      {/* Mobile Menu Modal*/}
      <dialog
        id="mobileMenu_modal"
        className={`${
          isDialogOpen ? "z-20" : "-z-10"
        } modal modal-bottom md:modal-middle`}
        open={isDialogOpen}
        onClose={toogleDialog}
      >
        <form
          method="dialog"
          className="modal-box text-sm relative md:max-w-sm"
        >
          <button
            className="btn btn-sm btn-circle modal-box--close !top-6 !right-4"
            onClick={toogleDialog}
          >
            ✕
          </button>

          <div className="modal-box--body !py-2 !px-2">
            <MainNavigation />
          </div>
        </form>
      </dialog>
      {/* //Mobile Menu Modal */}

      <div className="nav-mobile">
        <div className="flex w-full justify-between items-center px-2 max-w-3xl mx-auto">
          <a href="./dashboard#claim" className={itemClass}>
            <i className="text-xl fa-duotone fa-hand-holding-dollar"></i>
            <span className="text-xs leading-none mt-2">Revshare</span>
          </a>

          <a href="./dashboard#stake" className={itemClass}>
            <i className="text-xl fa-duotone fa-sack-dollar"></i>
            <span className="text-xs leading-none mt-2">Stake</span>
          </a>

          <a href="./dashboard#burner" className={itemClass}>
            <i className="text-xl fa-duotone fa-fire"></i>
            <span className="text-xs leading-none mt-2">Burn</span>
          </a>

          <a href="./dashboard#tracker" className={itemClass}>
            <i className="text-xl fa-duotone fa-chart-network"></i>
            <span className="text-xs leading-none mt-2">Tracker</span>
          </a>

          <button onClick={toogleDialog} className={itemClass}>
            <i className={`text-xl fa-duotone fa-ellipsis`}></i>
            <span className="text-xs leading-none mt-2">More</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default MobileNavigation;
