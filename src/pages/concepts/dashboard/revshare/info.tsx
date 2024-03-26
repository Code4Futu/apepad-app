import { Disclosure } from "@headlessui/react";
import React, { Fragment } from "react";

function Info() {

  return (
    <>
      <div className="w-full">
        <div className="card--header !flex-row !items-center !justify-between">
          <h4 className="">
            <i className="fa-duotone fa-circle-info mr-3 text-lg"></i>
            <span className="">Revenue Share Dashboard</span>
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
            <p>Holders can connect using this dashboard to view and claim their revenue share rewards. A minimum balance of 50 UNIBOT is required.</p>
            <p>Claiming rewards claims all available unclaimed rewards and requires a minimum of 0.1 ETH accumulated. To lookup revenue shares for other wallets, use the Holder Rewards or Referral Rewards browser.</p>
          </div>

          <div className="type border border-base-content border-opacity-10 rounded-box px-6 py-5">
            <h6 className="font-bold">Rewards Distribution Rules</h6>
            <ol>
              <li>Claiming rewards claims all available</li>
              <li>Use the Holder Rewards or Referral Rewards browser</li>
              <li>Claiming rewards claims all available</li>
              <li>Use the Holder Rewards or Referral Rewards browser</li>
              <li>Claiming rewards claims all available</li>
              <li>Use the Holder Rewards or Referral Rewards browser</li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}

export default Info;
