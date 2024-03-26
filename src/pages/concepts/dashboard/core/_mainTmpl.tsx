import React, { useState } from "react";
import Screen from "@/common/Responsive";

import MainNavigation from "./nav-main";
import MobileNavigation from "./nav-mobile";

export default function LayoutDefault({
  children,
  pageView,
  setPageView,
  sidebarLeft,
}: any) {
  return (
    <>
      <div className="main-layout--wrapper min-h-screen pb-20 lg:pb-0 bg-base-200">
        <div
          className={`flex items-stretch w-full h-full transition-all  ${
            sidebarLeft ? "pl-0" : "lg:pl-72"
          }`}
        >
          <>
            <Screen from={"lg"}>
              <div
                className={`w-72 fixed top-0 bottom-0 transition-all ${
                  sidebarLeft ? "-left-72" : "left-0"
                }`}
              >
                {/* Sidebar */}
                <MainNavigation pageView={pageView} setPageView={setPageView} />
                {/* // Sidebar */}
              </div>
            </Screen>
          </>
          <Screen upto={"md"}>
            <MobileNavigation />
          </Screen>
          {/* Content Area */}
          <div className={`flex-1 flex min-h-screen`}>{children}</div>
          {/* //Content Area */}
        </div>
      </div>
    </>
  );
}
