import React from "react";

const Revshare = (props: any) => {
  return (
    <>
      {/* Revshare */}
      <div className={`w-full`}>
        <div className="grid lg:grid-cols-12 gap-4 md:gap-6">
          <div className="lg:col-span-4 card">
            <div className="card--header">
              <h4 className="">
                <i className="fa-duotone fa-coins mr-3"></i>
                <span className="">RevShare Info</span>
              </h4>
            </div>

            <div className="card--body">
              <div className="space-y-1 text-base border-b border-base-content/10 pb-4">
                <div className="flex flex-row items-center justify-between">
                  <span className="text-sm text-base-content/70">xLOOT</span>
                  <strong>18 xLOOT</strong>
                </div>
                {/* <div className="flex flex-row items-center justify-between">
                  <span className="text-sm text-base-content/70">
                    LOOT Staked
                  </span>
                  <strong>14,029 $LOOT</strong>
                </div> */}
              </div>

              <div className="space-y-2 mt-4">
                <div className="flex items-baseline justify-between">
                  <span className="flex-shrink-0">
                    <span className="text-sm text-base-content/70">Start</span>
                  </span>
                  <span className="border-b border-dashed border-base-content border-opacity-10 w-full mx-2"></span>
                  <span className="whitespace-nowrap font-medium">
                    2023-07-31 07:28 UTC
                  </span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="flex-shrink-0">
                    <span className="text-sm text-base-content/70">
                      Duration
                    </span>
                  </span>
                  <span className="border-b border-dashed border-base-content border-opacity-10 w-full mx-2"></span>
                  <span className="whitespace-nowrap font-medium">92 Days</span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="flex-shrink-0">
                    <span className="text-sm text-base-content/70">Status</span>
                    <span
                      className="ml-1 opacity-70 hover:text-primary hover:opacity-100 tooltip text-sm cursor-pointer"
                      data-tip="Lorem ipsum dolor sit amet"
                    >
                      <i className="fa-solid fa-circle-info"></i>
                    </span>
                  </span>
                  <span className="border-b border-dashed border-base-content border-opacity-10 w-full mx-2"></span>
                  <span className="badge !text-[10px] !px-5 badge-rounded bg-success text-success-content whitespace-nowrap font-medium">
                    Eligible
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 card card-primary">
            <div className="card--header">
              <h4 className="">
                <i className="fa-duotone fa-hand-holding-dollar mr-3"></i>
                <span className="">Claimable Rewards</span>
              </h4>

              <div className="form-control border border-base-content/10 rounded-box py-2 px-2 -mx-2 mt-2 md:border-0 md:m-0 md:p-0">
                <label className="flex justify-between items-center cursor-pointer gap-3">
                  <span className="label-text">
                    Auto Compound
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://docs.lootbot.xyz/lootbot/technical-documentation/revenue-sharing/auto-compounding"
                      className="inline-flex items-center"
                    >
                      <i className="fa-duotone fa-circle-info ml-2 text-base hover:text-primary"></i>
                    </a>
                  </span>
                  <input type="checkbox" className="toggle toggle-primary" />
                </label>
              </div>
            </div>

            <div className="card--body">
              <div className="grid grid-cols-3 gap-6 md:divide-x divide-base-content/10 text-base md:border-2 border-base-content/10 rounded-box ">
                <div className="flex flex-col gap-1 items-stretch p-0 md:px-6 md:py-4">
                  <span className="text-xs text-base-content/70 uppercase">
                    Claimable
                  </span>
                  <strong className="text-primary">0.2 ETH</strong>
                </div>
                <div className="flex flex-col gap-1 items-stretch p-0 md:px-6 md:py-4">
                  <span className="text-xs text-base-content/70 uppercase">
                    Unclaimed
                  </span>
                  <strong>-</strong>
                </div>
                <div className="flex flex-col gap-1 items-stretch p-0 md:px-6 md:py-4">
                  <span className="text-xs text-base-content/70 uppercase">
                    Total Claimed
                  </span>
                  <strong className="text-base">20.2 ETH</strong>
                </div>
              </div>

              <div className="mt-6">
                <button className="btn btn-block h-auto btn-primary text-base">
                  Claim 0.2 ETH
                </button>
              </div>

              {/* <div className="text-xs opacity-70 mt-2 text-center">
                You've claimed 80.0% of your total allowance
              </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* //Claim */}
    </>
  );
};
export default Revshare;
