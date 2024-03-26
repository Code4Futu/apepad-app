import React, { useState } from "react";
import Logo from "../../components/core/logo";

import EpochTimer from "../modules/epoch-timer";

const navItem = [
  {
    name: "RevShare",
    icon: "fa-duotone fa-hand-holding-dollar",
    link: "#claim",
    page: "claim",
  },
  {
    name: "Stake",
    icon: "fa-duotone fa-sack-dollar",
    link: "#stake",
    page: "stake",
  },
  {
    name: "Burn",
    icon: "fa-duotone fa-fire",
    link: "#burner",
    page: "burner",
  },
  {
    name: "Tracker",
    icon: "fa-duotone fa-chart-network",
    link: "#tracker",
    page: "tracker",
  },
];

// ClassName
const mainNavClass = "flex flex-col w-full h-full lg:bg-base-100";

const navItemClass =
  "flex items-center pr-4 pl-2 py-3 text-base font-bold w-full rounded-box transition";
const navItemNormalClass =
  "text-base-content/70 hover:text-base-content/100 hover:bg-base-200";
const navItemActiveClass =
  "bg-primary/10 text-primary hover:bg-primary/20 hover:text-primary";

const subNavItemClass =
  "text-base-content/70 hover:text-base-content/100 text-xs flex items-center py-2";

// Main Navigation
function MainNavigation({ pageView, setPageView }: any) {
  return (
    <nav className={`${mainNavClass}`}>
      <div className="mt-6 ml-6 mb-6">
        <Logo />
      </div>

      {/* Main Nav */}
      <div className="flex flex-col gap-2 flex-1 p-4">
        {navItem.map((item, idx) => (
          <a
            className={`${navItemClass} ${
              pageView === item.page ? navItemActiveClass : navItemNormalClass
            }`}
            onClick={() => setPageView(item.page)}
            href={item.link}
            key={idx}
          >
            <span className="inline-flex items-center justify-center w-8 mr-3">
              <i className={`${item.icon} text-lg`}></i>
            </span>
            <span className="whitespace-nowrap">{item.name}</span>
          </a>
        ))}
      </div>
      {/* //Main Nav */}

      <div className="flex flex-col m-4 card card-outline">
        <EpochTimer />
      </div>
    </nav>
  );
}

export default MainNavigation;
