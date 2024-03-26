import { Disclosure } from "@headlessui/react";
import React, { Fragment } from "react";

function Info() {
  return (
    <>
      <div className="w-full">
        <div className="card--header !flex-row !items-center !justify-between">
          <h4 className="">
            <i className="fa-duotone fa-circle-info mr-3 text-lg"></i>
            <span className="">Burner Information</span>
          </h4>
          <div className="mt-2 md:mt-0">
            <a href="#" target="_blank" rel="noreferrer" className="btn btn-md">
              <i className="fa-solid fa-book-open-reader"></i>
              <span className="text-xs ml-3 hidden md:inline">Learn more</span>
            </a>
          </div>
        </div>

        <div className="card--body grid md:grid-cols-2 gap-4 md:gap-6 -mx-2 md:mx-auto">
          <div className="type border border-base-content border-opacity-10 rounded-box px-6 py-5">
            <h6 className="font-bold">Quick Introduction</h6>
            <p>
              Holders can connect using this dashboard to view and claim their
              revenue share rewards. A minimum balance of 50 UNIBOT is required.
            </p>
            <p>
              Claiming rewards claims all available unclaimed rewards and
              requires a minimum of 0.1 ETH accumulated. To lookup revenue
              shares for other wallets, use the Holder Rewards or Referral
              Rewards browser.
            </p>
          </div>

          <div className="type border border-base-content border-opacity-10 rounded-box px-6 py-5">
            <h6 className="font-bold">Discount Calculation</h6>
            <ul>
              <li className="">
                <div className="flex items-center">
                  <span className="w-[72px]">
                    <strong className="font-bold">1</strong>{" "}
                    <span className="text-xs opacity-50">xLOOT</span>
                  </span>
                  <i className="fa-light fa-arrow-right mr-3"></i>
                  <span className="w-28 mr-2">
                    <strong className="font-bold">10K</strong>{" "}
                    <span className="text-xs opacity-50">$LOOT</span>
                  </span>
                  <span></span>
                </div>
              </li>
              <li>
                <div className="flex items-center w-full">
                  <span className="w-[72px]">
                    <strong className="font-bold">5</strong>{" "}
                    <span className="text-xs opacity-50">xLOOT</span>
                  </span>
                  <i className="fa-light fa-arrow-right mr-3"></i>
                  <span className="mr-2">
                    <span className="line-through opacity-50 mr-1 text-xs">50K</span>
                    <strong className="font-bold">45K</strong>{" "}
                    <span className="text-xs opacity-50">$LOOT</span>
                  </span>
                  <span className="badge badge-success !text-[10px] ml-auto min-w-[40px] md:min-w-[100px] !px-1">
                    <span className="hidden md:inline mr-1">bonus</span> 5%
                  </span>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="w-[72px]">
                    <strong className="font-bold">10</strong>{" "}
                    <span className="text-xs opacity-50">xLOOT</span>
                  </span>
                  <i className="fa-light fa-arrow-right mr-3"></i>
                  <span className="mr-2">
                    <span className="line-through opacity-50 mr-1 text-xs">100K</span>
                    <strong className="font-bold">90K</strong>{" "}
                    <span className="text-xs opacity-50">$LOOT</span>
                  </span>
                  <span className="badge badge-success !text-[10px] ml-auto min-w-[40px] md:min-w-[100px] !px-1">
                    <span className="hidden md:inline mr-1">bonus</span> 10%
                  </span>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="w-[72px]">
                    <strong className="font-bold">15</strong>{" "}
                    <span className="text-xs opacity-50">xLOOT</span>
                  </span>
                  <i className="fa-light fa-arrow-right mr-3"></i>
                  <span className="mr-2">
                    <span className="line-through opacity-50 mr-1 text-xs">150K</span>
                    <strong className="font-bold">112,5K</strong>{" "}
                    <span className="text-xs opacity-50">$LOOT</span>
                  </span>
                  <span className="badge badge-success !text-[10px] ml-auto min-w-[40px] md:min-w-[100px] !px-1">
                    <span className="hidden md:inline mr-1">bonus</span> 15%
                  </span>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="w-[72px]">
                    <strong className="font-bold">20</strong>{" "}
                    <span className="text-xs opacity-50">xLOOT</span>
                  </span>
                  <i className="fa-light fa-arrow-right mr-3"></i>
                  <span className="mr-2">
                    <span className="line-through opacity-50 mr-1 text-xs">200K</span>
                    <strong className="font-bold">160K</strong>{" "}
                    <span className="text-xs opacity-50">xLOOT</span>
                  </span>
                  <span className="badge badge-success !text-[10px] ml-auto min-w-[40px] md:min-w-[100px] !px-1">
                    <span className="hidden md:inline mr-1">bonus</span> 20%
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Info;
