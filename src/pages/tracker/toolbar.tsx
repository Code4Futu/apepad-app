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

const chainsSort = [
  {
    name: "zkSync",
    logo: "/logos/zksync-noletter.svg",
    logoHeight: "h-5",
    current: true,
  },
  {
    name: "Linea",
    logo: "/logos/linea_dark.png",
    logoHeight: "h-6",
    current: false,
  },
  {
    name: "Layer Zero",
    logo: "/logos/layerzero.svg",
    logoHeight: "h-3",
    current: false,
  },
];

function Toolbar() {
  return (
    <>
      <div className={`w-full card card-primary`}>
        {/* Toolbar */}
        <div className="grid md:grid-cols-12 gap-4 md:gap-6">
          <div className="md:col-span-4">
            <div className="dropdown">
              <label tabIndex={0} className="flex flex-col items-start">
                <span className="text-xs text-base-content/70 uppercase mb-2">
                  Network:
                </span>
                <button className="dropdown-toggle-title btn">
                  <span className="flex items-center">
                    <span className="w-8 mr-2 flex items-center justify-center">
                      <img
                        alt="zkSync"
                        className={`h-5 cursor-pointer`}
                        src="/logos/zksync-noletter.svg"
                      />
                    </span>
                    <span className="truncate text-base">zkSync</span>
                  </span>
                  <i className="fa-solid fa-angle-down ml-4 text-xs"></i>
                </button>
              </label>
              <div tabIndex={0} className="dropdown-content menu w-52">
                {chainsSort.map((item, idx) => (
                  <button
                    key={idx}
                    className={`dropdown-menu-item ${
                      item.current && "isActive"
                    }`}
                  >
                    <span className="flex items-center">
                      <span className="w-8 mr-2 flex items-center justify-center">
                        <img
                          alt={item.name}
                          className={`${item.logoHeight}`}
                          src={item.logo}
                        />
                      </span>
                      <span className="truncate">{item.name}</span>
                    </span>
                    {item.current && (
                      <i className="fa-solid fa-check ml-2 text-xs"></i>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-8 flex flex-col">
            <span className="text-xs text-base-content/70 uppercase mb-2">
              Wallet:
            </span>
            <div className="flex items-center px-1 py-0 !border-2 border-base-content/20 rounded-box">
              <i className="fa-duotone fa-wallet text-lg ml-4"></i>
              <input
                readOnly
                value="0x95A3......8005"
                className="input input-ghost  text-base font-bold w-full !px-3 !py-0"
              ></input>
              <button className="btn btn-md">Search</button>
            </div>
          </div>
        </div>
        {/* //Toolbar */}
      </div>
    </>
  );
}

export default Toolbar;
