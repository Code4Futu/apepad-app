import React, { useState } from "react";
import Pagination from "../../components/core/pagination";

const rewardActivities = [
  {
    epoch: "1",
    time: "2023-07-31 07:28",
    rewards: "$100",
    unlock: "$10",
    status: "Pending",
  },
  {
    epoch: "3",
    time: "2023-07-31 07:28",
    rewards: "$100",
    unlock: "$10",
    status: "Success",
  },
  {
    epoch: "12",
    time: "2023-07-31 07:28",
    rewards: "$100",
    unlock: "$10",
    status: "Success",
  },
  {
    epoch: "43",
    time: "2023-07-31 07:28",
    rewards: "$100",
    unlock: "$10",
    status: "Status 1",
  },
  {
    epoch: "1",
    time: "2023-07-31 07:28",
    rewards: "$100",
    unlock: "$10",
    status: "Status 1",
  },
  {
    epoch: "2",
    time: "2023-07-31 07:28",
    rewards: "$100",
    unlock: "$10",
    status: "Success",
  },
  {
    epoch: "1",
    time: "2023-07-31 07:28",
    rewards: "$100",
    unlock: "$10",
    status: "Success",
  },
  {
    epoch: "6",
    time: "2023-07-31 07:28",
    rewards: "$20",
    unlock: "$10",
    status: "Success",
  },
  {
    epoch: "2",
    time: "2023-07-31 07:28",
    rewards: "$20",
    unlock: "$10",
    status: "Success",
  },
  {
    epoch: "3",
    time: "2023-07-31 07:28",
    rewards: "$60",
    unlock: "$10",
    status: "Status 2",
  },
  {
    epoch: "22",
    time: "2023-07-31 07:28",
    rewards: "$60",
    unlock: "$10",
    status: "Status 2",
  },
];

const stSort = [
  { name: "Time", icon: "fa-duotone fa-clock", current: true },
  { name: "Claimed Amount", icon: "fa-duotone fa-coins", current: false },
];

function RewardsHistory() {
  // const [tab, setTab] = useState("stake");

  return (
    <>
      <div className={`w-full`}>
        <div className="card--header  flex !flex-col-reverse md:!flex-row justify-between border-b border-base-content/10 !pb-4 -mx-2 px-2">
          <h4 className="">
            <i className="fa-duotone fa-clock-rotate-left mr-3"></i>
            <span className="">Claim History</span>
          </h4>
          {/* <div className="mb-4 md:mb-0">
            <div className="rounded-full bg-base-300/40 p-1 gap-1 inline-flex">
              <button
                onClick={() => setTab("redeem")}
                className={`btn btn-sm btn-ghost rounded-full ${
                  tab === "redeem" &&
                  "border-primary bg-transparent hover:border-primary hover:bg-transparent text-primary rounded-full"
                }`}
              >
                Revenue Share
              </button>
              <button
                onClick={() => setTab("stake")}
                className={`btn btn-sm btn-ghost rounded-full ${
                  tab === "stake" &&
                  "border-primary bg-transparent hover:border-primary hover:bg-transparent text-primary rounded-full"
                }`}
              >
                Stake Reward
              </button>
            </div>
          </div> */}
        </div>

        <div className="card--body !pt-0">
          {/* Toolbar */}
          <div className="-mx-2 toolbar-container md:px-2">
            <div className="flex items-center w-full md:w-1/3 md:pr-2 md:-ml-2">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search for Transaction"
                  className="input w-full font-medium h-auto min-h-0 py-2 pr-8 text-sm bg-base-200 focus:bg-base-100 pl-10"
                  value=""
                />
                <span className="absolute left-4 top-2">
                  <i className="fa-solid fa-magnifying-glass text-sm"></i>
                </span>
                {/* Show when user input */}
                <button className="btn btn-xs btn-circle btn-ghost absolute right-2 top-2">
                  <i className="fa-solid fa-xmark"></i>
                </button>
                {/* Show when user input */}
              </div>
            </div>
            <div className="tools px-2 md:px-0">
              {/* Sort */}
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="dropdown-toggle">
                  <span className="mr-2">Sort by:</span>
                  <button className="dropdown-toggle-title">
                    <span className="flex items-center">
                      <i
                        className={`fa-duotone fa-clock text-base mr-2 w-5`}
                      ></i>
                      <span className="truncate">Time</span>
                    </span>
                    <i className="fa-solid fa-angle-down ml-2 text-xs"></i>
                  </button>
                </label>
                <div tabIndex={0} className="dropdown-content menu w-52">
                  {stSort.map((item) => (
                    <>
                      <button
                        className={`dropdown-menu-item ${
                          item.current && "isActive"
                        }`}
                      >
                        <span className="flex items-center">
                          <i className={`${item.icon} text-base mr-2 w-5`}></i>
                          <span className="truncate">{item.name}</span>
                        </span>
                        {item.current && (
                          <i className="fa-solid fa-check ml-2 text-xs"></i>
                        )}
                      </button>
                    </>
                  ))}
                  <span className="block w-full h-[1px] bg-base-content bg-opacity-20 my-2"></span>
                  <button className={`dropdown-menu-item isActive`}>
                    <span className="flex items-center">
                      <i className="fa-regular fa-arrow-up mr-2 w-5"></i>
                      Sort Ascending
                    </span>
                    <i className="fa-solid fa-check ml-2 text-xs"></i>
                  </button>
                  <button className={`dropdown-menu-item`}>
                    <span className="flex items-center">
                      <i className="fa-regular fa-arrow-down mr-2 w-5"></i>
                      Sort Descending
                    </span>
                  </button>
                </div>
              </div>
              {/* Sort */}
            </div>
          </div>
          {/* //Toolbar */}

          {/* RewardsHistory */}
          <div className=" -mx-2 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="tr">
                  <th className="th text-left">Epoch</th>
                  <th className="th text-left">Time (UTC)</th>
                  <th className="th text-right">Rewards</th>
                  <th className="th text-right">Unlock</th>
                  <th className="th text-center !w-28">Status</th>
                </tr>
              </thead>
              <tbody>
                {rewardActivities.map((item, idx) => (
                  <tr className={`tr`} key={idx}>
                    <td className="td">{item.epoch}</td>

                    <td className="td whitespace-nowrap">{item.time}</td>

                    <td className="td text-right">{item.rewards}</td>

                    <td className="td text-right">{item.unlock}</td>

                    <td className="td text-center">
                      <span
                        className={`
                      badge !text-[10px] px-3 w-20 badge-rounded 
                      ${
                        item.status === "Success" &&
                        "bg-success text-success-content"
                      }
                      ${
                        item.status === "Pending" &&
                        "bg-warning/20 text-warning"
                      }
                      ${item.status === "Status 1" && "bg-error/20 text-error"}
                      ${
                        item.status === "Status 2" &&
                        "bg-primary/20 text-primary"
                      }
                      `}
                      >
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* //RewardsHistory */}

          <div className="mt-6">
            <Pagination />
          </div>
        </div>
      </div>
    </>
  );
}

export default RewardsHistory;
