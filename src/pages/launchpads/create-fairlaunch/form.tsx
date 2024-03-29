import { Information } from "@/common/Information";
import {
  feeOption,
  listingOption,
  listTokenTemp,
} from "@/constants/fairlaunch";
import { useForm, Form } from "react-hook-form";
import { twMerge } from "tailwind-merge";

const btnStyle =
  "btn btn-md py-2 px-5 btn-outline border-[#272B30] bg-[#1A1D1F] text-white hover:bg-[#1A1D1F] hover:text-white rounded-xl z-[1] relative";
const formStyle = "flex flex-col items-start gap-3 self-stretch";

const InputHeader = ({
  label,
  tooltip,
}: {
  label: string;
  tooltip?: string;
}) => {
  return (
    <div className="flex items-center gap-1">
      <span className="text-sm font-semibold text-[#EFEFEF]">{label}</span>
      <Information />
    </div>
  );
};

function FairlaunchForm() {
  const { register, watch, setValue, getValues } = useForm();

  const selectedFundOption = watch("fund"); // watch the checkbox raise fund state
  const selectedFeeOption = watch("fee"); // watch the checkbox fee state
  const selectedListingOption = watch("listing"); // watch the checkbox listing state
  const selectedAffiliateOption = watch("affiliate"); // watch the checkbox affiliate state

  const handleCheckboxFundChange = (event: any) => {
    if (event.target.checked) {
      setValue("fund", event.target.value);
    } else {
      setValue("fund", "");
    }
  };

  const handleCheckboxFeeChange = (event: any) => {
    if (event.target.checked) {
      setValue("fee", event.target.value);
    } else {
      setValue("fee", "");
    }
  };

  const handleCheckboxListingChange = (event: any) => {
    if (event.target.checked) {
      setValue("listing", event.target.value);
    } else {
      setValue("listing", "");
    }
  };

  const handleCheckboxAffiliateChange = (event: any) => {
    if (event.target.checked) {
      setValue("affiliate", event.target.value);
    } else {
      setValue("affiliate", "");
    }
  };

  return (
    <div className="flex flex-col items-start gap-12 flex-1">
      <form className="flex flex-col items-start gap-8 self-stretch">
        {/* Token address */}
        <div className={formStyle}>
          <InputHeader label="Token address" />
          <div className="flex items-start gap-3 self-stretch">
            <label className="input border-none h-10 w-[360px] p-3 rounded-xl bg-[#272B30] flex items-center gap-2">
              <input
                type="text"
                className="grow bg-transparent focus-visible:outline-none"
                placeholder="Enter token address"
              />
            </label>
            <div className="dropdown dropdown-bottom dropdown-end flex-shrink-0">
              <div className="flex items-center relative overflow-hidden rounded-box">
                <label tabIndex={0} className={btnStyle}>
                  <span className="text-[15px] font-bold">Create Token</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Raise fund */}
        <div className={formStyle}>
          <InputHeader label="Raise Fund By" />
          <div className="flex flex-col items-start gap-3">
            {listTokenTemp.map((item, idx) => (
              <label
                key={item.symbol}
                className="cursor-pointer label flex gap-3"
              >
                <input
                  type="checkbox"
                  name="fund"
                  value={item.symbol}
                  checked={selectedFundOption === item.symbol}
                  onChange={handleCheckboxFundChange}
                  className="checkbox checkbox-success border-[rgba(111,118,126,0.40)]"
                />
                <span className="text-[15px] font-semibold text-white">
                  {item.symbol}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Fee option */}
        <div className={formStyle}>
          <InputHeader label="Fee Option" />
          <div className="flex flex-col items-start gap-3">
            {feeOption.map((item, idx) => (
              <label key={idx} className="cursor-pointer label flex gap-3">
                <input
                  type="checkbox"
                  name="fee"
                  value={item.value}
                  checked={selectedFeeOption == item.value}
                  onChange={handleCheckboxFeeChange}
                  className="checkbox checkbox-success border-[rgba(111,118,126,0.40)]"
                />
                <span className="text-[15px] font-semibold text-white">
                  {item.label}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Listing option */}
        <div className={formStyle}>
          <InputHeader label="Fee Option" />
          <div className="flex flex-col items-start gap-3">
            {listingOption.map((item, idx) => (
              <label key={idx} className="cursor-pointer label flex gap-3">
                <input
                  type="checkbox"
                  name="listing"
                  value={item.value}
                  checked={selectedListingOption == item.value}
                  onChange={handleCheckboxListingChange}
                  className="checkbox checkbox-success border-[rgba(111,118,126,0.40)]"
                />
                <span className="text-[15px] font-semibold text-white">
                  {item.label}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Affiliate option */}
        <div className={formStyle}>
          <InputHeader label="Affiliate Program" />
          <div className="flex flex-col items-start gap-3">
            <label className="cursor-pointer label flex gap-3">
              <input
                type="checkbox"
                name="affiliate"
                value={"true"}
                checked={selectedAffiliateOption == "true"}
                onChange={handleCheckboxAffiliateChange}
                className="checkbox checkbox-success border-[rgba(111,118,126,0.40)]"
              />
              <span className="text-[15px] font-semibold text-white">
                Enable
              </span>
            </label>
            <label className="input border-none h-10 w-[360px] p-3 rounded-xl bg-[#272B30] flex items-center gap-2">
              <input
                type="text"
                className="grow bg-transparent focus-visible:outline-none"
                placeholder="Enter affiliate percent (1-5%)"
              />
            </label>
            <label className="cursor-pointer label flex gap-3">
              <input
                type="checkbox"
                name="affiliate"
                value={"false"}
                checked={selectedAffiliateOption == "false"}
                onChange={handleCheckboxAffiliateChange}
                className="checkbox checkbox-success border-[rgba(111,118,126,0.40)]"
              />
              <span className="text-[15px] font-semibold text-white">
                Disable
              </span>
            </label>
            <span className="text-[15px] font-medium text-[#6F767E]">
              For auto listing, after you finalize the pool your token will be
              auto listed on DEX.
            </span>
          </div>
        </div>

        <button
          type="submit"
          className="dropdown dropdown-bottom dropdown-end flex-shrink-0 mt-4"
        >
          <div className="flex items-center relative overflow-hidden rounded-box">
            <label
              tabIndex={0}
              className={twMerge(
                btnStyle,
                "bg-[#90E788] text-[#111315] hover:text-[#111315] hover:bg-[#90E788] hover:border-[#90E788]"
              )}
            >
              <span className="text-[15px] font-bold">Create Token</span>
            </label>
          </div>
        </button>
      </form>
    </div>
  );
}

export default FairlaunchForm;
