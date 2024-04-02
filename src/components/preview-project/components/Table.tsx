import { twMerge } from "tailwind-merge";

interface Token {
  address: string;
  name: string;
  symbol: string;
  totalSupply: string;
}

interface PoolInfo {
  address: string;
  presale: string;
  liquidity: string;
  marketCap: string;
  start: string;
  end: string;
  listingOn: string;
  liquidityPercent: number;
  lockupTime: string;
}

interface Affiliate {
  link: string;
  yourReward: number;
  referralCount: number;
  rewardPercent: number;
}

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

const Table = ({
  data,
  type,
}: {
  data: Token | PoolInfo | Affiliate;
  type: string;
}) => {
  const propertyKeys =
    type === "token"
      ? Object.keys(data || tokenData)
      : type === "pool"
      ? Object.keys(data || poolData)
      : Object.keys(data || affiliateData);
  const propertyValues =
    type === "token"
      ? Object.values(data || tokenData)
      : type === "pool"
      ? Object.values(data || poolData)
      : Object.values(data || affiliateData);

  /* Uppercase first letter from object key */
  const capitalized = (word: string) =>
    word && word.charAt(0).toUpperCase() + word.slice(1);
  /* Truncate address for mobile */
  const truncatedAddress = (address: string) =>
    address && `${address.slice(0, 6)}...${address.slice(-4)}`;

  if (propertyKeys.length === 0) return;

  return (
    <div className="flex flex-col items-start gap-1 self-stretch">
      {propertyKeys.map((item, idx) => (
        <div
          key={idx}
          className={twMerge(
            "flex h-12 p-4 flex-col justify-between items-start self-stretch",
            idx % 2 === 0 && "bg-[rgba(39,43,48,0.30)]"
          )}
        >
          <div className="flex justify-between items-center self-stretch">
            <span className="text-sm font-semibold text-[#6F767E] max-w-[136px]">
              {capitalized(item)}
            </span>
            <div
              className={twMerge(
                "hidden gap-1 items-center justify-center text-sm text-[#FCFCFC] font-semibold",
                item === "address" && "flex",
                item === "link" && "flex"
              )}
            >
              <span className="hidden md:flex">{propertyValues[idx]}</span>
              <span className="md:hidden">
                {truncatedAddress(propertyValues[0] || "")}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="cursor-pointer"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.6667 4.16667H5C4.53976 4.16667 4.16667 4.53976 4.16667 5V11.6667C4.16667 12.1269 4.53976 12.5 5 12.5H11.6667C12.1269 12.5 12.5 12.1269 12.5 11.6667V5C12.5 4.53976 12.1269 4.16667 11.6667 4.16667ZM5 2.5C3.61929 2.5 2.5 3.61929 2.5 5V11.6667C2.5 13.0474 3.61929 14.1667 5 14.1667H11.6667C13.0474 14.1667 14.1667 13.0474 14.1667 11.6667V5C14.1667 3.61929 13.0474 2.5 11.6667 2.5H5Z"
                  fill="#6F767E"
                />
                <path
                  d="M5.8335 8.33334C5.8335 6.95262 6.95278 5.83334 8.3335 5.83334H15.0002C16.3809 5.83334 17.5002 6.95262 17.5002 8.33334V15C17.5002 16.3807 16.3809 17.5 15.0002 17.5H8.3335C6.95278 17.5 5.8335 16.3807 5.8335 15V8.33334Z"
                  fill="#6F767E"
                />
              </svg>
            </div>
            <span
              className={twMerge(
                "text-sm text-[#FCFCFC] font-semibold",
                item === "address" && "hidden",
                item === "link" && "hidden"
              )}
            >
              {propertyValues[idx]}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Table;
