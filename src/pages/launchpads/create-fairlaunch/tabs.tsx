import { twMerge } from "tailwind-merge";

interface IFairlaunchTabProps {
  tab: string;
  setTab: (tab: string) => void;
}

const fairlaunchTabs = [
  {
    name: "token",
    label: "Token",
  },
  {
    name: "pool",
    label: "Pool",
  },
  {
    name: "configuration",
    label: "Configuration",
  },
];

const tabStyle =
  "btn btn-md py-2 px-4 btn-outline border-[#1A1D1F] bg-[#1A1D1F] text-[#6F767E] hover:border-[#272B30] hover:bg-[#272B30] hover:text-[#FCFCFC] z-[1] relative";

function FairlaunchTabs({ tab, setTab }: IFairlaunchTabProps) {
  return (
    <div className="flex items-start gap-2">
      {fairlaunchTabs.map((item, idx) => (
        <div
          key={idx}
          className="dropdown dropdown-bottom dropdown-end flex-shrink-0"
        >
          <div className="flex items-center relative overflow-hidden rounded-box">
            <label
              tabIndex={0}
              className={twMerge(
                tabStyle,
                tab === item.name && "bg-[#272B30] text-[#FCFCFC]"
              )}
              onClick={() => setTab(item.name)}
            >
              <span className="text-[15px] font-semibold">
                {idx + 1}. {item.label}
              </span>
            </label>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FairlaunchTabs;
