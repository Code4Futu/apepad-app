import { getLootBalance } from "@/services";
import React from "react";

function BalanceChecker() {
  return (
    <>
      <div className="dropdown dropdown-bottom dropdown-end flex-shrink-0">
        <div className="flex items-center relative overflow-hidden rounded-box">
          <label
            tabIndex={0}
            className="btn btn-md px-3 btn-outline border-primary bg-base-200 hover:bg-base-100 hover:border-primary hover:text-base-content z-[1] relative"
          >
            <img src="/$LOOT.svg" alt="" className="h-5 mr-2" />
            <span>2.02K</span>
          </label>
        </div>
      </div>
    </>
  );
}

export default BalanceChecker;
