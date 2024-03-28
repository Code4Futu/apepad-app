import React, { useCallback, useEffect, useState } from "react";
import FairlaunchTabs from "./components/Tabs";
import CreateTokenForm from "./components/pages/TokenForm/CreateTokenForm";
import CreatePoolForm from "./components/pages/PoolForm/CreatePoolForm";
import CreateSocialForm from "./components/pages/SocialForm/CreateSocialForm";

const Main: React.FC = (props) => {
  const [tab, setTab] = useState<string>("token");

  return (
    <div className="fadein w-full mx-auto text-sm mt-6 space-y-4 md:space-y-6">
      <div className="grid grid-cols-1 gap-4 md:gap-6">
        <span className="text-[32px] md:text-[40px] font-semibold text-[#FCFCFC] leading-[48px]">
          Create Fairlaunch
        </span>
        <FairlaunchTabs tab={tab} setTab={setTab} />
      </div>
      <div className="relative grid grid-cols-1 gap-4 p-4 md:gap-8 md:p-6 bg-[#1A1D1F] rounded-lg">
        {tab === "token" && <CreateTokenForm />}
        {tab === "pool" && <CreatePoolForm />}
        {tab === "social" && <CreateSocialForm />}
      </div>
    </div>
  );
};

export default Main;
