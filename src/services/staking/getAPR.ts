import { ChainId } from "@/config/type";
import { Address } from "wagmi";
import { getEthPrice } from "../coingecko/getEthPrice";
import { getLootPrice } from "../coingecko/getLootPrice";
import { getClaimableOf, getUserStaking } from "./staking";
import { getOwnerXLoots } from "../xloots/getOwnerXLoots";

export const getAPR = async (
  totalLoot: number,
  xloots: number[],
  ethPrice: number,
  lootPrice: number,
  claimable: number,
  bonusToken: number,
  duration: number, // timestamp
  lastRedeem?: {
    duration: number;
    value: number;
    bonusToken: number;
  }
) => {
  const LOOT_PER_XLOOT = 15000;
  const DAY = 24 * 60 * 60;

  const _duration = Number(duration / DAY) > 1 ? Number(duration / DAY) : 1;

  let valuePerDay = 0;
  if (Number(claimable) > 0) {
    valuePerDay =
      (Number(claimable) * ethPrice + Number(bonusToken) * lootPrice) /
      _duration;
  } else {
    if (!lastRedeem?.value) return 0;
    valuePerDay =
      ((lastRedeem.value * ethPrice + lastRedeem.bonusToken * lootPrice) *
        Number(DAY)) /
      lastRedeem.duration;
  }

  const valuePerYear = valuePerDay * 365;

  return (
    (valuePerYear * 100) /
    ((totalLoot + LOOT_PER_XLOOT * xloots.length) * lootPrice)
  );
};

export const getUserAPR = async (chainId: ChainId, account: Address) => {
  if (!account)
    return {
      apr: undefined,
      points: undefined,
    };

  const [ethPrice, lootPrice] = await Promise.all([
    getEthPrice(),
    getLootPrice(),
  ]);

  const [
    { amount: totalLoot, points },
    xloots,
    { claimable, bonusToken, duration },
  ] = await Promise.all([
    getUserStaking(chainId, account),
    getOwnerXLoots(chainId, account),
    getClaimableOf(chainId, account),
  ]);

  const apr = await getAPR(
    totalLoot,
    xloots,
    ethPrice,
    lootPrice,
    claimable,
    bonusToken,
    duration
  );

  return {
    staked: totalLoot,
    xloots,
    apr,
    points,
  };
};
