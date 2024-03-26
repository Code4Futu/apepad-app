import React from "react";
import Image from "next/image";
import { BurnInfo } from "@/config/type";
import { formatNumber } from "@/utils/constracts/common";
import { toNumber } from "lodash";
import { XLOOT_EXCHANGE_RATE } from "@/utils/helper/legacy";

interface Props {
  data?: BurnInfo;
  circulatingSupply?: number;
}
function Stats({ data, circulatingSupply }: Props) {
  const lootBurnForOneXloot = XLOOT_EXCHANGE_RATE;
  const totalSupply = 10000000;

  const circSupplyPercent =
    !!circulatingSupply && !!data?.total_x_loot
      ? ((Number(data.total_x_loot) * lootBurnForOneXloot) /
          circulatingSupply) *
        100
      : 0;

  const totalSupplyPercent = !!data?.total_loot_burn
    ? (Number(data?.total_loot_burn) / totalSupply) * 100
    : 0;

  return (
    <>
      <div className="grid lg:grid-cols-3 gap-4 md:gap-6">
        <div className="stats">
          <div className="stat">
            <div className="stat-figure">
              <Image
                alt="logo"
                width={32}
                height={32}
                className="cursor-pointer"
                src="/logo.svg"
              />
            </div>
            <div className="stat-title">Total Burnt</div>
            <div className="stat-value">
              {toNumber(data?.total_loot_burn)
                ? formatNumber(Number(data?.total_loot_burn)) + " $LOOT"
                : "-"}{" "}
            </div>
            <div className="stat-desc mt-1">
              <strong className="text-success">
                {totalSupplyPercent.toFixed(2)}%
              </strong>{" "}
              of $LOOT total supply
            </div>
          </div>
        </div>
        <div className="stats">
          <div className="stat">
            <div className="stat-figure">
              <img
                alt=""
                className="h-8 cursor-pointer"
                src="/currency-icons/$xLOOT.svg"
              />
            </div>
            <div className="text-xs text-base-content/70 mb-1">
              TOTAL $xLOOT ISSUED{" "}
            </div>
            <div className="stat-value">
              {toNumber(data?.total_x_loot)
                ? data?.total_x_loot + " $xLOOT"
                : "-"}{" "}
            </div>
            <div className="stat-desc mt-1">
              <strong className="text-success">
                {circSupplyPercent.toFixed(2)}%
              </strong>{" "}
              of $LOOT circulating supply
            </div>
          </div>
        </div>
        <div className="stats">
          <div className="stat">
            <div className="stat-figure">
              <i className="fa-duotone fa-hand-holding-dollar text-2xl icon-primary"></i>
            </div>
            <div className="stat-title">Last Epoch RevShare</div>
            <div className="stat-value">
              {toNumber(data?.est_revenue_share)
                ? formatNumber(Number(data?.est_revenue_share)) + " ETH"
                : "-"}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Stats;
