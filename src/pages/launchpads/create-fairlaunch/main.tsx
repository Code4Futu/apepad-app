import React, { useCallback, useEffect, useState } from "react";
import FairlaunchTabs from "./components/Tabs";
import CreateTokenForm from "./components/pages/TokenForm/CreateTokenForm";
import CreatePoolForm from "./components/pages/PoolForm/CreatePoolForm";
import CreateSocialForm from "./components/pages/SocialForm/CreateSocialForm";
import PreviewProject from "./components/pages/PreviewProject/PreviewProject";
import { twMerge } from "tailwind-merge";

const Main: React.FC = (props) => {
  const [tab, setTab] = useState<string>("token");
  const [isFormDone, setIsFormDone] = useState<boolean>(false);

  return (
    <div className="fadein w-full mx-auto text-sm mt-6 space-y-4 md:space-y-6">
      <div className="grid grid-cols-1 gap-4 md:gap-6">
        <span className="text-[32px] md:text-[40px] font-semibold text-[#FCFCFC] leading-[48px]">
          Create Fairlaunch
        </span>
        <FairlaunchTabs
          tab={tab}
          setTab={setTab}
          setIsFormDone={setIsFormDone}
        />
      </div>
      <div
        className={twMerge(
          "relative grid grid-cols-1 gap-4 p-4 md:gap-8 md:p-6 bg-[#1A1D1F] rounded-lg",
          isFormDone && "hidden"
        )}
      >
        {tab === "token" && !isFormDone && <CreateTokenForm />}
        {tab === "pool" && !isFormDone && <CreatePoolForm />}
        {tab === "social" && !isFormDone && (
          <CreateSocialForm setIsFormDone={setIsFormDone} />
        )}
      </div>
      <div className="relative flex flex-col items-start gap-2 md:flex-row">
        {isFormDone && <PreviewProject />}
      </div>
    </div>
  );
};

export default Main;
