import React, { useCallback, useEffect, useMemo, useState } from "react";
import Filter from "./filter";
import LaunchpadItem from "./create-fairlaunch/components/LaunchpadItem";
import { launchpadListMockup } from "@/constants/launchpad";

const Main: React.FC = (props) => {
  const [infoTab, setInfoTab] = useState("all");
  const [view, setView] = useState("grid");

  return (
    <div className="fadein w-full mx-auto text-sm my-6 space-y-4 md:space-y-6">
      <div className="grid grid-cols-1 gap-4 md:gap-6 px-4 md:px-6">
        <span className="text-[32px] md:text-[40px] font-semibold text-[#FCFCFC] leading-[48px]">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {launchpadListMockup.map((item, idx) => (
            <LaunchpadItem key={idx} item={item} />
          ))}
        </div>
        <div className="flex py-3 justify-center items-center gap-2 self-stretch">
          <button className="dropdown dropdown-bottom dropdown-end flex-shrink-0 mt-4">
            <div className="flex py-2 px-4 justify-center items-center gap-2 rounded-lg border-2 border-[#272B30] bg-[#1A1D1F]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C12.5523 2 13 2.44772 13 3V5C13 5.55228 12.5523 6 12 6C11.4477 6 11 5.55228 11 5V3C11 2.44772 11.4477 2 12 2Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 18C12.5523 18 13 18.4477 13 19V21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21V19C11 18.4477 11.4477 18 12 18Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.92903 4.92894C5.31955 4.53842 5.95272 4.53842 6.34324 4.92894L7.75746 6.34315C8.14798 6.73368 8.14798 7.36684 7.75746 7.75737C7.36693 8.14789 6.73377 8.14789 6.34324 7.75737L4.92903 6.34315C4.53851 5.95263 4.53851 5.31946 4.92903 4.92894Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.2428 16.2426C16.6333 15.8521 17.2664 15.8521 17.657 16.2426L19.0712 17.6568C19.4617 18.0474 19.4617 18.6805 19.0712 19.0711C18.6807 19.4616 18.0475 19.4616 17.657 19.0711L16.2428 17.6568C15.8522 17.2663 15.8522 16.6332 16.2428 16.2426Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2 12C2 11.4477 2.44772 11 3 11L5 11C5.55228 11 6 11.4477 6 12C6 12.5523 5.55228 13 5 13L3 13C2.44772 13 2 12.5523 2 12Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18 12C18 11.4477 18.4477 11 19 11L21 11C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13L19 13C18.4477 13 18 12.5523 18 12Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.92888 19.0711C4.53836 18.6805 4.53836 18.0474 4.92888 17.6568L6.34309 16.2426C6.73362 15.8521 7.36678 15.8521 7.75731 16.2426C8.14783 16.6332 8.14783 17.2663 7.75731 17.6568L6.34309 19.0711C5.95257 19.4616 5.3194 19.4616 4.92888 19.0711Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.2426 7.75737C15.8521 7.36685 15.8521 6.73368 16.2426 6.34316L17.6568 4.92894C18.0473 4.53842 18.6805 4.53842 19.071 4.92894C19.4616 5.31947 19.4616 5.95263 19.071 6.34316L17.6568 7.75737C17.2663 8.1479 16.6331 8.1479 16.2426 7.75737Z"
                  fill="white"
                />
              </svg>
              <span className="text-[13px] font-bold text-[#fcfcfc]">
                Load more
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
