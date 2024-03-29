import Image from "next/image";
import Link from "next/link";
import FieldHeader from "./components/FieldHeader";
import Table from "./components/Table";
import { StatusComponent } from "@/components/status/StatusComponent";
import { useEffect, useState } from "react";
import { timeDiff } from "@/utils/time/utils";
import { twMerge } from "tailwind-merge";

const socialLink = [
  {
    icons: "fa-brands fa-facebook-f",
    link: "",
  },
  {
    icons: "fa-brands fa-twitter",
    link: "",
  },
];

const info = [
  {
    label: "Status",
    value: "Live",
  },
  {
    label: "Sale Type",
    value: "Fairlaunch",
  },
  {
    label: "Total Contributors",
    value: "62",
  },
  {
    label: "Your Contribution",
    value: "12 APT",
  },
];

const btnStyle =
  "btn btn-md py-2 px-5 btn-outline border-[#272B30] bg-[#1A1D1F] text-white hover:bg-[#1A1D1F] hover:text-white rounded-lg z-[1] relative";

const tokenData = {
  address: "0x8a99feeFC8857e65bE8f098F22765b99113d43Ef",
  name: "Googly Cat",
  symbol: "GOOGLY",
  totalSupply: "100,000,000",
};

const poolData = {
  address: "0x8a99feeFC8857e65bE8f098F22765b99113d43Ef",
  presale: "42,000,000 GOOGLY",
  liquidity: "23,940,000 GOOGLY",
  marketCap: "$63,055.8569",
  start: "2024.03.24 16:00 (UTC)",
  end: "2024.03.28 18:00 (UTC)",
  listingOn: "Pancakeswap",
  liquidityPercent: 60,
  lockupTime: "365 days after pool ends",
};

const affiliateData = {
  link: "https://beta.pinksale.finance...ee9291B37A43be59c1",
  yourReward: 0,
  referralCount: 14,
  rewardPercent: 5,
};

function PreviewProject() {
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

  useEffect(() => {
    const interval = setInterval(() => {
      const time = timeDiff(Date.now(), 1706187600 * 1000, 1712988827 * 1000);
      setTimeStartDiff(time);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const Countdown = () => (
    <div className="flex items-start gap-2.5 self-stretch">
      <div className="flex py-2.5 px-3 flex-col items-center gap-[1px] flex-1 rounded-[10px] border-2 border-[#272B30]">
        <span className="countdown font-semibold text-[18px]">
          <span
            style={{
              // @ts-ignore
              "--value": timeStartDiff?.d ?? 0,
            }}
          ></span>
        </span>
        <span className="text-xs font-medium text-[#6F767E] text-center">
          days
        </span>
      </div>
      <div className="flex py-2.5 px-3 flex-col items-center gap-[1px] flex-1 rounded-[10px] border-2 border-[#272B30]">
        <span className="countdown font-semibold text-[18px]">
          <span
            style={{
              // @ts-ignore
              "--value": timeStartDiff?.h ?? 0,
            }}
          ></span>
        </span>
        <span className="text-xs font-medium text-[#6F767E] text-center">
          hours
        </span>
      </div>
      <div className="flex py-2.5 px-3 flex-col items-center gap-[1px] flex-1 rounded-[10px] border-2 border-[#272B30]">
        <span className="countdown font-semibold text-[18px]">
          <span
            style={{
              // @ts-ignore
              "--value": timeStartDiff?.m ?? 0,
            }}
          ></span>
        </span>
        <span className="text-xs font-medium text-[#6F767E] text-center">
          mins
        </span>
      </div>
      <div className="flex py-2.5 px-3 flex-col items-center gap-[1px] flex-1 rounded-[10px] border-2 border-[#272B30]">
        <span className="countdown font-semibold text-[18px]">
          <span
            style={{
              // @ts-ignore
              "--value": timeStartDiff?.s ?? 0,
            }}
          ></span>
        </span>
        <span className="text-xs font-medium text-[#6F767E] text-center">
          secs
        </span>
      </div>
    </div>
  );
  return (
    <>
      <div className="flex flex-col items-start p-4 md:p-6 gap-2 max-w-[672px] rounded-lg bg-[#1A1D1F] self-stretch">
        <div className="flex flex-col items-start gap-5 self-stretch">
          <div className="flex items-start gap-5 self-stretch">
            <div className="relative w-[69px] h-[69px] rounded-lg overflow-hidden">
              <Image src="/svg/duge.svg" alt="" fill />
            </div>
            <div className="flex flex-col items-start gap-1 flex-1">
              <div className="flex items-center self-stretch gap-1">
                <span className="text-xl font-medium text-[#FCFCFC] whitespace-nowrap">
                  DUGE Fairlaunch
                </span>
                <div className="flex py-1 px-2 justify-center items-center gap-2.5 rounded-sm bg-[#FFBC99]">
                  <span className="text-xs font-bold text-[#1A1D1F] whitespace-nowrap">
                    Top #3
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                {socialLink.map((item, idx) => (
                  <Link
                    href={item.link}
                    key={idx}
                    className="flex p-1 w-5 h-5 rounded-[32px] items-center justify-center bg-[#272B30] text-white cursor-pointer"
                  >
                    <i className={item.icons}></i>
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex items-end justify-end flex-1">
              <StatusComponent status="Live" />
            </div>
          </div>
          <div className="text-[15px] font-medium text-[#6F767E] self-stretch leading-[24px]">
            Invest before 100 BNB raise to get 20% bonus tokens 100-150 BNB 15%
            bonus, 150-200 BNB 10% bonus tokens, Step aside, Dog and PEPE! 🙀
            Googly Cat is hottest crypto in future, bringing the true meaning of
            “phenomenon” to the digital realm. 🚀 CMC Fast track paid 📣 🔵 CA
            Audited 🟢 CA KYCed 🟣 SAFU CA - Worldwide Hype ⚠️ No Team Tokens 🔒
            Locked Liquidity 🛡 CA Renounced 💰 🛡️ Maximum Security 🛡️ Big
            Marketing Plans 📢 💥 Ave#1 💥 Dexview #1 💥 Dextools #1 🤝
          </div>
          <div
            className="relative h-[360px] self-stretch rounded-xl"
            style={{
              background: `url('/svg/duge-banner.svg') lightgray 50% / cover no-repeat`,
            }}
          />
          <FieldHeader title="Token" />
          <Table type="token" data={tokenData} />
          <FieldHeader title="Pool Info" />
          <Table type="pool" data={poolData} />
          <FieldHeader title="Affiliate Program" />
          <Table type="affiliate" data={affiliateData} />
        </div>
      </div>
      <div className="flex flex-col items-start gap-2.5 w-full max-h-[957px] self-stretch">
        <div className="flex flex-col items-start gap-3.5 rounded-lg bg-[#1A1D1F] p-4 md:p-6 self-stretch">
          <div className="flex justify-center items-center text-sm text-white font-semibold self-stretch">
            Presale end in
          </div>
          <Countdown />
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
          <div className="flex flex-col items-start gap-1 self-stretch">
            <span className="text-sm font-semibold text-[#EFEFEF]">Amount</span>
            <label className="input flex items-center gap-2 self-stretch">
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
            <span className="text-[13px] font-medium text-[#6F767E]">
              1 TOL = 0.000040240 APT
            </span>
          </div>
          <button className="dropdown dropdown-bottom dropdown-end flex-shrink-0 self-stretch">
            <div className="flex items-center relative overflow-hidden rounded-box">
              <label
                className={twMerge(
                  btnStyle,
                  "bg-[#90E788] text-[#111315] hover:text-[#111315] hover:bg-[#90E788] hover:border-[#90E788] w-full"
                )}
              >
                <span className="text-[15px] font-bold">Publish Presale</span>
              </label>
            </div>
          </button>
        </div>
        <div className="flex flex-col items-start gap-3.5 rounded-lg bg-[#1A1D1F] p-4 md:p-6 self-stretch">
          <ul className="steps steps-vertical">
            <li className="step step-success">
              <div className="flex flex-col items-start justify-center gap-0.5">
                <span className="text-[15px] font-bold text-white">
                  Waiting for pool start
                </span>
                <span className="text-[13px] font-medium text-[#6F767E]">
                  No one can purchase
                </span>
              </div>
            </li>
            <li className="step step-success">
              <div className="flex flex-col items-start justify-center gap-0.5">
                <span className="text-[15px] font-bold text-white">
                  Pool Start
                </span>
                <span className="text-[13px] font-medium text-[#6F767E]">
                  Pool starts at 2024.03.28 15:00 (UTC)
                </span>
              </div>
            </li>
            <li className="step">
              <div className="flex flex-col items-start justify-center gap-0.5">
                <span className="text-[15px] font-bold text-white">
                  Pool Ended
                </span>
                <span className="text-[13px] font-medium text-[#6F767E]">
                  Pool ends at 2024.04.04 15:00 (UTC)
                </span>
              </div>
            </li>
            <li className="step">
              <div className="flex flex-col items-start justify-center gap-0.5">
                <span className="text-[15px] font-bold text-white">
                  Claim tokens
                </span>
                <span className="text-[13px] font-medium text-[#6F767E]">
                  Claim at 2024.04.04 15:30 (UTC)
                </span>
              </div>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-start rounded-lg bg-[#1A1D1F] p-4 md:p-6 self-stretch">
          {info.map((item, idx) => (
            <div
              key={idx}
              className="flex py-6 flex-col items-start self-stretch"
            >
              <div className="flex justify-between items-center self-stretch text-sm font-semibold">
                <span className="text-[#6F767E]">{item.label}</span>
                <span className={twMerge("text-white")}>{item.value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default PreviewProject;
