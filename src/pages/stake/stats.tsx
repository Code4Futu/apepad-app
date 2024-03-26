import {
  convertToInternationalCurrencySystem,
  currencyFormatter,
  formatSmartNumber,
} from "@/utils/helper/number";
import { StatsProps } from "./main";

function Stats({ stats }: { stats: StatsProps }) {
  return (
    <>
      <div className="grid">
        <div className="stats stats-vertical lg:stats-horizontal">
          <div className="stat">
            <div className="stat-figure">
              <img
                alt=""
                className="h-8 cursor-pointer"
                src="/currency-icons/$LOOT.svg"
              />
            </div>
            <div className="stat-title">Total $LOOT Staked</div>
            <div className="stat-value">
              {currencyFormatter(stats?.totalStaked ?? 0)}
            </div>
          </div>

          <div className="stat">
            <div className="stat-figure">
              <i className="fa-duotone fa-people text-2xl icon-primary"></i>
            </div>
            <div className="stat-title">Wallets Participating</div>
            <div className="stat-value">{stats?.totalUser ?? 0}</div>
          </div>

          <div className="stat">
            <div className="stat-figure">
              <i className="fa-duotone fa-hand-holding-dollar text-2xl icon-primary"></i>
            </div>
            <div className="stat-title">Stake Reward</div>
            <div className="stat-value">
              {formatSmartNumber(stats?.totalRewarded ?? 0)} ETH
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Stats;
