import { useForm, Form } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import InputHeader from "../../InputHeader";
import TextEditor from "../../TextEditor";
import dynamic from "next/dynamic";

const btnStyle =
  "btn btn-md py-2 px-5 btn-outline border-[#272B30] bg-[#1A1D1F] text-white hover:bg-[#1A1D1F] hover:text-white rounded-xl z-[1] relative";
const formStyle = "flex flex-col items-start gap-3 self-stretch";
const imageUploaderStyle =
  "flex gap-2 items-center justify-center py-3 px-5 rounded-xl border-2 border-[#272B30] bg-[#1A1D1F] shadow-[inset_0_2px_4px_0_#31353B,0_4px_4px_0_rgba(0,0,0,0.25),0_12px_13px_-6px_rgba(0,0,0,0.04)]";

function CreateSocialForm() {
  const { register, watch, setValue, getValues } = useForm();
  const TextEditor = dynamic(() => import("../../TextEditor"), { ssr: false });

  return (
    <div className="flex flex-col items-start gap-12 flex-1">
      <form className="flex flex-col items-start gap-8 self-stretch">
        {/* Logo images */}
        <div className={formStyle}>
          <InputHeader label="Logo images" />
          <div className="flex items-start w-full">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-[411px] h-[200px] border-none rounded-xl cursor-pointer bg-[#272B30] "
            >
              <div className={imageUploaderStyle}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M17.2072 9.2905C17.5977 9.68103 17.5977 10.3142 17.2072 10.7047C16.8167 11.0952 16.1835 11.0952 15.793 10.7047L13.002 7.91377V15C13.002 15.5523 12.5543 16 12.002 16C11.4498 16 11.002 15.5523 11.002 15V7.91368L8.20906 10.7067C7.81854 11.0972 7.18537 11.0972 6.79485 10.7067C6.40432 10.3161 6.40432 9.68298 6.79485 9.29245L11.2949 4.79241C11.4824 4.60487 11.7368 4.49951 12.002 4.49951C12.2672 4.49951 12.5216 4.60487 12.7091 4.79241L17.2072 9.2905Z"
                    fill="#FCFCFC"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 14C4.55228 14 5 14.4477 5 15V17C5 17.5523 5.44772 18 6 18H18C18.5523 18 19 17.5523 19 17V15C19 14.4477 19.4477 14 20 14C20.5523 14 21 14.4477 21 15V17C21 18.6569 19.6569 20 18 20H6C4.34315 20 3 18.6569 3 17V15C3 14.4477 3.44772 14 4 14Z"
                    fill="#FCFCFC"
                  />
                </svg>
                <span className="text-[15px] font-bold text-[#FCFCFC]">
                  Click or drop image
                </span>
              </div>
              <input id="dropzone-file" type="file" className="hidden" />
            </label>
          </div>
        </div>

        {/* Website and Twitter */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          <div className={formStyle}>
            <InputHeader label="Website" />
            <label className="input border-none h-10 w-[360px] p-3 rounded-xl bg-[#272B30] flex items-center gap-2">
              <input
                type="text"
                className="grow bg-transparent focus-visible:outline-none"
                placeholder="https://..."
              />
            </label>
          </div>
          <div className={formStyle}>
            <InputHeader label="Twitter" />
            <div className="flex items-start gap-3 self-stretch">
              <label className="input border-none h-10 w-[360px] p-3 rounded-xl bg-[#272B30] flex items-center gap-2">
                <input
                  type="text"
                  className="grow bg-transparent focus-visible:outline-none"
                  placeholder="https://twitter.com"
                />
              </label>
            </div>
          </div>
        </div>

        {/* Discord and Telegram */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          <div className={formStyle}>
            <InputHeader label="Discord" />
            <label className="input border-none h-10 w-[360px] p-3 rounded-xl bg-[#272B30] flex items-center gap-2">
              <input
                type="text"
                className="grow bg-transparent focus-visible:outline-none"
                placeholder="https://t.me..."
              />
            </label>
          </div>
          <div className={formStyle}>
            <InputHeader label="Telegram" />
            <div className="flex items-start gap-3 self-stretch">
              <label className="input border-none h-10 w-[360px] p-3 rounded-xl bg-[#272B30] flex items-center gap-2">
                <input
                  type="text"
                  className="grow bg-transparent focus-visible:outline-none"
                  placeholder="https://t.me..."
                />
              </label>
            </div>
          </div>
        </div>

        {/* Facebook and Instagram */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          <div className={formStyle}>
            <InputHeader label="Facebook" />
            <label className="input border-none h-10 w-[360px] p-3 rounded-xl bg-[#272B30] flex items-center gap-2">
              <input
                type="text"
                className="grow bg-transparent focus-visible:outline-none"
                placeholder="https://facebook.com/..."
              />
            </label>
          </div>
          <div className={formStyle}>
            <InputHeader label="Instagram" />
            <div className="flex items-start gap-3 self-stretch">
              <label className="input border-none h-10 w-[360px] p-3 rounded-xl bg-[#272B30] flex items-center gap-2">
                <input
                  type="text"
                  className="grow bg-transparent focus-visible:outline-none"
                  placeholder="https://instagram.com/..."
                />
              </label>
            </div>
          </div>
        </div>

        {/* Youtube */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          <div className={formStyle}>
            <InputHeader label="Youtube" />
            <label className="input border-none h-10 w-[360px] p-3 rounded-xl bg-[#272B30] flex items-center gap-2">
              <input
                type="text"
                className="grow bg-transparent focus-visible:outline-none"
                placeholder="https://youtube.com/..."
              />
            </label>
          </div>
        </div>

        {/* Description */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          <div className={formStyle}>
            <InputHeader label="Description" />
            <TextEditor
              value={"Description"}
              onChange={(v: any) => console.log(v)}
            />
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
                <span className="text-[15px] font-bold">Preview</span>
              </label>
            </div>
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateSocialForm;
