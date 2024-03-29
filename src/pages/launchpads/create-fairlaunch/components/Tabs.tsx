import { twMerge } from "tailwind-merge";

interface IFairlaunchTabProps {
  tab: string;
  setTab: (tab: string) => void;
  setIsFormDone: (value: boolean) => void;
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
    name: "social",
    label: "Social",
  },
];

const tabStyle =
  "btn btn-md py-2 px-4 btn-outline border-[#1A1D1F] bg-[#1A1D1F] text-[#6F767E] hover:border-[#272B30] hover:bg-[#272B30] hover:text-[#FCFCFC] z-[1] relative";

function FairlaunchTabs({ tab, setTab, setIsFormDone }: IFairlaunchTabProps) {
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
              onClick={() => {
                setTab(item.name);
                setIsFormDone(false);
              }}
            >
              <div
                className={twMerge(
                  "flex w-6 h-6 justify-center items-center rounded-md bg-[rgba(111,118,126,0.40)] mr-2",
                  tab === item.name && "bg-[#90E788]"
                )}
              >
                <span className="text-[15px] font-semibold">{idx + 1}</span>
              </div>
              {item.label}
            </label>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FairlaunchTabs;
