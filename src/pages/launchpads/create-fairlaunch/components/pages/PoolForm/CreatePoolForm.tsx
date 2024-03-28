import {
  feeOption,
  listingOption,
  listTokenTemp,
} from "@/constants/fairlaunch";
import { useForm, Form } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import InputHeader from "../../InputHeader";
import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

const btnStyle =
  "btn btn-md py-2 px-5 btn-outline border-[#272B30] bg-[#1A1D1F] text-white hover:bg-[#1A1D1F] hover:text-white rounded-xl z-[1] relative";
const formStyle = "flex flex-col items-start gap-3 self-stretch";

const whitelistOptions = [
  {
    label: "Enable",
    value: "enable",
  },
  {
    label: "Disable",
    value: "disable",
  },
];

function CreatePoolForm() {
  const { register, watch, setValue, getValues } = useForm();

  const selectedWhitelistOption = watch("whitelist"); // watch the checkbox whitelist state
  const selectedContributionOption = watch("contribution"); // watch the checkbox contribution state
  const selectedVestingOption = watch("vesting"); // watch the checkbox vesting state

  const handleCheckboxWhitelistChange = (event: any) => {
    if (event.target.checked) {
      setValue("whitelist", event.target.value);
    } else {
      setValue("whitelist", "");
    }
  };

  const handleCheckboxContributionChange = (event: any) => {
    if (event.target.checked) {
      setValue("contribution", event.target.value);
    } else {
      setValue("contribution", "");
    }
  };

  const handleCheckboxVestingChange = (event: any) => {
    if (event.target.checked) {
      setValue("vesting", event.target.value);
    } else {
      setValue("vesting", "");
    }
  };

  // const [value, setValue] = useState({
  //   startDate: new Date(),
  //   endDate: new Date().setMonth(11)
  //   });
  const [time, setTime] = useState({
    startDate: null,
    endDate: null,
  });

  const handleValueChange = (newValue: any) => {
    console.log("newValue:", newValue);
    setTime(newValue);
  };

  return (
    <div className="flex flex-col items-start gap-12 flex-1">
      <form className="flex flex-col items-start gap-8 self-stretch">
        {/* Token selling amount */}
        <div className={formStyle}>
          <InputHeader label="Total Selling Amount" />
          <div className="flex items-start gap-3 self-stretch">
            <label className="input border-none h-10 w-[360px] p-3 rounded-xl bg-[#272B30] flex items-center gap-2">
              <input
                type="text"
                className="grow bg-transparent focus-visible:outline-none"
                placeholder="800"
              />
            </label>
          </div>
        </div>

        {/* Whitelist */}
        <div className={formStyle}>
          <InputHeader label="Whitelist" />
          <div className="flex flex-col items-start gap-3">
            {whitelistOptions.map((item, idx) => (
              <label key={idx} className="cursor-pointer label flex gap-3">
                <input
                  type="checkbox"
                  name="whitelist"
                  value={item.value}
                  checked={selectedWhitelistOption === item.value}
                  onChange={handleCheckboxWhitelistChange}
                  className="checkbox checkbox-success border-[rgba(111,118,126,0.40)]"
                />
                <span className="text-[15px] font-semibold text-white">
                  {item.label}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Softcap (USDT) */}
        <div className={formStyle}>
          <InputHeader label="SoftCap (USDT)" />
          <div className="flex items-start gap-3 self-stretch">
            <label className="input border-none h-10 w-[360px] p-3 rounded-xl bg-[#272B30] flex items-center gap-2">
              <input
                type="text"
                className="grow bg-transparent focus-visible:outline-none"
                placeholder="0.1"
              />
            </label>
          </div>
        </div>

        {/* Min/Max Contribution */}
        <div className={formStyle}>
          <InputHeader label="Min/Max Contribution" />
          <div className="flex flex-col items-start gap-3">
            <div className="flex max-w-[360px] items-center gap-[13px]">
              <label className="cursor-pointer label flex gap-3">
                <input
                  type="checkbox"
                  name="contribution"
                  value={"min"}
                  checked={selectedContributionOption == "min"}
                  onChange={handleCheckboxContributionChange}
                  className="checkbox checkbox-success border-[rgba(111,118,126,0.40)]"
                />
              </label>
              <label className="input border-none h-10 w-[360px] p-3 rounded-xl bg-[#272B30] flex items-center gap-2">
                <input
                  type="text"
                  className="grow bg-transparent focus-visible:outline-none"
                  placeholder="Min Contribution"
                />
              </label>
            </div>
          </div>
          <div className="flex flex-col items-start gap-3">
            <div className="flex max-w-[360px] items-center gap-[13px]">
              <label className="cursor-pointer label flex gap-3">
                <input
                  type="checkbox"
                  name="contribution"
                  value={"max"}
                  checked={selectedContributionOption == "max"}
                  onChange={handleCheckboxContributionChange}
                  className="checkbox checkbox-success border-[rgba(111,118,126,0.40)]"
                />
              </label>
              <label className="input border-none h-10 w-[360px] p-3 rounded-xl bg-[#272B30] flex items-center gap-2">
                <input
                  type="text"
                  className="grow bg-transparent focus-visible:outline-none"
                  placeholder="Max Contribution "
                />
              </label>
            </div>
          </div>
        </div>

        {/* Router and Liquidity Percent */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          <div className={formStyle}>
            <InputHeader label="Router" />
            <select className="select w-[360px] bg-[#272B30] rounded-xl text-[#9A9FA5]">
              <option disabled selected>
                Select Router
              </option>
            </select>
          </div>
          <div className={formStyle}>
            <InputHeader label="Liquidity Percent (%)" />
            <div className="flex items-start gap-3 self-stretch">
              <label className="input border-none h-10 w-[360px] p-3 rounded-xl bg-[#272B30] flex items-center gap-2">
                <input
                  type="text"
                  className="grow bg-transparent focus-visible:outline-none"
                  placeholder="0.1"
                />
              </label>
            </div>
          </div>
        </div>

        {/* Start and end time */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          <div className={formStyle}>
            <InputHeader label="Router" />
            <div className="flex items-start gap-3 self-stretch">
              <Datepicker
                inputClassName="w-[360px] rounded-xl py-2 px-3 h-[40px] font-normal bg-[#272B30] dark:bg-[#272B30] dark:placeholder:text-[#9A9FA5]"
                asSingle={true}
                value={time}
                onChange={handleValueChange}
                placeholder="Select Date"
              />
            </div>
          </div>
          <div className={formStyle}>
            <InputHeader label="Liquidity Percent (%)" />
            <div className="flex items-start gap-3 self-stretch">
              <Datepicker
                inputClassName="w-[360px] rounded-xl py-2 px-3 h-[40px] font-normal bg-[#272B30] dark:bg-[#272B30] dark:placeholder:text-[#9A9FA5]"
                asSingle={true}
                value={time}
                onChange={handleValueChange}
                placeholder="Select Date"
              />
            </div>
          </div>
        </div>

        {/* Liquidity lockup time */}
        <div className="flex flex-col items-start gap-3">
          <div className={formStyle}>
            <InputHeader label="Liquidity lockup time (Days)" />
            <div className="flex items-start gap-3 self-stretch">
              <Datepicker
                inputClassName="w-[360px] rounded-xl py-2 px-3 h-[40px] font-normal bg-[#272B30] dark:bg-[#272B30] dark:placeholder:text-[#9A9FA5]"
                asSingle={true}
                value={time}
                onChange={handleValueChange}
                placeholder="Select Date"
              />
            </div>
            <label className="cursor-pointer label flex gap-3">
              <input
                type="checkbox"
                name="whitelist"
                checked={selectedVestingOption == "on"}
                onChange={handleCheckboxVestingChange}
                className="checkbox checkbox-success border-[rgba(111,118,126,0.40)]"
              />
              <span className="text-[15px] font-semibold text-white">
                Use Vesting Contributor?
              </span>
            </label>
          </div>
        </div>

        <div className="flex items-start gap-6">
          <button className="dropdown dropdown-bottom dropdown-end flex-shrink-0 mt-4">
            <div className="flex items-center relative overflow-hidden rounded-box">
              <label
                className={twMerge(
                  btnStyle,
                  "bg-[#1A1D1F] border-[#272B30] text-[#EFEFEF] hover:text-[#EFEFEF] hover:bg-[#1A1D1F] hover:border-[#272B30]"
                )}
              >
                <span className="text-[15px] font-bold">Back</span>
              </label>
            </div>
          </button>
          <button className="dropdown dropdown-bottom dropdown-end flex-shrink-0 mt-4">
            <div className="flex items-center relative overflow-hidden rounded-box">
              <label
                className={twMerge(
                  btnStyle,
                  "bg-[#90E788] text-[#111315] hover:text-[#111315] hover:bg-[#90E788] hover:border-[#90E788]"
                )}
              >
                <span className="text-[15px] font-bold">Next</span>
              </label>
            </div>
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreatePoolForm;
