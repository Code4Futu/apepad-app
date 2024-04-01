import React from "react";

// ClassName
const topbarClass =
  "sticky top-[96px] md:top-[88px] left-0 right-0 w-full px-6 md:px-10 z-40 h-[42px] bg-[#1A1D1F] shadow-[inset_1px_0_0_0_#111315] text-sm z-50 flex items-center overflow-x-hidden border-t-[1px] border-black";

function TopBar() {
  return (
    <div className={topbarClass}>
      <span className="text-[13px] font-semibold leading-[16px] whitespace-nowrap w-[72px] mr-6">
        🔥Trending
      </span>
      <div className="relative flex overflow-x-hidden max-w-[calc(100vw-144px)] md:max-w-[calc(100vw-176px)] lg:max-w-[calc(100vw-516px)]">
        <div className="animate-marquee whitespace-nowrap">
          {topTokenMockup.map((item, idx) => (
            <span
              key={idx}
              className="mx-6 text-[13px] font-semibold leading-[16px] text-[#90E788]"
            >
              <span className="text-[#6F767E]">#{item.rank}</span> {item.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

const topTokenMockup = [
  {
    label: "DONUT",
    code: "donut",
    rank: 1,
  },
  {
    label: "FACEP",
    code: "facep",
    rank: 2,
  },
  {
    label: "GRU",
    code: "gru",
    rank: 3,
  },
  {
    label: "PAWS",
    code: "paws",
    rank: 4,
  },
  {
    label: "DREW",
    code: "drew",
    rank: 5,
  },
  {
    label: "BKS",
    code: "bks",
    rank: 6,
  },
  {
    label: "FONK",
    code: "fonk",
    rank: 7,
  },
  {
    label: "CHD",
    code: "chd",
    rank: 8,
  },
  {
    label: "SOP",
    code: "sop",
    rank: 9,
  },
  {
    label: "SOL",
    code: "sol",
    rank: 10,
  },
  {
    label: "ADA",
    code: "ada",
    rank: 11,
  },
  {
    label: "WIF",
    code: "wif",
    rank: 12,
  },
  {
    label: "BKS",
    code: "bks",
    rank: 13,
  },
];

export default TopBar;
