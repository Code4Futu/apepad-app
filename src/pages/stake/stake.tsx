import React, { useState } from "react";

import StakeForm from "./stake-form";
import RedeemForm from "./redeem-form";
import UnstakeForm from "./unstake-form";
import { StakingEvent, StatsProps } from "./main";
import { currencyFormatter } from "@/utils/helper/number";

function Stake({
  stats,
  setEvents,
}: {
  stats: StatsProps;
  setEvents: React.Dispatch<React.SetStateAction<StakingEvent[]>>;
}) {
  const [tab, setTab] = useState("stake");

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const toggleDialog = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  return (
    <>
      {/* Stake */}
      <div className={`w-full`}>
        <div className="grid lg:grid-cols-12 gap-4 md:gap-6">
          <div className="lg:col-span-4 order-last lg:-order-last flex flex-col items-stretch">
            <div className="flex items-center justify-center bg-success/10 rounded-md text-sm mb-4 divide-x divide-base-content/10">
              <div className="flex flex-col items-center justify-center  gap-1 w-full px-4 py-3 ">
                <div className="flex items-center gap-1">
                  <span className="text-accent">POINTS</span>
                  {/* <span
                    className="ml-1 opacity-70 hover:text-accent hover:opacity-100 tooltip text-sm cursor-pointer"
                    data-tip="Lorem ipsum dolor sit amet"
                  >
                    <i className="fa-solid fa-circle-info"></i>
                  </span> */}
                </div>
                <div className="font-semibold">
                  {typeof stats?.points === "number" ? (
                    `${currencyFormatter(stats.points ?? 0, 0)}`
                  ) : (
                    <div className="animate-pulse font-normal">
                      Calculating...
                    </div>
                  )}
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-1 w-full px-4 py-3 ">
                <div className="flex items-center gap-1">
                  <span className="text-success">APR</span>
                  {/* <span
                    className="ml-1 opacity-70 hover:text-success hover:opacity-100 tooltip text-sm cursor-pointer"
                    data-tip="Lorem ipsum dolor sit amet"
                  >
                    <i className="fa-solid fa-circle-info"></i>
                  </span> */}
                </div>
                <div className="font-semibold">
                  {typeof stats?.apr === "number" && +stats.apr > 0 ? (
                    `${currencyFormatter(stats.apr ?? 0, 0)} %`
                  ) : (
                    <div className="animate-pulse font-normal">
                      Calculating...
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card--body !pt-0">
                <ul className="steps steps-vertical">
                  <li className="step step-neutral !text-left">
                    Connect Wallet
                  </li>
                  <li className="step step-neutral !text-left">
                    Select Your $LOOT Amount
                  </li>
                  <li className="step step-neutral !text-left">
                    Stake your $LOOT to earn rewards
                  </li>
                </ul>
                <div className="flex bg-accent/10  px-4 py-3 rounded-md text-sm mt-4">
                  <i className="fa-solid fa-circle-info mr-3 text-base text-accent mt-1"></i>
                  <span>
                    The bigger amount of $LOOT and the longer you stake, the
                    higher your reward portion gets.
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 card card-primary">
            <div className="card--header flex !flex-col-reverse md:!flex-row justify-between">
              <h4 className="">
                <i className="fa-duotone fa-sack-dollar mr-3"></i>
                {tab === "stake" && (
                  <span className="">Stake $LOOT to get ETH</span>
                )}
                {tab === "unstake" && <span className="">Unstake $LOOT</span>}
                {tab === "claim" && <span className="">Claimable Rewards</span>}
              </h4>
              <div className="mb-4 md:mb-0">
                <div className="rounded-full bg-base-300/40 p-1 gap-1 inline-flex flex-row-reverse md:flex-row">
                  <button
                    onClick={() => setTab("claim")}
                    className={`btn btn-sm btn-ghost rounded-full ${
                      tab === "claim" &&
                      "border-primary bg-transparent hover:border-primary hover:bg-transparent text-primary rounded-full"
                    }`}
                  >
                    Claim
                  </button>
                  <button
                    onClick={() => setTab("unstake")}
                    className={`btn btn-sm btn-ghost rounded-full ${
                      tab === "unstake" &&
                      "border-primary bg-transparent hover:border-primary hover:bg-transparent text-primary rounded-full"
                    }`}
                  >
                    Unstake
                  </button>
                  <button
                    onClick={() => setTab("stake")}
                    className={`btn btn-sm btn-ghost rounded-full ${
                      tab === "stake" &&
                      "border-primary bg-transparent hover:border-primary hover:bg-transparent text-primary rounded-full"
                    }`}
                  >
                    Stake
                  </button>
                </div>
              </div>
            </div>
            <div className="card--body">
              {tab === "claim" && <RedeemForm setEvents={setEvents} />}
              {tab === "unstake" && <UnstakeForm setEvents={setEvents} />}
              {tab === "stake" && <StakeForm setEvents={setEvents} />}
            </div>
          </div>
        </div>
      </div>
      {/* //Stake */}
    </>
  );
}

export default Stake;
