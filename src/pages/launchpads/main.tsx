import React, { useState } from "react";
import Filter from "./filter";
import { LaunchpadItem } from "./item";

const Main: React.FC = (props) => {
  const [infoTab, setInfoTab] = useState("all");
  const [view, setView] = useState("grid");

  return (
    <div className="fadein w-full mx-auto text-sm mt-6 space-y-4 md:space-y-6">
      <div className="grid grid-cols-1 gap-4 md:gap-6">
        <span className="text-[40px] font-semibold text-[#FCFCFC] leading-[48px]">
          All Launchpads
        </span>
      </div>
      <div className="grid grid-cols-1 gap-4 p-4 md:gap-8 md:p-6 bg-[#1A1D1F] rounded-lg">
        <Filter
          infoTab={infoTab}
          setInfoTab={setInfoTab}
          view={view}
          setView={setView}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <LaunchpadItem />
          <LaunchpadItem />
          <LaunchpadItem />
          <LaunchpadItem />
          <LaunchpadItem />
          <LaunchpadItem />
        </div>
      </div>
    </div>
  );
};

export default Main;
