import Pagination from "../../components/core/pagination";

const rewardActivities = [
  {
    burned: "10K",
    time: "2023-07-31 07:28",
    received: "1",
    txHash: "0x95...E005",
  },
  {
    burned: "500",
    time: "2023-07-31 07:28",
    received: "0.002",
    txHash: "0x95...E005",
  },
  {
    burned: "100K",
    time: "2023-07-31 07:28",
    received: "12",
    txHash: "0x95...E005",
  },
  {
    burned: "5K",
    time: "2023-07-31 07:28",
    received: "0.5",
    txHash: "0x95...E005",
  },
  {
    burned: "500",
    time: "2023-07-31 07:28",
    received: "0.002",
    txHash: "0x95...E005",
  },
  {
    burned: "100",
    time: "2023-07-31 07:28",
    received: "0.00005",
    txHash: "0x95...E005",
  },
  {
    burned: "1K",
    time: "2023-07-31 07:28",
    received: "0.1",
    txHash: "0x95...E005",
  },
  {
    burned: "12K",
    time: "2023-07-31 07:28",
    received: "1.2",
    txHash: "0x95...E005",
  },
  {
    burned: "2",
    time: "2023-07-31 07:28",
    received: "$20",
    txHash: "0x95...E005",
  },
  {
    burned: "3",
    time: "2023-07-31 07:28",
    received: "$60",
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
            <span className="">Burn History</span>
          </h4>
        </div>

        <div className="card--body">

          {/* RewardsHistory */}
          <div className=" -mx-2 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="tr">
                  <th className="th text-left">Burned</th>
                  <th className="th text-left">Received</th>
                  <th className="th text-left">Time (UTC)</th>
                  <th className="th text-right">Tx. Hash</th>
                </tr>
              </thead>
              <tbody>
                {rewardActivities.map((item, idx) => (
                  <tr className={`tr`} key={idx}>
                    <td className="td">{item.burned} <span className="hidden lg:inline opacity-50 text-xs">$LOOT</span></td>

                    <td className="td text-left">{item.received} <span className="hidden lg:inline opacity-50 text-xs">xLOOT</span></td>

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
