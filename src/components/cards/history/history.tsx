import { BalanceSnapshotStatus, RewardActivity } from "@/config/type";
import { currencyFormatter } from "@/utils/helper/number";
import { toNumber } from "lodash";

interface Props {
  rewardActivities: RewardActivity[];
  isLoading: boolean;
}
function RewardsHistory({ rewardActivities, isLoading }: Props) {
  const balanceSnapshotStatusText: { [key: string]: string } = {
    verifying: "Verifying",
    pending: "Claimable",
    processing: "Inprocess",
    done: "CLAIMED",
    transferFailed: "Claim failed",
    holdLessMin: "INELIGIBLE",
    cancelledByHoldLessMin: "FORFEITED",
    autoSwapProcessing: "Inprocess",
    autoSwapFailed: "Claim failed",
    updateDBFailedWhenAutoSwapDone: "Not update",
    UpdateDBFailedWhenTransferDone: "Not update",
  };
  return (
    <>
      <div className={`w-full`}>
        <div className="card--header border-b border-base-content/10 !pb-4 mb-4 -mx-2 px-2">
          <h4 className="">
            <i className="fa-duotone fa-clock-rotate-left mr-3"></i>
            <span className="">Revshare History</span>
          </h4>
        </div>
        {/* RewardsHistory */}
        <div className="w-full overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="tr">
                <th className="th text-left">Epoch</th>
                <th className="th text-left">Time (UTC)</th>
                <th className="th text-left">RevShare</th>
                <th className="th text-left">LOOT</th>
                <th className="th text-left ">xLOOT</th>

                <th className="th text-center !w-28">Status</th>
              </tr>
            </thead>
            <tbody className="relative">
              {rewardActivities.map((item, idx) => (
                <tr className={`tr`} key={idx}>
                  <td className="td text-left">{item.id}</td>

                  <td className="td text-left">{item.created_at}</td>

                  <td className="td text-left">
                    {(
                      Number(item.loot_reward) + Number(item.xloot_reward)
                    ).toFixed(4)}{" "}
                    ETH
                  </td>

                  <td className="td text-left">
                    {toNumber(item.loot_hold) ? (
                      <>
                        {currencyFormatter(Number(item.loot_hold), 2)}{" "}
                        <span className="opacity-50 text-xs hidden md:inline">
                          {" "}
                          $LOOT
                        </span>
                      </>
                    ) : (
                      "-"
                    )}{" "}
                  </td>

                  <td className="td text-left">
                    {toNumber(item.xloot_hold) ? (
                      <>
                        {toNumber(item.xloot_hold)}{" "}
                        <span className="opacity-50 text-xs hidden md:inline">
                          {" "}
                          $xLOOT
                        </span>
                      </>
                    ) : (
                      "-"
                    )}{" "}
                  </td>

                  <td className="td text-center">
                    <span
                      className={`
                      badge !text-[10px] px-3 w-20 badge-rounded 
                      
                      ${
                        item.status === BalanceSnapshotStatus.Done &&
                        "bg-success text-success-content"
                      }
                      ${
                        (item.status === BalanceSnapshotStatus.Pending ||
                          item.status === BalanceSnapshotStatus.Verifying) &&
                        "bg-warning/20 text-warning"
                      }
                      ${
                        (item.status === BalanceSnapshotStatus.TransferFailed ||
                          item.status ===
                            BalanceSnapshotStatus.CancelledByHoldLessMin ||
                          item.status === BalanceSnapshotStatus.HoldLessMin ||
                          item.status ===
                            BalanceSnapshotStatus.AutoSwapFailed) &&
                        "bg-error/20 text-error"
                      }
                      ${
                        (item.status === BalanceSnapshotStatus.Processing ||
                          item.status ===
                            BalanceSnapshotStatus.AutoSwapProcessing) &&
                        "bg-primary/20 text-primary"
                      }
                      `}
                    >
                      {balanceSnapshotStatusText[item.status]}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {isLoading && (
            <div className="flex justify-center items-center loading-overlay">
              <div className="loader rounded-full h-8 w-8 border-4 border-primary" />
            </div>
          )}

          {rewardActivities.length === 0 && !isLoading ? (
            <div className="w-full flex justify-center items-end py-8">
              <div className="flex items-center">
                <i className="fa-duotone fa-inbox mr-3"></i>
                <span className="text-xs text-base-content/70 uppercase">
                  No data
                </span>
              </div>
            </div>
          ) : null}
        </div>
        {/* //RewardsHistory */}
      </div>
    </>
  );
}

export default RewardsHistory;
