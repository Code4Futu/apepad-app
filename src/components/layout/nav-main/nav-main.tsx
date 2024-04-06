import React, { useState } from "react";
import Logo from "@/components/core/logo/logo";

import { useLocation } from "react-use";
import Link from "next/link";

const navItem = [
  {
    name: "Home",
    icon: "fa-solid fa-home",
    link: "/",
  },
  {
    name: "Launchpad",
    icon: "fa-solid fa-rocket",
    subMenu: [
      {
        name: "Create Presale",
        link: "/launchpads/presale",
        disable: true,
      },
      {
        name: "Create Fairlaunch",
        link: "/launchpads/create-fairlaunch",
      },
      {
        name: "Create Subcription",
        link: "/launchpads/subcription",
        disable: true,
      },
    ],
  },
  {
    name: "Lock",
    icon: "fa-solid fa-lock",
    subMenu: [
      {
        name: "Create",
        link: "/create-lock",
      },
      {
        name: "Token",
        link: "/token-lock",
        disable: true,
      },
      {
        name: "Liquidity",
        link: "/liquidity-lock",
        disable: true,
      },
    ],
  },
  {
    name: "Airdrop",
    icon: "fa-solid fa-gift",
    subMenu: [
      {
        name: "Create Airdrop",
        link: "/create-airdrop",
      },
      {
        name: "Airdrop List",
        link: "/airdrop-list",
        disable: true,
      },
    ],
  },
  {
    name: "Token",
    icon: "fa-solid fa-database",
    subMenu: [
      {
        name: "Create Token",
        link: "/create-token",
      },
    ],
  },
  {
    name: "Tool",
    icon: "fa-solid fa-wrench",
    link: "/tool",
    disable: true,
  },
  {
    name: "Bridge",
    icon: "fa-solid fa-shuffle",
    link: "/bridge",
    disable: true,
  },
];

const mainNavClass = "flex flex-col w-full h-full md:bg-[#1A1D1F]";
const navItemClass =
  "flex items-center pr-4 pl-2 py-3 text-base font-bold w-full rounded-box transition flex-1";
const navItemNormalClass =
  "text-[#6F767E] hover:bg-[#272B30]/20 hover:text-green-500";
const navItemActiveClass =
  "bg-[#272B30] shadow-[inset_0_-2px_1px_0_rgba(0,0,0,0.4),inset_0_1px_1px_0_rgba(255,255,255,0.11)] text-green-500 hover:bg-[#272B30]/20 hover:text-green-500";
const commingSoonClass =
  "inline-flex flex-col items-center justify-center rounded-md py-[3px] px-1 bg-[rgba(181,228,202,0.20)] text-[10px] text-[#B5E4CA] leading-[12px] font-semibold whitespace-nowrap md:hidden group-hover:block lg:block transition-all";

// Main Navigation
function MainNavigation({ toggleDialog }: { toggleDialog?: any }) {
  const pageView = useLocation();

  return (
    <nav className={mainNavClass}>
      <div className="ml-4 group-hover:ml-6 lg:ml-6 my-6 hidden md:block">
        <Logo />
      </div>

      {/* Main Nav */}
      <ul className="menu flex flex-col gap-2 flex-1 p-4 max-md:shadow-[0_40px_64px_-12px_rgba(0,0,0,0.08),0_0_14px_-4px_rgba(0, 0, 0, 0.05),0_32px_48px_-8px_rgba(0,0,0,0.10)] max-md:!bg-[rgba(17,19,21,0.90)]">
        {navItem.map((item, idx) => (
          <div key={idx}>
            {!item.subMenu && (
              <li>
                <Link
                  className={`${navItemClass} ${
                    pageView.pathname === item.link
                      ? navItemActiveClass
                      : navItemNormalClass
                  } ${item.disable && "pointer-events-none"}`}
                  key={idx}
                  href={item.link}
                  onClick={() => toggleDialog()}
                >
                  <span className="inline-flex items-center justify-center w-6 h-6 mr-3">
                    <i className={`${item.icon} text-lg`}></i>
                  </span>
                  <span className="whitespace-nowrap mr-4 md:hidden group-hover:block lg:block transition-all">
                    {item.name}
                  </span>
                  {item.disable && (
                    <span className={commingSoonClass}>Soon</span>
                  )}
                </Link>
              </li>
            )}
            {item.subMenu && (
              <li>
                <details
                  open={
                    item.subMenu.find(
                      (element) => element.link === pageView.pathname
                    ) !== undefined
                  }
                >
                  <summary
                    className={`grid items-center pr-4 pl-2 py-3 text-base font-bold w-full rounded-box transition ${navItemNormalClass}`}
                  >
                    <div>
                      <span className="inline-flex items-center justify-center w-6 h-6 mr-5">
                        <i className={`${item.icon} text-lg`}></i>
                      </span>
                      <span className="whitespace-nowrap mr-4 md:hidden group-hover:contents lg:contents transition-all">
                        {item.name}
                      </span>
                      {item.disable && (
                        <span className={commingSoonClass}>Soon</span>
                      )}
                    </div>
                  </summary>
                  <ul className="menu-dropdown md:hidden group-hover:block lg:block transition-all">
                    {item.subMenu.map((item, idx) => (
                      <li key={idx}>
                        {!item.disable ? (
                          <Link
                            className={`${navItemClass} ${
                              pageView.pathname === item.link
                                ? navItemActiveClass
                                : navItemNormalClass
                            }`}
                            key={idx}
                            href={item.link}
                            onClick={() => toggleDialog()}
                          >
                            <span className="whitespace-nowrap mr-4">
                              {item.name}
                            </span>
                          </Link>
                        ) : (
                          <div
                            key={idx}
                            className={`pointer-events-none	${navItemClass} ${
                              pageView.pathname === item.link
                                ? navItemActiveClass
                                : navItemNormalClass
                            }`}
                          >
                            <span className="whitespace-nowrap">
                              {item.name}
                            </span>
                            <span className={commingSoonClass}>Soon</span>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
            )}
          </div>
        ))}
      </ul>
    </nav>
  );
}

export default MainNavigation;
