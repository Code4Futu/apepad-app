import { Status, STATUS } from "@/models/status";

export interface ILaunchpadItem {
  address: string;
  name: string;
  icon: string;
  status: Status;
  exchangeRate: string;
  softHard: string;
  progress: number;
  liquidity: number;
  lockupTime: number;
  start: number;
  end: number;
  top: number;
}

export const launchpadListMockup: ILaunchpadItem[] = [
  {
    address: "123456",
    name: "Duge",
    icon: "/svg/duge.svg",
    status: STATUS.LIVE,
    exchangeRate: "1 DUGE = 0.000767930 APT",
    softHard: "100 - 400 APT",
    progress: 60,
    liquidity: 51,
    lockupTime: 30,
    start: 1711955232,
    end: 1714547232,
    top: 1,
  },
  {
    address: "123457",
    name: "FLEXIMINE",
    icon: "/svg/fleximine.svg",
    status: STATUS.LIVE,
    exchangeRate: "1 FLEX = 0.000767930 APT",
    softHard: "100 - 400 APT",
    progress: 60,
    liquidity: 51,
    lockupTime: 30,
    start: 1711955232,
    end: 1714547232,
    top: 2,
  },
  {
    address: "123458",
    name: "Shatri",
    icon: "/svg/satri.svg",
    status: STATUS.LIVE,
    exchangeRate: "1 SHA = 0.000767930 APT",
    softHard: "100 - 400 APT",
    progress: 60,
    liquidity: 51,
    lockupTime: 30,
    start: 1711955232,
    end: 1714547232,
    top: 3,
  },
  {
    address: "123459",
    name: "DecentraCloud",
    icon: "/svg/decentra.svg",
    status: STATUS.LIVE,
    exchangeRate: "1 DEC = 0.000767930 APT",
    softHard: "100 - 400 APT",
    progress: 60,
    liquidity: 51,
    lockupTime: 30,
    start: 1711955232,
    end: 1714547232,
    top: 4,
  },
  {
    address: "123461",
    name: "Pepe Pay",
    icon: "/svg/pepepay.svg",
    status: STATUS.UPCOMING,
    exchangeRate: "1 Pepe = 0.000767930 APT",
    softHard: "100 - 400 APT",
    progress: 60,
    liquidity: 51,
    lockupTime: 30,
    start: 1711955232,
    end: 1714547232,
    top: 5,
  },
  {
    address: "123462",
    name: "DREW",
    icon: "/svg/drew.svg",
    status: STATUS.UPCOMING,
    exchangeRate: "1 DREW = 0.000767930 APT",
    softHard: "100 - 400 APT",
    progress: 60,
    liquidity: 51,
    lockupTime: 30,
    start: 1711955232,
    end: 1714547232,
    top: 6,
  },
];

export const tokenData = {
  address: "0x8a99feeFC8857e65bE8f098F22765b99113d43Ef",
  name: "Googly Cat",
  symbol: "GOOGLY",
  totalSupply: "100,000,000",
};

export const poolData = {
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

export const affiliateData = {
  link: "https://beta.pinksale.finance...ee9291B37A43be59c1",
  yourReward: 0,
  referralCount: 14,
  rewardPercent: 5,
};

export const frequentlyQuestion = [
  {
    label: "What is this token sale about?",
    description: `This is a unique opportunity for early supporters to purchase tokens before they're available to the general public. The presale is typically organized to raise funds for project development and growth. It gives participants a chance to buy tokens at a potentially lower rate than after the official launch.`,
  },
  {
    label: `I forgot my password`,
    description: `I forgot my password`,
  },
  {
    label: `I can’t reset my password`,
    description: `I can’t reset my password`,
  },
  {
    label: "How to upgrade to Pro account?",
    description:
      "Enjoy instant access to our vast library of 5,121 premium products and all upcoming new releases with super-fast download speeds powered by Amazon S3.",
  },
  {
    label: `How do I change and reset my password`,
    description: `How do I change and reset my password`,
  },
];
