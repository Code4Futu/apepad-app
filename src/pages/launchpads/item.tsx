import { StatusComponent } from "@/components/status/StatusComponent";
import { timeDiff } from "@/utils/time/utils";
import Image from "next/image";
import { useState, useEffect } from "react";

export const LaunchpadItem = () => {
  const [timeStartDiff, setTimeStartDiff] = useState<{
    d: number;
    h: number;
    m: number;
    s: number;
  }>({
    d: 0,
    h: 0,
    m: 0,
    s: 0,
  });

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       const time = timeDiff(Date.now(), 1706187600 * 1000, 1712988827 * 1000);
  //       setTimeStartDiff(time);
  //     }, 1000);

  //     return () => clearInterval(interval);
  //   }, []);

  //   const Countdown = () => (
  //     <div className="flex items-center md:justify-start">
  //       <div>
  //         <span className="countdown font-bold text-[13px]">
  //           <span
  //             style={{
  //               // @ts-ignore
  //               "--value": timeStartDiff?.d ?? 0,
  //             }}
  //           ></span>
  //         </span>{" "}
  //       </div>
  //       <span className="text-[13px] font-bold leading-[19px]">:</span>
  //       <div>
  //         <span className="countdown font-bold text-[13px]">
  //           <span
  //             style={{
  //               // @ts-ignore
  //               "--value": timeStartDiff?.h ?? 0,
  //             }}
  //           ></span>
  //         </span>{" "}
  //       </div>
  //       <span className="text-[13px] font-bold leading-[19px]">:</span>
  //       <div>
  //         <span className="countdown font-bold text-[13px]">
  //           <span
  //             style={{
  //               // @ts-ignore
  //               "--value": timeStartDiff?.m ?? 0,
  //             }}
  //           ></span>
  //         </span>{" "}
  //       </div>
  //     </div>
  //   );

  return (
    <div className="flex flex-col items-start p-6 gap-3 flex-1 rounded-[20px] border-[1px] border-[#272B30] md:max-w-[308px]">
      <div className="flex items-start gap-[10px] self-stretch">
        <div className="relative flex w-[72px] h-[72px] justify-center items-center rounded-xl bg-[#FFE8B6] overflow-hidden">
          <Image src="/svg/duge.svg" alt="" fill />
        </div>
        <div className="flex justify-end items-start flex-1">
          <StatusComponent status="Live" />
        </div>
      </div>
      <div className="flex flex-col items-start self-stretch">
        <span className="text-xl font-medium leading-[32px] text-[#FCFCFC]">
          DUGE
        </span>
        <span className="text-sm font-semibold leading-[24px] text-[#6F767E]">
          1 DUGE = 0.000767930 APT
        </span>
      </div>
      <div className="flex flex-col items-start self-stretch">
        <span className="text-sm font-semibold leading-[24px] text-[#6F767E]">
          Soft/Hard
        </span>
        <span className="text-[18px] font-medium leading-[32px] text-[#FCFCFC]">
          100 - 400 APT
        </span>
      </div>
      <div className="flex flex-col items-start self-stretch gap-1">
        <span className="text-sm font-semibold leading-[24px] text-[#6F767E]">
          Progress (0.00%)
        </span>
        <progress
          className="progress progress-success !w-full self-stretch !h-[6px]"
          value="40"
          max="100"
        ></progress>
        <div className="flex justify-between">
          <span className="text-sm font-semibold leading-[24px] text-[#6F767E]">
            0 APT
          </span>
          <span className="text-sm font-semibold leading-[24px] text-[#6F767E]">
            100 APT
          </span>
        </div>
      </div>
      <div className="flex flex-col items-start self-stretch">
        <div className="flex justify-between">
          <span className="text-sm font-semibold leading-[24px] text-[#6F767E]">
            Liquidity
          </span>
          <span className="text-sm font-semibold leading-[24px] text-[#6F767E]">
            51%
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm font-semibold leading-[24px] text-[#6F767E]">
            Lock up time
          </span>
          <span className="text-sm font-semibold leading-[24px] text-[#6F767E]">
            365 days
          </span>
        </div>
      </div>
      <div className="flex items-start justify-between self-stretch">
        <div className="flex py-2 px-4 justify-center items-center gap-2 rounded-xl border-2 border-[#272B30] bg-[#1A1D1F]">
          <span className="flex text-[13px] text-[#FCFCFC] leading-[24px] font-bold">
            {/* END: <Countdown /> */}
            END: -
          </span>
        </div>
        <div className="flex py-2 px-4 justify-center items-center gap-2 rounded-xl border-2 border-[#90E788] bg-[#1A1D1F]">
          <span className="text-[13px] text-[#90E788] leading-[24px] font-bold">
            View
          </span>
        </div>
      </div>
    </div>
  );
};
