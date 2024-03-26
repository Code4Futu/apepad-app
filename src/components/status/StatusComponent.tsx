import { Status, STATUS } from "@/models/status";
import { twMerge } from "tailwind-merge";

export const StatusComponent = ({ status }: { status: Status }) => {
  return (
    <div
      style={{
        background: "rgba(234, 250, 228, 0.15)",
      }}
      className={twMerge("flex items-center px-2 rounded-lg")}
    >
      <span
        className={twMerge(
          "text-sm leading-[24px]",
          status === STATUS.LIVE && "text-[#83BF6E]",
          status === STATUS.UPCOMING && "text-[#FF6A55]",
          status === STATUS.ENDED && "text-[#FF6C6C]"
        )}
      >
        {status}
      </span>
    </div>
  );
};
