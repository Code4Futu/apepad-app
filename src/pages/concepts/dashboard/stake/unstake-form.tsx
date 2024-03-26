import React from "react";

const UnstakeForm = (props: any) => {
  return (
    <>
      <div className="fadein w-full mx-auto text-sm">
        <div className="bg-base-300/40 rounded-box p-4 pb-6">
          <div className="flex items-center justify-between text-sm opacity-70 mb-2">
            <div>You unstake</div>
            <div>Current Stake: 600</div>
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
        </div>

        <div className="mt-4 mx-2 flex flex-col gap-2">
          <div className="flex items-baseline justify-between">
            <span className="text-sm text-base-content text-opacity-70 flex-shrink-0">
              Remain Stake
            </span>
            <span className="border-b border-dashed border-base-content border-opacity-10 w-full mx-2"></span>
            <span className="whitespace-nowrap font-semibold">182 $LOOT</span>
          </div>

          <div className="flex items-baseline justify-between">
            <span className="text-sm text-base-content text-opacity-70 flex-shrink-0">
              Performance Fee
              <span
                className="ml-1 opacity-70 hover:text-primary hover:opacity-100 tooltip text-sm cursor-pointer"
                data-tip="Lorem ipsum dolor sit amet"
              >
                <i className="fa-solid fa-circle-info"></i>
              </span>
            </span>
            <span className="border-b border-dashed border-base-content border-opacity-10 w-full mx-2"></span>
            <span className="whitespace-nowrap font-semibold">2%</span>
          </div>

          <div className="flex items-baseline justify-between">
            <span className="text-sm text-base-content text-opacity-70 flex-shrink-0">
              Est. $LOOT Received
              <span
                className="ml-1 opacity-70 hover:text-primary hover:opacity-100 tooltip text-sm cursor-pointer"
                data-tip="Lorem ipsum dolor sit amet"
              >
                <i className="fa-solid fa-circle-info"></i>
              </span>
            </span>
            <span className="border-b border-dashed border-base-content border-opacity-10 w-full mx-2"></span>
            <span className="whitespace-nowrap font-semibold">182 $LOOT</span>
          </div>
        </div>

        <div className="mt-6 grid gap-2">
          {/* User not approved yet */}
          {/* <button className="btn btn-block btn-primary text-base">
            Enable Pool
          </button> */}
          <button
            onClick={() =>
              // @ts-ignore
              document.getElementById("unstakeReceipt_modal").showModal()
            }
            className="btn btn-block btn-primary text-base"
          >
            Unstake
          </button>
        </div>
      </div>
    </>
  );
};
export default UnstakeForm;
