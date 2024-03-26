import { Disclosure } from "@headlessui/react";
import React, { Fragment } from "react";

function Info() {
  return (
    <>
      <div className="w-full">
        <div className="card--header !flex-row !items-center !justify-between">
          <h4 className="">
            <i className="fa-duotone fa-circle-info mr-3 text-lg"></i>
            <span className="">Stake Information</span>
          </h4>
          <div className="mt-2 md:mt-0">
            <a
              href="https://docs.lootbot.xyz/lootbot/lootbot-dashboard/about-dashboard/staking"
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
              $LOOT holders can stake their tokens to claim revenue share
              rewards. Staking also contributes to loyalty points which directly
              transfer to more commissioned airdrop tokens.
            </p>
            <p>
              Rewards are paid out every epoch. An epoch takes place every 7
              days. Staking rewards can be claimed anytime, however it is
              recommended that users let the rewards accumulate to a significant
              amount before claiming, as each claim will require users to pay
              gas fees.
            </p>
          </div>

          <div className="type border border-base-content border-opacity-10 rounded-box px-6 py-5">
            <h6 className="font-bold">APR calculation</h6>
            <p>
              APR, or Annual Percentage Rate, represents the annual rate of
              return for staking your $LOOT tokens. The APR is calculated based
              on the current ratio of rewards to the amount of $LOOT staked. The
              calculation takes into account the most recent epoch in which
              rewards are distributed.
            </p>
            <p>
              The APR can vary from epoch to epoch based on changes in the
              staking pool and reward amounts. The calculated APR is an estimate
              and not a guaranteed return rate, as market conditions and staking
              behaviors can change.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Info;
