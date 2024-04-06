import React, { useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

import Screen from "../../common/Responsive";
import MainNavigation from "../nav-main/nav-main";
import { useHover } from "@/hooks/useHover";

export default function LayoutDefault({ children }: any) {
  return (
    <div className="main-layout--wrapper min-h-screen pb-20 lg:pb-0 bg-base-200">
      <div
        className={`flex items-stretch w-full h-full transition-all md:pl-[75px] lg:pl-[340px]`}
      >
        {" "}
        <Screen from={"md"}>
          <div
            className={twMerge(
              `group w-[75px] hover:w-[340px] lg:w-[340px] fixed top-0 bottom-0 transition-all left-0 overflow-hidden z-[9999]`
            )}
          >
            <MainNavigation
              toggleDialog={() => {
                return;
              }}
            />
          </div>
        </Screen>
        <div className={`flex-1 flex min-h-screen`}>{children}</div>
      </div>
    </div>
  );
}
