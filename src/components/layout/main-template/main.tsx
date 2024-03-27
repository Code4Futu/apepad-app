import React, { useState } from "react";
import Screen from "../../common/Responsive";

import MainNavigation from "../nav-main/nav-main";
import { MobileNavigation } from "../nav-mobile/MobileNavigation";

export default function LayoutDefault({ children }: any) {
  return (
    <div className="main-layout--wrapper min-h-screen pb-20 lg:pb-0 bg-base-200">
      <div
        className={`flex items-stretch w-full h-full transition-all lg:pl-72`}
      >
        {" "}
        <Screen from={"lg"}>
          <div className={`w-72 fixed top-0 bottom-0 transition-all left-0`}>
            {/* Sidebar */}
            <MainNavigation />
            {/* // Sidebar */}
          </div>
        </Screen>
        {/* Mobile Bottom Navigation */}
        <Screen upto={"md"}>
          <MobileNavigation />
        </Screen>
        {/* // Mobile Bottom Navigation */}
        {/* Content Area */}
        <div className={`flex-1 flex min-h-screen`}>{children}</div>
        {/* //Content Area */}
      </div>
    </div>
  );
}
