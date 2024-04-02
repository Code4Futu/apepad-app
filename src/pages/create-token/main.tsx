import Title from "@/components/common/Title";
import InputHeader from "@/components/inputs/InputHeader";
import { listTokenType } from "@/constants/tokens";
import { useForm } from "react-hook-form";
import { twMerge } from "tailwind-merge";

const btnStyle =
  "btn btn-md py-2 px-5 btn-outline border-[#272B30] bg-[#1A1D1F] text-white hover:bg-[#1A1D1F] hover:text-white rounded-xl z-[1] relative";
const formStyle = "flex flex-col items-start gap-3 self-stretch";

const Main: React.FC = (props) => {
  const { register, watch, setValue, getValues } = useForm();

  const selectedTokenOption = watch("token"); // watch the checkbox raise fund state

  const handleCheckboxTokenChange = (event: any) => {
    if (event.target.checked) {
      setValue("token", event.target.value);
    } else {
      setValue("token", "");
    }
  };
  return (
    <div className="fadein w-full mx-auto text-sm my-6 space-y-4 md:space-y-6">
      <div className="grid grid-cols-1 gap-4 md:gap-6">
        <Title title="Create Token" />
      </div>
      <div className="relative grid grid-cols-1 gap-4 p-4 md:gap-8 md:p-6 bg-[#1A1D1F] rounded-lg">
        <div className="flex flex-col items-start gap-12 flex-1">
          <form className="flex flex-col items-start gap-8 self-stretch">
            {/* Token Type */}
            <div className={formStyle}>
              <InputHeader label="Type" />
              <div className="flex flex-col items-start gap-3">
                {listTokenType.map((item, idx) => (
                  <label key={idx} className="cursor-pointer label flex gap-3">
                    <input
                      type="checkbox"
                      name="token"
                      value={item.label}
                      checked={selectedTokenOption === item.label}
                      onChange={handleCheckboxTokenChange}
                      className="checkbox checkbox-success border-[rgba(111,118,126,0.40)]"
                    />
                    <span className="text-[15px] font-semibold text-white">
                      {item.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Name */}
            <div className={formStyle}>
              <InputHeader label="Name" />
              <div className="flex flex-col items-start gap-3 self-stretch">
                <label className="input border-none h-10 w-full md:w-[360px] xl:w-[411px] p-3 rounded-xl bg-[#272B30] flex items-center gap-2">
                  <input
                    type="text"
                    className="grow bg-transparent focus-visible:outline-none"
                    placeholder="My Token"
                  />
                </label>
              </div>
            </div>

            {/* Symbol */}
            <div className={formStyle}>
              <InputHeader label="Symbol" />
              <div className="flex flex-col items-start gap-3 self-stretch">
                <label className="input border-none h-10 w-full md:w-[360px] xl:w-[411px] p-3 rounded-xl bg-[#272B30] flex items-center gap-2">
                  <input
                    type="text"
                    className="grow bg-transparent focus-visible:outline-none"
                    placeholder="SYMBOL"
                  />
                </label>
              </div>
            </div>

            {/* Decimals */}
            <div className={formStyle}>
              <InputHeader label="Decimals" />
              <div className="flex flex-col items-start gap-3 self-stretch">
                <label className="input border-none h-10 w-full md:w-[360px] xl:w-[411px] p-3 rounded-xl bg-[#272B30] flex items-center gap-2">
                  <input
                    type="text"
                    className="grow bg-transparent focus-visible:outline-none"
                    placeholder="18"
                  />
                </label>
              </div>
            </div>

            {/* Total Supply */}
            <div className={formStyle}>
              <InputHeader label="Total Supply" />
              <div className="flex flex-col items-start gap-3 self-stretch">
                <label className="input border-none h-10 w-full md:w-[360px] xl:w-[411px] p-3 rounded-xl bg-[#272B30] flex items-center gap-2">
                  <input
                    type="text"
                    className="grow bg-transparent focus-visible:outline-none"
                    placeholder="10000000"
                  />
                </label>
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
      </div>
    </div>
  );
};

export default Main;
