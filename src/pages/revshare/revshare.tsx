import React, { Fragment, useCallback, useEffect, useState } from "react";
import { Disclosure } from "@headlessui/react";
import Stats from "@/components/cards/stats/stats";
import RevshareClaim from "@/components/cards/claim/claim";
import RewardsHistory from "@/components/cards/history/history";
import Info from "@/components/cards/info/info";
import FAQs from "@/components/cards/faqs/faqs";
import { useAccount, useChainId } from "wagmi";
import useSWR from "swr";
import { getUserRevenue } from "@/services/loot-token/getUserRevenue";
import {
  getConfigClaim,
  getConfigSwapReward,
} from "@/services/loot-token/getConfigClaim";
import { getInfoRevHolderReward } from "@/services/loot-token/getInfoRevHolderReward";
import { BalanceSnapShot, RewardActivity } from "@/config/type";
import { getBalanceSnapshot } from "@/services/loot-token/getBalanceSnapshot";
import { convertBalanceSnapshotToRewardActivity } from "@/utils/backend/convert-types";
import Pagination from "@/components/core/pagination/pagination";
import { useRouter } from "next/router";
import { useLocation } from "react-use";

const RevshareMain = (props: any) => {
  const [infoTab, setInfoTab] = useState("info");
  const { pathname } = useLocation();
  const router = useRouter();
  const { t } = router.query;

  const { address: account } = useAccount();
  const chainId = useChainId();
  const [currentPage, setCurrentPage] = useState(1);
  const [take, setTake] = useState(10);
  const [totalRecord, setTotalRecord] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [keyClaimInfo, setkeyClaimInfo] = useState(0);
  const [isAutoCompoud, setIsAutoCompoud] = useState(false);

  const getAddress = t?.toString() || account || "";

  const keyT = JSON.stringify({ getAddress, keyClaimInfo });

  const { data: userRevenue = {} } = useSWR<any>(
    [keyT, chainId, account],
    async () => {
      const userRevenue = await getUserRevenue(chainId, getAddress);
      return userRevenue;
    }
  );

  const { data: activeClaim = {} } = useSWR<any>(
    ["activeClaim", chainId, account],
    async () => {
      const activeClaim = await getConfigClaim(chainId, getAddress);
      return activeClaim;
    }
  );

  const { data: activeCompoud = {} } = useSWR<any>(
    ["activeCompoud", chainId, account],
    async () => {
      const activeCompoud = await getConfigSwapReward(chainId, getAddress);
      setIsAutoCompoud(activeCompoud?.is_auto);
      return activeCompoud;
    }
  );

  const { data: infoRevHolderReward = {} } = useSWR<any>(
    ["infoRevHolderReward", chainId],
    async () => {
      const infoRevHolderReward = await getInfoRevHolderReward(chainId);
      return infoRevHolderReward;
    }
  );

  const key = JSON.stringify({
    take,
    currentPage,
    getAddress,
    pathname,
    keyClaimInfo,
  });

  const { data: rewardActivities = [] } = useSWR<RewardActivity[]>(
    [key, chainId, account],
    async () => {
      try {
        setIsLoading(true);
        const balanceSnapshot = await getBalanceSnapshot(
          chainId,
          take,
          currentPage,
          getAddress
        );
        setTotalRecord(balanceSnapshot.pagination.total);
        return balanceSnapshot.data.map((el: BalanceSnapShot) =>
          convertBalanceSnapshotToRewardActivity(el)
        );
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    }
  );

  const handleNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const handleSelectTake = (takeSelect: number) => {
    setTake(takeSelect);
  };

  const handleChangeKey = (newKey: number) => {
    setkeyClaimInfo(newKey);
  };

  return (
    <>
      <div className="fadein w-full mx-auto text-sm md:mt-6 space-y-4 md:space-y-6 relative">
        {/* <div className="grid grid-cols-1 gap-4 md:gap-6">
          <div className="flex bg-accent/10  px-4 py-3 rounded-md text-sm">
            <i className="fa-solid fa-circle-info mr-3 text-base text-accent"></i>
            <span>
              RevShare Dashboard is UNDER DEVELOPMENT. All data is subject to
              change ‼️
            </span>
          </div>
        </div> */}

        <header className="grid grid-cols-1 gap-4 md:gap-6">
          <Stats
            loot={infoRevHolderReward?.loot}
            xloot={infoRevHolderReward?.xloot}
          />
        </header>
        {/* 
        <div>
          <EpochTimer epoch={infoRevHolderReward?.epoch} />
        </div> */}

        <div className="grid grid-cols-1 gap-4 md:gap-6">
          <RevshareClaim
            activeClaim={activeClaim}
            claimableRewards={userRevenue?.claimable_rewards}
            tokenHolding={userRevenue?.token_holding}
            nextTimeRun={infoRevHolderReward?.epoch?.next_time_run}
            setkeyClaimInfo={handleChangeKey}
            setIsAutoCompoud={setIsAutoCompoud}
            isAutoCompoud={isAutoCompoud}
          />
        </div>

        <div className="grid grid-cols-1 gap-4 md:gap-6 card">
          <RewardsHistory
            rewardActivities={rewardActivities}
            isLoading={isLoading}
          />
          {rewardActivities.length > 0 && (
            <Pagination
              totalRecord={totalRecord}
              handleNextPage={handleNextPage}
              handlePrevPage={handlePrevPage}
              handleSelectTake={handleSelectTake}
              currentPage={currentPage}
              take={take}
              currentShow={rewardActivities.length}
            />
          )}
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
export default RevshareMain;
