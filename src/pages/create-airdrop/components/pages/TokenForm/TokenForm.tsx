import InputHeader from "@/components/inputs/InputHeader";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";

const btnStyle =
  "btn btn-md py-2 px-5 btn-outline border-[#272B30] bg-[#1A1D1F] text-white hover:bg-[#1A1D1F] hover:text-white rounded-xl z-[1] relative";
const formStyle = "flex flex-col items-start gap-3 self-stretch";

const tokenData = [
  {
    label: "Name",
    value: "SHIBA INU",
  },
  {
    label: "Symbol",
    value: "SHIB",
  },
  {
    label: "Decimals",
    value: 18,
  },
];

interface ITokenForm {
  address: string;
  setAddress: (address: string) => void;
  setIsFormDone: (v: boolean) => void;
}

const TokenForm = ({ address, setAddress, setIsFormDone }: ITokenForm) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (inputRef.current) {
      const value = inputRef.current.value;
      setAddress(value);
    }
  };
  return (
    <div className="flex flex-col items-start gap-12 flex-1">
      <form className="flex flex-col items-start gap-8 self-stretch">
        {/* Token address */}
        <div className={formStyle}>
          <InputHeader label="Token address" />
          <div className="flex flex-col items-start gap-3 self-stretch">
            <label className="input border-none h-10 w-full md:w-[360px] xl:w-[411px] p-3 rounded-xl bg-[#272B30] flex items-center gap-2">
              <input
                type="text"
                className="grow bg-transparent focus-visible:outline-none"
                placeholder="Enter token address"
                onChange={handleInputChange}
                ref={inputRef}
              />
            </label>
            <span className="self-stretch text-[#6F767E] text-[15px]">
              Create airdrop fee: 10 APT
            </span>
          </div>
          {address !== "" &&
            tokenData.map((item, idx) => (
              <div
                key={idx}
                className={twMerge(
                  "flex h-12 p-4 flex-col justify-between items-start self-stretch",
                  idx % 2 === 0 && "bg-[rgba(39,43,48,0.30)]"
                )}
              >
                <div className="flex justify-between items-center self-stretch">
                  <span className="text-sm font-semibold text-[#6F767E] max-w-[136px]">
                    {item.label}
                  </span>
                  <span className="text-sm text-[#FCFCFC] font-semibold">
                    {item.value}
                  </span>
                </div>
              </div>
            ))}
        </div>
        <button
          className="dropdown dropdown-bottom dropdown-end flex-shrink-0 mt-4"
          onClick={() => setIsFormDone(true)}
        >
          <div className="flex items-center relative overflow-hidden rounded-box">
            <label
              tabIndex={0}
              className={twMerge(
                btnStyle,
                "bg-[#90E788] text-[#111315] hover:text-[#111315] hover:bg-[#90E788] hover:border-[#90E788]"
              )}
            >
              <span className="text-[15px] font-bold">Next</span>
            </label>
          </div>
        </button>
      </form>
    </div>
  );
};

export default TokenForm;
