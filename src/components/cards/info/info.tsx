import { Disclosure } from "@headlessui/react";
import React, { Fragment } from "react";

function Info() {
  return (
    <>
      <div className="w-full">
        <div className="card--header  !flex-row !items-center !justify-between">
          <h4 className="">
            <i className="fa-duotone fa-circle-info mr-3 text-lg"></i>
            <span className="">Revenue Share Dashboard</span>
          </h4>
          <div className="mt-2 md:mt-0">
            <a
              href="https://docs.lootbot.xyz/lootbot/technical-documentation/revenue-sharing"
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
            <h6 className="font-bold">Quick Introduction</h6>
            <p>
              Holders of $LOOT and $xLOOT are entitled to claim a share of
              revenue on a pro-rata basis. An Epoch occurs every 24 hours.
            </p>
            <p>
              To claim rewards, you need to accumulate at least{" "}
              <b className="font-bold">0.1 ETH </b>
              and this will include all available unredeemed rewards. If you do
              not meet the minimum holding requirement at the time of the epoch
              snapshot, your rewards will be forfeited into the reward pool.
            </p>
          </div>

          <div className="type border border-base-content border-opacity-10 rounded-box px-6 py-5">
            <h6 className="font-bold">Revshare Distribution Rules</h6>
            <ol>
              <li>
                You must hold at least <b className="font-bold">1000 $LOOT</b>{" "}
                or <b className="font-bold">1 $xLOOT</b> to be eligible for
                revenue sharing.
              </li>
              <li>
                To claim rewards, you must accumulate at least 0.1 ETH worth of
                unredeemed rewards.
              </li>
              <li>
                If your token holdings fall below the minimum threshold during
                an Epoch snapshot, your rewards will be forfeited into the
                reward pool.
              </li>
              <li>
                There's no maximum limit to the rewards you can claim. Your
                claims depend on the proportion of tokens you hold in relation
                to the total rewards pool.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}

export default Info;
