import React from "react";

const StakeForm = (props: any) => {
  return (
    <>
      <div className="fadein w-full mx-auto text-sm">
        <div className="bg-base-300/40 rounded-box p-4 pb-6">
          <div className="flex items-center justify-between text-sm opacity-70 mb-2">
            <div>You stake</div>
            <div>Balance: 1,000</div>
          </div>
          <div className="flex items-center justify-between text-lg font-semibold">
            <div className="flex items-center text-xl">
              <span className="flex items-center">
                <img
                  src={"/currency-icons/$LOOT.svg"}
                  alt=""
                  className="w-6 mr-3"
                />
                <span className="truncate text-xl">$LOOT</span>
              </span>
            </div>
            <input
              title="Token Amount"
              type="number"
              inputMode="decimal"
              pattern="^[0-9]*[.,]?[0-9]*$"
              autoCorrect="off"
              autoComplete="off"
              className="input-ghost text-2xl font-semibold text-right w-auto max-w-[160px] md:max-w-none"
              placeholder="0.00"
            ></input>
          </div>
          <div className="grid grid-cols-4 gap-1 mt-3">
            <button className="btn btn-sm bg-white/10 hover:bg-white/20">
              25%
            </button>
            <button className="btn btn-sm bg-white/10 hover:bg-white/20">
              50%
            </button>
            <button className="btn btn-sm bg-white/10 hover:bg-white/20">
              75%
            </button>
            <button className="btn btn-sm bg-white/10 hover:bg-white/20">
              Max
            </button>
          </div>
          {/* <div className="mt-4 mb-1">
            <div className="flex items-center justify-between text-xs opacity-70 mb-2">
              <div>For (Month)</div>
              <div>APY: </div>
            </div>
            <div>
              <form>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value="75"
                  className="range range-primary range-sm"
                  step="25"
                />
                <div className="w-full flex justify-between text-xs">
                  <span className="ml-1">1</span>
                  <span className="ml-1">3</span>
                  <span className="ml-3">6</span>
                  <span className="mx-1">9</span>
                  <span className="mr-1">12</span>
                </div>
              </form>
            </div>
          </div> */}
        </div>

        {/* <div className="-my-2 text-center">
          <span className="inline-flex justify-center items-center bg-base-200 w-6 h-6 rounded-full ring-2 ring-base-100 cursor-default shadow">
            <i className="fa-solid fa-arrow-down transition-all"></i>
          </span>
        </div> */}

        {/* <div className="border border-base-content border-opacity-20 rounded-box p-4">
          <div className="flex items-center justify-between text-sm opacity-70 mb-2">
            <div>Est. Daily Claimable</div>
            <div className="badge badge-success gap-1">
              <i className="fa-solid fa-bolt animate-pulse"></i> APY: 18%
            </div>
          </div>
          <div className="">
            <div className="flex items-center justify-between font-semibold w-full">
              <div className="flex items-center text-xl">
                <img
                  src="/currency-icons/Ethereum.svg"
                  alt=""
                  className="w-6 mr-3"
                />
                <span className="">ETH</span>
              </div>
              <span className="text-2xl">
                ~0.002 <span className="text-sm opacity-50">/ Day</span>
              </span>
            </div>
          </div>
        </div> */}

        <div className="mt-4 mx-2 flex flex-col gap-2">
          <div className="flex items-baseline justify-between">
            <span className="text-sm text-base-content text-opacity-70 flex-shrink-0">
              Current Stake
              <span
                className="ml-1 opacity-70 hover:text-primary hover:opacity-100 tooltip text-sm cursor-pointer"
                data-tip="Lorem ipsum dolor sit amet"
              >
                <i className="fa-solid fa-circle-info"></i>
              </span>
            </span>
            <span className="border-b border-dashed border-base-content border-opacity-10 w-full mx-2"></span>
            <span className="whitespace-nowrap font-semibold">600 $LOOT</span>
          </div>

          {/* <div className="flex items-baseline justify-between">
            <span className="text-sm text-base-content text-opacity-70 flex-shrink-0">
              APY
              <span
                className="ml-1 opacity-70 hover:text-primary hover:opacity-100 tooltip text-sm cursor-pointer"
                data-tip="Lorem ipsum dolor sit amet"
              >
                <i className="fa-solid fa-circle-info"></i>
              </span>
            </span>
            <span className="border-b border-dashed border-base-content border-opacity-10 w-full mx-2"></span>
            <span className="whitespace-nowrap font-semibold">18.00%</span>
          </div> */}

          <div className="flex items-baseline justify-between">
            <span className="text-sm text-base-content text-opacity-70 flex-shrink-0">
              Stake Duration
              <span
                className="ml-1 opacity-70 hover:text-primary hover:opacity-100 tooltip text-sm cursor-pointer"
                data-tip="Lorem ipsum dolor sit amet"
              >
                <i className="fa-solid fa-circle-info"></i>
              </span>
            </span>
            <span className="border-b border-dashed border-base-content border-opacity-10 w-full mx-2"></span>
            <span className="whitespace-nowrap">Flexible</span>
          </div>
        </div>

        <div className="mt-6 grid gap-2">
          {/* User not approved yet */}
          {/* <button className="btn btn-block btn-primary text-base">
            Enable Pool
          </button> */}
          <button
            onClick={() =>
              // @ts-expect-error
              document.getElementById("stakeReceipt_modal").showModal()
            }
            className="btn btn-block btn-primary text-base"
          >
            Stake Now
          </button>
        </div>
      </div>
    </>
  );
};
export default StakeForm;
