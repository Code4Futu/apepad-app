// import Pagination from "../../components/core/pagination";

import { getStakingEvents } from "@/services/staking/getStakingEvents";
import { getExplorerUrl } from "@/utils/constracts/call-contract";
import { formatDate } from "@/utils/helper/datetime";
import {
  convertToInternationalCurrencySystem,
  currencyFormatter,
  formatSmartNumber,
} from "@/utils/helper/number";
import { useCallback, useEffect, useState } from "react";
import useSWR from "swr";
import { useChainId } from "wagmi";
import Pagination from "@/components/core/pagination/pagination";

const rewardActivities = [
  {
    action: "Stake",
    qty: "10K",
    time: "2023-07-31 07:28",
    txHash: "0x95...E005",
  },
  {
    action: "Redeem",
    qty: "-500",
    time: "2023-07-31 07:28",
    txHash: "0x95...E005",
  },
  {
    action: "Stake",
    qty: "100K",
    time: "2023-07-31 07:28",
    txHash: "0x95...E005",
  },
  {
    action: "Stake",
    qty: "5K",
    time: "2023-07-31 07:28",
    txHash: "0x95...E005",
  },
  {
    action: "Redeem",
    qty: "-500",
    time: "2023-07-31 07:28",
    txHash: "0x95...E005",
  },
];

const stSort = [
  { name: "Time", icon: "fa-duotone fa-clock", current: true },
  { name: "Claimed Amount", icon: "fa-duotone fa-coins", current: false },
];

export const actionMapping: { [key: string]: string } = {
  StakingLoot: "STAKE",
  UnStakingLoot: "UNSTAKE",
  Redeem: "CLAIM",
};

function RewardsHistory({
  events = [],
}: {
  events: { txHash: string; action: string; amount: number; time: number }[];
}) {
  const chainId = useChainId();

  const take = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const handleNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const totalRecord = events.length;
  const splitArray = () => {
    let resultArray = [];
    for (let i = 0; i < events.length; i += take) {
      resultArray.push(events.slice(i, i + take));
    }
    return resultArray;
  };

  const eventArray = splitArray && splitArray()[currentPage - 1];
  const showing = eventArray?.length;

  return (
    <>
      <div className={`w-full`}>
        <div className="card--header -mx-2 px-2">
          <h4 className="">
            <i className="fa-duotone fa-clock-rotate-left mr-3"></i>
            <span className="">Stake History</span>
          </h4>
        </div>

        <div className="card--body">
          {/* RewardsHistory */}
          <div className=" -mx-2 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="tr">
                  <th className="th text-left">Actions</th>
                  <th className="th text-left">Qty.</th>
                  <th className="th text-left">Time (UTC)</th>
                  <th className="th text-right">Tx. Hash</th>
                </tr>
              </thead>
              <tbody>
                {eventArray?.map((item, idx) => {
                  const action = actionMapping[item.action];
                  const txHash = item?.txHash;
                  const txUrl = getExplorerUrl(chainId) + "tx/" + txHash;
                  const truncatedtxHash =
                    txHash && `${txHash.slice(0, 4)}...${txHash.slice(-4)}`;

                  return (
                    <tr className={`tr`} key={idx}>
                      <td
                        className={`td text-left uppercase text-xs ${
                          action === "CLAIM" && "text-success"
                        } ${action === "STAKE" && "text-primary"} ${
                          action === "UNSTAKE" && "text-error"
                        }`}
                      >
                        {action}
                      </td>

                      <td className="td">
                        {action === "CLAIM"
                          ? formatSmartNumber(item.amount)
                          : convertToInternationalCurrencySystem(item.amount)}

                        <span className="hidden lg:inline opacity-50 text-xs">
                          {action === "CLAIM" ? " ETH" : " $LOOT"}
                        </span>
                      </td>

                      <td className="td whitespace-nowrap">
                        {formatDate(item.time * 1000)}
                      </td>

                      <td className="td text-right">
                        <a href={txUrl} target="_blank" rel="noreferrer">
                          {truncatedtxHash}
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          {/* //RewardsHistory */}

          {events.length > 0 && (
            <div className="mt-6">
              <Pagination
                totalRecord={totalRecord}
                handleNextPage={handleNextPage}
                handlePrevPage={handlePrevPage}
                currentPage={currentPage}
                currentShow={showing}
              />
            </div>
          )}

          {/* <div className="mt-6">
            <Pagination />
          </div> */}
        </div>
      </div>
    </>
  );
}

export default RewardsHistory;
