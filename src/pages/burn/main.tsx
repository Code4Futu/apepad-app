import React, { useEffect, useState } from "react";

// Modules
import Burn from "./burn";
import Info from "./info";
import Stats from "./stats";
import RewardsHistory from "./history";
import { useAccount, useChainId } from "wagmi";
import useSWR from "swr";
import { getUserRevenue } from "@/services/loot-token/getUserRevenue";
import { getBurnInfo } from "@/services/mint-xLoot/getBurnInfo";
import { BurnInfo } from "@/config/type";
import { getCirculatingSupply } from "@/services/coingecko/getCirculatingSupply";
import { useRouter } from "next/router";

const Main: React.FC = (props) => {
  const [infoTab, setInfoTab] = useState("info");
  const [key, setKey] = useState(0);

  const chainId = useChainId();

  const keyRefetch = JSON.stringify(key);

  const { data: burnInfo } = useSWR<BurnInfo>(
    [keyRefetch, chainId],
    async () => {
      const burnInfo = await getBurnInfo(chainId);
      return burnInfo;
    }
  );

  const { data: circulatingSupply } = useSWR<any>([keyRefetch], async () => {
    const circulatingSupply = await getCirculatingSupply();
    return circulatingSupply;
  });

  const setRefetch = () => {
    setKey(Math.random());
  };

  return (
    <div className="fadein w-full mx-auto text-sm md:mt-6 space-y-4 md:space-y-6">
      <div className="grid grid-cols-1 gap-4 md:gap-6">
        <Burn setKey={setRefetch} />
      </div>

      <div className="grid grid-cols-1 gap-4 md:gap-6 card">
        <Info />
      </div>

      <div className="grid grid-cols-1 gap-4 md:gap-6">
        <Stats data={burnInfo} circulatingSupply={circulatingSupply} />
      </div>

      <div className="grid grid-cols-1 gap-4 md:gap-6 card">
        <RewardsHistory refetchKey={key} />
      </div>
    </div>
  );
};

export default Main;
