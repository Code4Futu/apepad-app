import React, { useState } from "react";
import Screen from "../../common/Responsive";

import MainNavigation from "../nav-main/nav-main";

export default function LayoutDefault({ children }: any) {
  return (
    <div className="main-layout--wrapper min-h-screen pb-20 lg:pb-0 bg-base-200">
      <div
        className={`flex items-stretch w-full h-full transition-all lg:pl-[340px]`}
      >
        {" "}
        <Screen from={"lg"}>
          <div
            className={`w-[340px] fixed top-0 bottom-0 transition-all left-0`}
          >
            {/* Sidebar */}
            <MainNavigation />
            {/* // Sidebar */}
          </div>
        </Screen>
        {/* Content Area */}
        <div className={`flex-1 flex min-h-screen`}>{children}</div>
        {/* //Content Area */}
      </div>
    </div>
  );
}
