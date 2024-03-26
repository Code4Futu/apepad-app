import { Disclosure } from "@headlessui/react";
import React, { Fragment } from "react";

function Info() {
  return (
    <>
      <div className="w-full">
        <div className="card--header !flex-row !items-center !justify-between">
          <h4 className="">
            <i className="fa-duotone fa-circle-info mr-3 text-lg"></i>
            <span className="">Burn Information</span>
          </h4>
          <div className="mt-2 md:mt-0">
            <a
              href="https://docs.lootbot.xyz/lootbot/technical-documentation/usdxloot"
              target="_blank"
              rel="noreferrer"
              className="btn btn-md"
            >
              <i className="fa-solid fa-book-open-reader"></i>
              <span className="text-xs ml-3 hidden md:inline">Learn more</span>
            </a>
          </div>
        </div>

        <div className="card--body grid md:grid-cols-2 gap-4 md:gap-6 -mx-2 md:mx-auto">
          <div className="type border border-base-content border-opacity-10 rounded-box px-6 py-5">
            <h6 className="font-bold">Burn Requirements</h6>
            <p>
              A minimum of 15,000 $LOOT needs to be burnt to receive $xLOOT.
              $xLOOT are ERC-721 NFTs which entitle holders to the majority of
              revenue share. Burning is a one-way ticket, you can not convert
              back from $xLOOT into $LOOT.
            </p>
            <p>
              $xLOOT holders, apart from higher revenue sharing %, also receives
              special privileges such as higher portions of Airdropped tokens
              from Freemium commissions & private lounge chat.
            </p>
          </div>

          <div className="type border border-base-content border-opacity-10 rounded-box px-6 py-5">
            <h6 className="font-bold"> Burn more $LOOT, earn more $xLOOT 🔥</h6>
            <ul>
              <li className="">
                <div className="flex items-center">
                  <span className="w-[72px]">
                    <strong className="font-bold">1</strong>{" "}
                    <span className="text-xs opacity-50">xLOOT</span>
                  </span>
                  <i className="fa-light fa-arrow-right mr-3"></i>
                  <span className="w-28 mr-2">
                    <strong className="font-bold">15K</strong>{" "}
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
                    <span className="line-through opacity-50 mr-1 text-xs">
                      75K
                    </span>
                    <strong className="font-bold">71,25K</strong>{" "}
                    <span className="text-xs opacity-50">$LOOT</span>
                  </span>
                  <span className="badge badge-success !text-[10px] ml-auto min-w-[100px] !px-1">
                    5% Bonus
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
                    <span className="line-through opacity-50 mr-1 text-xs">
                      150K
                    </span>
                    <strong className="font-bold">135K</strong>{" "}
                    <span className="text-xs opacity-50">$LOOT</span>
                  </span>
                  <span className="badge badge-success !text-[10px] ml-auto min-w-[100px] !px-1">
                    10% Bonus
                  </span>
                </div>
              </li>
              {/* <li>
                <div className="flex items-center">
                  <span className="w-[72px]">
                    <strong className="font-bold">15</strong>{" "}
                    <span className="text-xs opacity-50">xLOOT</span>
                  </span>
                  <i className="fa-light fa-arrow-right mr-3"></i>
                  <span className="mr-2">
                    <span className="line-through opacity-50 mr-1 text-xs">
                      150K
                    </span>
                    <strong className="font-bold">127,5K</strong>{" "}
                    <span className="text-xs opacity-50">$LOOT</span>
                  </span>
                  <span className="badge badge-success !text-[10px] ml-auto min-w-[100px] !px-1">
                    15% Bonus
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
                    <span className="line-through opacity-50 mr-1 text-xs">
                      200K
                    </span>
                    <strong className="font-bold">160K</strong>{" "}
                    <span className="text-xs opacity-50">xLOOT</span>
                  </span>
                  <span className="badge badge-success !text-[10px] ml-auto min-w-[100px] !px-1">
                    20% Bonus
                  </span>
                </div>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Info;
