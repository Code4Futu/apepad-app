import { formatNumber } from "@/utils/constracts/common";

import Image from "next/image";
import { toNumber } from "lodash";
import { XLOOT_EXCHANGE_RATE } from "@/utils/helper/legacy";

interface Props {
  loot: { total_token: string; total_rewards: string };
  xloot: { total_token: string; total_rewards: string };
}

function Stats({ loot, xloot }: Props) {
  const currentDate = new Date();
  const nextEpoch = 1701075600000;
  const exchangeRate =
    currentDate.valueOf() < nextEpoch ? 10000 : XLOOT_EXCHANGE_RATE;

  const calLootReward =
    (Number(loot?.total_rewards) / Number(loot?.total_token)) * exchangeRate;

  const calxLootReward =
    Number(xloot?.total_rewards) / Number(xloot?.total_token);

  return (
    <>
      <div className="grid lg:grid-cols-2 gap-4 md:gap-6">
        <div className="stats">
          <div className="stat">
            <div className="stat-figure text-primary">
              <Image
                alt="logo"
                width={32}
                height={32}
                className="cursor-pointer"
                src="/logo.svg"
              />
            </div>
            <div className="stat-title">LAST REVSHARE / 15K LOOT</div>
            <div className="stat-value">
              {" "}
              {toNumber(loot?.total_token)
                ? calLootReward.toFixed(4) + " ETH"
                : "-"}
            </div>
          </div>
          <div className="stat">
            <div className="stat-figure">
              <i className="fa-duotone fa-hand-holding-dollar text-2xl icon-primary"></i>
            </div>
            <div className="stat-title">Total</div>
            <div className="stat-value">
              {" "}
              {toNumber(loot?.total_rewards)
                ? `${formatNumber(Number(loot.total_rewards))} ETH`
                : "-"}{" "}
            </div>
          </div>
        </div>
        <div className="stats bg-accent/20">
          <div className="stat">
            <div className="stat-figure">
              <Image
                alt="logo"
                width={32}
                height={32}
                className="cursor-pointer"
                src="/$xLOOT.png"
              />{" "}
            </div>
            <div className="text-xs text-base-content/70 mb-1">
              LAST REVSHARE / xLOOT
            </div>
            <div className="stat-value">
              {" "}
              {toNumber(xloot?.total_token)
                ? calxLootReward.toFixed(4) + " ETH"
                : "-"}
            </div>
          </div>
          <div className="stat">
            <div className="stat-figure">
              <i className="fa-duotone fa-hand-holding-dollar text-2xl icon-accent"></i>
            </div>
            <div className="text-xs text-base-content/70 mb-1">TOTAL</div>
            <div className="stat-value">
              {toNumber(xloot?.total_rewards)
                ? `${formatNumber(Number(xloot.total_rewards))} ETH`
                : "-"}{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Stats;
