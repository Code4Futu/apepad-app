import Pagination from "@/components/core/pagination/pagination";
import { BurnHistory } from "@/config/type";
import { getBurnHistory } from "@/services/mint-xLoot/getBurnHistory";
import { getExplorerUrl } from "@/utils/constracts/call-contract";
import { formatDate } from "@/utils/helper/datetime";
import { currencyFormatter, shortenString } from "@/utils/helper/number";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-use";
import useSWR from "swr";
import { useAccount, useChainId } from "wagmi";

interface Props {
  refetchKey: number;
}
function RewardsHistory({ refetchKey }: Props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [take, setTake] = useState(10);
  const [totalRecord, setTotalRecord] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [keyRefetch, setKeyRefetch] = useState(0);

  const router = useRouter();
  const { t } = router.query;

  const { address: account } = useAccount();
  const chainId = useChainId();

  const getAddress = t?.toString() || account || "";

  const params = { take, currentPage, t, refetchKey, keyRefetch };

  const key = JSON.stringify(params);

  const { data: burnHistory = [] } = useSWR<BurnHistory[]>(
    [key, chainId, account],
    async () => {
      try {
        setIsLoading(true);

        const burnHistory = await getBurnHistory(
          chainId,
          take,
          currentPage,
          getAddress
        );

        setTotalRecord(burnHistory.pagination.total);

        return burnHistory.data;
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    }
  );

  const handleNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const handleSelectTake = (take: number) => {
    setTake(take);
  };

  return (
    <>
      <div className={`w-full`}>
        <div className="card--header !flex-row !justify-between">
          <h4 className="">
            <i className="fa-duotone fa-clock-rotate-left mr-3"></i>
            <span className="">Burn History</span>
          </h4>
          <button
            className="btn btn-sm"
            onClick={() => setKeyRefetch(Math.random())}
          >
            <i className="fa-duotone fa-refresh"></i>
            <span className="hidden md:block ml-3 text-xs">Refresh</span>
          </button>
        </div>

        <div className="card--body">
          {/* RewardsHistory */}
          <div className=" -mx-2 overflow-x-auto">
            <table className="w-full text-sm relative">
              <thead>
                <tr className="tr">
                  <th className="th text-left"> Burnt</th>
                  <th className="th text-left">Received</th>
                  <th className="th text-left">Time (UTC)</th>
                  <th className="th text-right">Tx. Hash</th>
                </tr>
              </thead>
              <tbody>
                {burnHistory.map((item, idx) => {
                  const txUrl = getExplorerUrl(chainId) + "tx/" + item.tx_hash;

                  return (
                    <tr className={`tr`} key={idx}>
                      <td className="td">
                        {item?.amount_token ? (
                          <>
                            {currencyFormatter(Number(item.amount_token), 2)}{" "}
                            <span className="opacity-50 text-xs hidden md:inline">
                              {" "}
                              $LOOT
                            </span>
                          </>
                        ) : (
                          "-"
                        )}
                      </td>

                      <td className="td text-left">
                        {item?.amount_xtoken ? (
                          <>
                            {currencyFormatter(Number(item.amount_xtoken), 2)}{" "}
                            <span className="opacity-50 text-xs hidden md:inline">
                              {" "}
                              $xLOOT
                            </span>
                          </>
                        ) : (
                          "-"
                        )}
                      </td>

                      <td className="td whitespace-nowrap">
                        {item?.time_burn
                          ? formatDate(item.time_burn * 1000)
                          : "-"}
                      </td>

                      <td className="td text-right">
                        <a
                          href={txUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-primary"
                        >
                          {item.tx_hash ? shortenString(item.tx_hash, 14) : "-"}
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            {isLoading && (
              <div className="flex justify-center items-center loading-overlay">
                <div className="loader rounded-full h-8 w-8 border-4 border-primary" />
              </div>
            )}

            {burnHistory.length === 0 && !isLoading ? (
              <div className="w-full flex justify-center items-end h-14">
                <div className="flex items-center">
                  <i className="fa-duotone fa-inbox mr-3"></i>
                  <span className="text-[10px] text-base-content/70 uppercase">
                    No data
                  </span>
                </div>
              </div>
            ) : null}
          </div>

          {/* //RewardsHistory */}
        </div>
      </div>

      {burnHistory.length > 0 && (
        <Pagination
          totalRecord={totalRecord}
          handleNextPage={handleNextPage}
          handlePrevPage={handlePrevPage}
          handleSelectTake={handleSelectTake}
          currentPage={currentPage}
          take={take}
          currentShow={burnHistory.length}
        />
      )}
    </>
  );
}

export default RewardsHistory;
