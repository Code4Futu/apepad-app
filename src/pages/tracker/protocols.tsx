const protocols = [
  {
    name: "zkSync Era",
    logo: "/logos/zksync.svg",
    logoHeight: "h-3",
    interactions: "10",
    activeDays: "18",
    volume: "$283",
    lastActivity: "1 day ago",
  },
  {
    name: "SyncSwap",
    logo: "/logos/syncswap-light.png",
    logoHeight: "h-5",
    interactions: "200",
    activeDays: "123",
    volume: "$283",
    lastActivity: "45 minutes ago",
  },
  {
    name: "Orbiter",
    logo: "/logos/orbiter-light.svg",
    logoHeight: "h-5",
    interactions: "3",
    activeDays: "25",
    volume: "$283",
    lastActivity: "2 minutes ago",
  },

  {
    name: "Mute.",
    logo: "/logos/mute-full-logo.png",
    logoHeight: "h-3",
    interactions: "1",
    activeDays: "2",
    volume: "$10",
    lastActivity: "No activity",
  },
  {
    name: "EraLend",
    logo: "/logos/era_lend.png",
    logoHeight: "h-4",
    interactions: "16",
    activeDays: "25",
    volume: "$33",
    lastActivity: "No activity",
  },
  {
    name: "element",
    logo: "/logos/element_light.svg",
    logoHeight: "h-5",
    interactions: "8",
    activeDays: "12",
    volume: "$33",
    lastActivity: "No activity",
  },
  {
    name: "iZUMi finance",
    logo: "/logos/izumi-color.svg",
    logoHeight: "h-5",
    interactions: "3",
    activeDays: "8",
    volume: "$33",
    lastActivity: "2 weeks ago",
  },
  {
    name: "Celer",
    logo: "/logos/celer.svg",
    logoHeight: "h-3",
    interactions: "14",
    activeDays: "39",
    volume: "$1,000",
    lastActivity: "1 day ago",
  },
];

const stSort = [
  { name: "Time", icon: "fa-duotone fa-clock", current: true },
  { name: "Claimed Amount", icon: "fa-duotone fa-coins", current: false },
];

function Protocols() {
  return (
    <>
      <div className={`w-full`}>
        <div className="card--header -mx-2 px-2">
          <h4 className="">
            <i className="fa-duotone fa-chart-network mr-3"></i>
            <span className="">Protocols</span>
          </h4>
        </div>

        <div className="card--body">
          {/* Protocols */}
          <div className=" -mx-2 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="tr">
                  <th className="th text-left">Protocols</th>
                  <th className="th text-right">Interactions</th>
                  <th className="th text-right">Active Days</th>
                  <th className="th text-right">Volume</th>
                  <th className="th text-right">Last Activity</th>
                </tr>
              </thead>
              <tbody>
                {protocols.map((item, idx) => (
                  <tr className={`tr`} key={idx}>
                    <td className="td whitespace-nowrap !pl-0 ">
                      <div className="bg-base-200 inline-flex py-3 px-4 rounded-box">
                        <img
                          alt={item.name}
                          className={`${item.logoHeight} cursor-pointer`}
                          src={item.logo}
                        />
                      </div>
                    </td>

                    <td className="td whitespace-nowrap text-right">
                      {item.interactions}
                    </td>

                    <td className="td whitespace-nowrap text-right">
                      {item.activeDays}
                    </td>

                    <td className="td whitespace-nowrap text-right">
                      {item.volume}
                    </td>

                    <td className="td whitespace-nowrap text-right">
                      <span
                        className={`
                      ${
                        item.lastActivity === "No activity" &&
                        "badge !text-[10px] px-3 bg-error text-error-content"
                      }
                      `}
                      >
                        {item.lastActivity}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* //Protocols */}
        </div>
      </div>
    </>
  );
}

export default Protocols;
