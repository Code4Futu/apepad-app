import { twMerge } from "tailwind-merge";

export const Divider = ({ className }: { className?: string }) => {
  return (
    <div
      className={twMerge(
        "h-[1px] self-stretch bg-[#272B30] rounded-[1px]",
        className
      )}
    />
  );
};
