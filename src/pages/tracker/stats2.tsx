import React from "react";

const Stats2 = (props: any) => {
  return (
    <>
      <div className={`w-full`}>
        <div className="grid lg:grid-cols-12 gap-4 md:gap-6">
          <div className="lg:col-span-4 card">
            <div className="card--header">
              <h4 className="">
                <i className="fa-duotone fa-coins mr-3"></i>
                <span className="">Tokens Holdings</span>
              </h4>
            </div>

            <div className="card--body !pt-2 !-mx-2 px-2 max-h-72 overflow-y-auto">
              <div className="divide-y divide-base-content/10">
                <div className="flex items-center justify-between h-12">
                  <div className="flex-shrink-0 flex items-center gap-3">
                    <img alt="" className="h-4 cursor-pointer" src="/currency-icons/Ethereum.svg" />
                    <span className="font-medium">Ethereum</span>
                  </div>
                  <span className="whitespace-nowrap font-bold">
                    0.234
                  </span>
                </div>
                <div className="flex items-center justify-between h-12">
                  <div className="flex-shrink-0 flex items-center gap-3">
                    <img alt="" className="h-4 cursor-pointer" src="/currency-icons/USDT.svg" />
                    <span className="font-medium">USDT</span>
                  </div>
                  <span className="whitespace-nowrap font-bold">
                    4,123
                  </span>
                </div>
                <div className="flex items-center justify-between h-12">
                  <div className="flex-shrink-0 flex items-center gap-3">
                    <img alt="" className="h-4 cursor-pointer" src="/currency-icons/$LOOT.svg" />
                    <span className="font-medium">LOOT</span>
                  </div>
                  <span className="whitespace-nowrap font-bold">
                    0.234
                  </span>
                </div>
                <div className="flex items-center justify-between h-12">
                  <div className="flex-shrink-0 flex items-center gap-3">
                    <img alt="" className="h-4 cursor-pointer" src="/currency-icons/BUSD.svg" />
                    <span className="font-medium">BUSD</span>
                  </div>
                  <span className="whitespace-nowrap font-bold">
                    4,123
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 card">
            <div className="card--header">
              <h4 className="">
                <i className="fa-duotone fa-bolt mr-3"></i>
                <span className="">More Stats</span>
              </h4>
            </div>

            <div className="card--body !pt-2 !-mx-2 px-2 max-h-72 overflow-y-auto">
              <div className="grid lg:grid-cols-2 lg:gap-6">
              <div className="divide-y divide-base-content/10">
                <div className="flex items-center justify-between h-12">
                  <div className="flex-shrink-0 flex items-center gap-3">
                    <span className="text-sm opacity-70">Active Day(s)</span>
                  </div>
                  <span className="whitespace-nowrap font-bold">
                    7 Days
                  </span>
                </div>
                <div className="flex items-center justify-between h-12">
                  <div className="flex-shrink-0 flex items-center gap-3">
                    <span className="text-sm opacity-70">Active Week(s)</span>
                  </div>
                  <span className="whitespace-nowrap font-bold">
                    3 Weeks
                  </span>
                </div>
                <div className="flex items-center justify-between h-12">
                  <div className="flex-shrink-0 flex items-center gap-3">
                    <span className="text-sm opacity-70">Active Month(s)</span>
                  </div>
                  <span className="whitespace-nowrap font-bold">
                    2 Months
                  </span>
                </div>
                <div className="flex items-baseline justify-between py-3">
                  <div className="flex-shrink-0 flex items-center gap-3">
                    <span className="text-sm opacity-70">Another Stat</span>
                  </div>
                  <span className="whitespace-nowrap font-bold">
                    -
                  </span>
                </div>
              </div>
              <div className="divide-y divide-base-content/10">
                <div className="flex items-center justify-between h-12">
                  <div className="flex-shrink-0 flex items-center gap-3">
                    <span className="text-sm opacity-70">Active Day(s)</span>
                  </div>
                  <span className="whitespace-nowrap font-bold">
                    7 Days
                  </span>
                </div>
                <div className="flex items-center justify-between h-12">
                  <div className="flex-shrink-0 flex items-center gap-3">
                    <span className="text-sm opacity-70">Active Week(s)</span>
                  </div>
                  <span className="whitespace-nowrap font-bold">
                    3 Weeks
                  </span>
                </div>
                <div className="flex items-center justify-between h-12">
                  <div className="flex-shrink-0 flex items-center gap-3">
                    <span className="text-sm opacity-70">Active Month(s)</span>
                  </div>
                  <span className="whitespace-nowrap font-bold">
                    2 Months
                  </span>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Stats2;
