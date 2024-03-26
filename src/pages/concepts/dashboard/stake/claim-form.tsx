import React from "react";

const ClaimForm = (props: any) => {
  // @ts-ignore
  return (
    <>
      <div className="fadein w-full mx-auto text-sm">
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

        <div className="mt-6 grid gap-2">
          {/* User not approved yet */}
          {/* <button className="btn btn-block btn-primary text-base">
            Enable Pool
          </button> */}
          <button
            className="btn btn-block btn-primary text-base"
          >
            Claim 0.2 ETH
          </button>
        </div>
      </div>
    </>
  );
};
export default ClaimForm;
