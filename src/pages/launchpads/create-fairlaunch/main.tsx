import React, { useCallback, useEffect, useState } from "react";
import FairlaunchTabs from "./components/Tabs";
import CreateTokenForm from "./components/pages/TokenForm/CreateTokenForm";
import CreatePoolForm from "./components/pages/PoolForm/CreatePoolForm";
import CreateSocialForm from "./components/pages/SocialForm/CreateSocialForm";
import { twMerge } from "tailwind-merge";
import Title from "@/components/common/Title";
import PreviewProject from "@/components/preview-project/PreviewProject";
import PreviewProjectMobile from "@/components/preview-project/PreviewProjectMobile";
import { launchpadListMockup } from "@/constants/launchpad";

const Main: React.FC = (props) => {
  const [tab, setTab] = useState<string>("token");
  const [isFormDone, setIsFormDone] = useState<boolean>(false);

  return (
    <div className="fadein w-full mx-auto text-sm my-6 space-y-4 md:space-y-6">
      <div className="grid grid-cols-1 gap-4 md:gap-6">
        {isFormDone ? (
          <Title title="Preview" />
        ) : (
          <Title title="Create Fairlaunch" />
        )}
        {!isFormDone && (
          <FairlaunchTabs
            tab={tab}
            setTab={setTab}
            setIsFormDone={setIsFormDone}
          />
        )}
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
      <div className="flex lg:flex xl:hidden relative flex flex-col gap-4 shrink-0 self-stretch">
        {isFormDone && <PreviewProjectMobile item={launchpadListMockup[0]} />}
      </div>
      <div className="hidden xl:flex relative items-start gap-2">
        {isFormDone && <PreviewProject item={launchpadListMockup[0]} />}
      </div>
    </div>
  );
};

export default Main;
