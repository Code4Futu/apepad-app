import Pagination from "../../components/core/pagination";

const rewardActivities = [
  {
    action: "Stake",
    qty: "10K",
    time: "2023-07-31 07:28",
    txHash: "0x95...E005",
  },
  {
    action: "Claim",
    qty: "0.002",
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
    action: "Unstake",
    qty: "-500",
    time: "2023-07-31 07:28",
    txHash: "0x95...E005",
  },
];

const stSort = [
  { name: "Time", icon: "fa-duotone fa-clock", current: true },
  { name: "Claimed Amount", icon: "fa-duotone fa-coins", current: false },
];

function RewardsHistory() {
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
                {rewardActivities.map((item, idx) => (
                  <tr className={`tr`} key={idx}>
                    <td
                      className={`td text-left uppercase text-xs ${
                        item.action === "Claim" && "text-success"
                      } ${item.action === "Stake" && "text-primary"} ${
                        item.action === "Unstake" && "text-error"
                      }`}
                    >
                      {item.action}
                    </td>

                    <td className="td">
                      {item.qty}{" "}
                      <span className="hidden lg:inline opacity-50 text-xs">
                        {item.action === "Claim" ? "ETH" : "$LOOT"}
                      </span>
                    </td>

                    <td className="td whitespace-nowrap">{item.time}</td>

                    <td className="td text-right">
                      <a href="#" target="_blank" rel="noreferrer">
                        {item.txHash}
                      </a>
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
