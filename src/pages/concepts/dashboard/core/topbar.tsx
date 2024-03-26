import React, { useState } from "react";

// ClassName
const topbarClass =
  "sticky flex-shrink-0 top-0 left-0 right-0 w-full z-40 h-14 bg-accent/20 text-base-content/70 text-sm backdrop-blur-3xl z-50";

function TopBar() {
  return (
    <div className={topbarClass}>
      <div className="flex items-center md:justify-center md:text-center relative pl-0 md:pl-4 pr-12 h-full w-full">
        <div className="flex items-center">
          <div
            className={
              "flex flex-col md:flex-row items-baseline gap-1 md:gap-2 px-4"
            }
          >
            <span className="uppercase text-[10px] md:text-xs leading-none whitespace-nowrap">
              <i className="!hidden md:!inline fa-solid fa-sack-dollar text-accent mr-2"></i>
              <span className="hidden md:inline">Last</span> Revshare:
            </span>
            <strong className="text-base-content text-base font-bold leading-none">
              50 ETH
            </strong>
          </div>

          <div
            className="h-8 md:h-4 w-[1px] bg-base-content/50"
            role="reparator"
          >
            &nbsp;
          </div>

          <div
            className={
              "flex flex-col md:flex-row items-baseline gap-1 md:gap-2 px-4"
            }
          >
            <span className="uppercase text-[10px] md:text-xs leading-none whitespace-nowrap">
              <i className="!hidden md:!inline fa-solid fa-clock text-accent mr-2"></i>
              Next EPOCH:
            </span>

            <div className="timerRoot text-base-content text-base leading-none">
              <div className="flex space-x-2 items-baseline">
                <div className="flex items-baseline lowercase">
                  <span className="countdown slashed-zero leading-4 font-bold">
                    1
                  </span>
                  <span className="opacity-70 ml-1">d</span>
                </div>
                <div className="flex items-baseline lowercase">
                  <span className="countdown slashed-zero leading-4 font-bold">
                    14
                  </span>
                  <span className="opacity-70 ml-1">h</span>
                </div>
                <div className="flex items-baseline lowercase">
                  <span className="countdown slashed-zero leading-4 font-bold">
                    05
                  </span>
                  <span className="opacity-70 ml-1">m</span>
                </div>
                <div className="flex items-baseline lowercase leading-none relative top-[1px]">
                  :
                </div>
                <div className="flex items-baseline lowercase">
                  <span className="countdown slashed-zero leading-4 font-bold">
                    55
                  </span>
                  <span className="opacity-70 ml-1">ssss</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <button className="btn btn-sm btn-circle btn-ghost absolute right-2 md:right-6 top-3">
          <i className="fa-regular fa-xmark"></i>
        </button> */}
      </div>
    </div>
  );
}

export default TopBar;
