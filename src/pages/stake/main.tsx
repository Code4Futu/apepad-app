import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  XLootStats,
  getTotalLootStaked,
  getTotalRewarded,
  getTotalUser,
  getXLootStats,
  getStakingPointOf,
} from "@/services/staking/staking";

import useSWR from "swr";
import { useAccount, useChainId } from "wagmi";
import { getUserAPR } from "@/services/staking/getAPR";

// Modules
import Stake from "./stake";
import FAQs from "./faqs";
import Info from "./info";
import Stats from "./stats";
import RewardsHistory from "./history";
import { getStakingEvents } from "@/services/staking/getStakingEvents";
import { MORALIS_KEYS } from "@/config/urls";

export interface StatsProps {
  totalStaked: number | undefined;
  // xlootsStats: XLootStats;
  totalUser: number | undefined;
  totalRewarded: number | undefined;
  apr: number | undefined;
  points: number | undefined;
}

export type StakingEvent = {
  txHash: string;
  action: string;
  amount: number;
  time: number;
};

const Main: React.FC = (packS, setPackS) => {
  const chainId = useChainId();

  const [infoTab, setInfoTab] = useState("info");

  const { address: account } = useAccount();

  const [stats, setStats] = useState<StatsProps>({
    totalStaked: undefined,
    // xlootsStats: XLootStats;
    totalUser: undefined,
    totalRewarded: undefined,
    apr: undefined,
    points: undefined,
  });

  const [events, setEvents] = useState<
    { txHash: string; action: string; amount: number; time: number }[]
  >([]);

  const getStakingEventsCallback = useCallback(async () => {
    try {
      console.log("get events", MORALIS_KEYS);
      const events = await getStakingEvents(chainId);
      setEvents(events);
    } catch (error) {
      console.log(error);
    }
  }, [chainId]);

  useEffect(() => {
    getStakingEventsCallback();
  }, [getStakingEventsCallback]);

  const getStats = useCallback(async () => {
    if (!chainId)
      setStats({
        totalStaked: undefined,
        // xlootsStats: XLootStats;
        totalUser: undefined,
        totalRewarded: undefined,
        apr: undefined,
        points: undefined,
      });

    try {
      const [
        _totalStaked,
        // xlootsStats,
        _totalUser,
        _totalRewarded,
        // { apr, staked, xloots },
        userApr,
        stakingPointOf,
      ] = await Promise.allSettled([
        getTotalLootStaked(chainId!),
        // getXLootStats(chainId),
        getTotalUser(chainId),
        getTotalRewarded(chainId),
        getUserAPR(chainId, account!),
        getStakingPointOf(chainId, account!),
      ]);

      let totalStaked = undefined,
        totalUser = undefined,
        totalRewarded = undefined;
      if (
        _totalStaked.status === "fulfilled" &&
        _totalUser.status === "fulfilled" &&
        _totalRewarded.status === "fulfilled"
      ) {
        totalStaked = _totalStaked.value;
        totalUser = _totalUser.value;
        totalRewarded = _totalRewarded.value;
      }

      let points = undefined,
        apr = undefined;
      if (
        userApr.status === "fulfilled" &&
        stakingPointOf.status === "fulfilled"
      ) {
        points =
          (stakingPointOf.value * (userApr.value.staked ?? 0) * 10) / 10 ** 9 +
          10 * 15000 * (userApr.value.xloots?.length ?? 0);
        apr = userApr.value.apr;
      }

      setStats({
        totalStaked: totalStaked,
        //  xlootsStats,
        totalUser,
        totalRewarded,
        apr,
        points,
      });
    } catch (error) {
      console.log(error);
    }
  }, [chainId, account]);

  useEffect(() => {
    getStats();
  }, [getStats]);

  return (
    <>
      <div className="fadein w-full mx-auto text-sm md:mt-6 space-y-4 md:space-y-6">
        <div className="grid grid-cols-1 gap-4 md:gap-6">
          <Stake setEvents={setEvents} stats={stats} />
        </div>

        <div className="grid grid-cols-1 gap-4 md:gap-6">
          <Stats stats={stats} />
        </div>

        <div className="grid grid-cols-1 gap-4 md:gap-6 card">
          <RewardsHistory events={events} />
        </div>

        <div className="grid grid-cols-1 gap-4 md:gap-6 card">
          <div className="ctabs-container">
            <div className="ctabs">
              <button
                onClick={() => setInfoTab("info")}
                className={`ctab ${infoTab === "info" ? "ctab-active" : ""}`}
              >
                <span className={`ctab-title`}>Info</span>
                <span className={`ctab-border`}></span>
              </button>
              <button
                onClick={() => setInfoTab("faqs")}
                className={`ctab ${infoTab === "faqs" ? "ctab-active" : ""}`}
              >
                <span className={`ctab-title`}>FAQs</span>
                <span className={`ctab-border`}></span>
              </button>
            </div>
          </div>

          {infoTab === "info" && <Info />}

          {infoTab === "faqs" && <FAQs />}
        </div>
      </div>
    </>
  );
};

export default Main;
