import React, { useEffect, useState } from "react";

// Modules
import Stake from "./stake";
import FAQs from "./faqs";
import Info from "./info";
import Stats from "./stats";
import RewardsHistory from "./history";

const Main: React.FC = (packS, setPackS) => {
  const [infoTab, setInfoTab] = useState("info");

  return (
    <>
      <div className="fadein w-full mx-auto text-sm md:mt-6 space-y-4 md:space-y-6">
        <div className="grid grid-cols-1 gap-4 md:gap-6">
          <Stake />
        </div>

        <div className="grid grid-cols-1 gap-4 md:gap-6">
          <Stats />
        </div>

        <div className="grid grid-cols-1 gap-4 md:gap-6 card">
          <RewardsHistory />
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
