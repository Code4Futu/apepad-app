import {
  feeOption,
  listingOption,
  listTokenTemp,
} from "@/constants/fairlaunch";
import { useForm, Form } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import InputHeader from "@/components/inputs/InputHeader";
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

function YourLockForm() {
  const { register, watch, setValue, getValues } = useForm();

  const selectedVestingOption = watch("vesting"); // watch the checkbox vesting state
  const selectedOwnerOption = watch("owner"); // watch the checkbox owner state

  const handleCheckboxVestingChange = (event: any) => {
    if (event.target.checked) {
      setValue("vesting", event.target.value);
    } else {
      setValue("vesting", "");
    }
  };

  const handleCheckboxOwnerChange = (event: any) => {
    if (event.target.checked) {
      setValue("owner", event.target.value);
    } else {
      setValue("owner", "");
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
        {/* Token or LP Token address */}
        <div className="flex flex-col items-start gap-3 self-stretch">
          <div className={formStyle}>
            <InputHeader label="Token or LP Token address" />
            <div className="flex items-start gap-3 self-stretch">
              <label className="input border-none h-10 w-full md:w-[360px] xl:w-[411px] p-3 rounded-xl bg-[#272B30] flex items-center gap-2">
                <input
                  type="text"
                  className="grow bg-transparent focus-visible:outline-none"
                  placeholder="Enter token address"
                />
              </label>
            </div>
            <label className="cursor-pointer label flex gap-3">
              <input
                type="checkbox"
                name="whitelist"
                checked={selectedOwnerOption == "on"}
                onChange={handleCheckboxOwnerChange}
                className="checkbox checkbox-success border-[rgba(111,118,126,0.40)]"
              />
              <span className="text-[15px] font-semibold text-white">
                Use another owner?
              </span>
            </label>
          </div>
        </div>

        {/* Title */}
        <div className={formStyle}>
          <InputHeader label="My Lock" />
          <div className="flex items-start gap-3 self-stretch">
            <label className="input border-none h-10 w-full md:w-[360px] xl:w-[411px] p-3 rounded-xl bg-[#272B30] flex items-center gap-2">
              <input
                type="text"
                className="grow bg-transparent focus-visible:outline-none"
                placeholder="My Lock"
              />
            </label>
          </div>
        </div>

        {/* Amount */}
        <div className="flex flex-col items-start gap-3 self-stretch">
          <div className={formStyle}>
            <InputHeader label="Amount" />
            <label className="input border-none h-10 w-full md:w-[360px] xl:w-[411px] p-3 rounded-xl bg-[#272B30] flex items-center gap-2">
              <input
                type="text"
                className="grow bg-transparent focus-visible:outline-none"
                placeholder="800"
              />
              <button className="flex py-0.5 px-2 justify-center items-center gap-2.5 rounded-md bg-[#6F767E]">
                <span className="text-sm font-semibold text-[#1A1D1F] text-center">
                  Max
                </span>
              </button>
            </label>
            <label className="cursor-pointer label flex gap-3">
              <input
                type="checkbox"
                name="whitelist"
                checked={selectedVestingOption == "on"}
                onChange={handleCheckboxVestingChange}
                className="checkbox checkbox-success border-[rgba(111,118,126,0.40)]"
              />
              <span className="text-[15px] font-semibold text-white">
                use vesting?
              </span>
            </label>
          </div>
        </div>

        {/* Unlock Date */}
        <div className="flex flex-col items-start gap-3 self-stretch">
          <div className={formStyle}>
            <InputHeader label="Unlock Date" />
            <div className="flex items-start gap-3 self-stretch md:w-[360px] xl:w-[411px]">
              <Datepicker
                inputClassName="w-full rounded-xl py-2 px-3 h-[40px] font-normal bg-[#272B30] dark:bg-[#272B30] dark:placeholder:text-[#9A9FA5]"
                asSingle={true}
                value={time}
                onChange={handleValueChange}
                placeholder="Select Date"
              />
            </div>
          </div>
        </div>

        <button className="dropdown dropdown-bottom dropdown-end flex-shrink-0 mt-4">
          <div className="flex items-center relative overflow-hidden rounded-box">
            <label
              className={twMerge(
                btnStyle,
                "bg-[#90E788] text-[#111315] hover:text-[#111315] hover:bg-[#90E788] hover:border-[#90E788]"
              )}
            >
              <span className="text-[15px] font-bold">Approve</span>
            </label>
          </div>
        </button>
      </form>
    </div>
  );
}

export default YourLockForm;
