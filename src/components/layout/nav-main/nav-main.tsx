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
        link: "/presale",
      },
      {
        name: "Create Fairlaunch",
        link: "/launchpads/create-fairlaunch",
      },
      {
        name: "Create Subcription",
        link: "/subcription",
      },
    ],
  },
  {
    name: "Lock",
    icon: "fa-solid fa-lock",
    link: "/lock",
    subMenu: [
      {
        name: "Create",
        link: "/create-lock",
      },
      {
        name: "Token",
        link: "/token-lock",
      },
      {
        name: "Liquidity",
        link: "/liquidity-lock",
      },
    ],
  },
  {
    name: "Airdrop",
    icon: "fa-solid fa-gift",
    link: "/air-drop",
    subMenu: [
      {
        name: "Create Airdrop",
        link: "/create-airdrop",
      },
      {
        name: "Airdrop List",
        link: "/airdrop-list",
      },
    ],
  },
  {
    name: "Token",
    icon: "fa-solid fa-database",
    link: "/token",
  },
  {
    name: "Tool",
    icon: "fa-solid fa-wrench",
    link: "/tool",
  },
  {
    name: "Bridge",
    icon: "fa-solid fa-shuffle",
    link: "/bridge",
    isSoon: false,
  },
];

// Main Navigation
function MainNavigation() {
  const mainNavClass = "flex flex-col w-full h-full lg:bg-[#1A1D1F]";

  const navItemClass =
    "flex items-center pr-4 pl-2 py-3 text-base font-bold w-full rounded-box transition flex-1";
  const navItemNormalClass =
    "text-[#6F767E] hover:bg-[#272B30]/20 hover:text-green-500";
  const navItemActiveClass =
    "bg-[#272B30] shadow-[inset_0_-2px_1px_0_rgba(0,0,0,0.4),inset_0_1px_1px_0_rgba(255,255,255,0.11)] text-green-500 hover:bg-[#272B30]/20 hover:text-green-500";

  const pageView = useLocation();
  return (
    <nav className={mainNavClass}>
      <div className="mt-6 ml-6 mb-6">
        <Logo />
      </div>

      {/* Main Nav */}
      <ul className="menu flex flex-col gap-2 flex-1 p-4">
        {navItem.map((item, idx) => (
          <div key={idx}>
            {!item.subMenu && (
              <li>
                <Link
                  className={`${navItemClass} ${
                    pageView.pathname === item.link
                      ? navItemActiveClass
                      : navItemNormalClass
                  }`}
                  key={idx}
                  href={item.link}
                >
                  <span className="inline-flex items-center justify-center w-6 h-6 mr-3">
                    <i className={`${item.icon} text-lg`}></i>
                  </span>
                  <span className="whitespace-nowrap mr-4">{item.name}</span>
                  {item.isSoon && (
                    <span className="badge badge-soon">Soon</span>
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
                      <span className="whitespace-nowrap mr-4">
                        {item.name}
                      </span>
                      {item.isSoon && (
                        <span className="badge badge-soon">Soon</span>
                      )}
                    </div>
                  </summary>
                  <ul className="menu-dropdown">
                    {item.subMenu.map((item, idx) => (
                      <li key={idx}>
                        <Link
                          className={`${navItemClass} ${
                            pageView.pathname === item.link
                              ? navItemActiveClass
                              : navItemNormalClass
                          }`}
                          key={idx}
                          href={item.link}
                        >
                          <span className="whitespace-nowrap mr-4">
                            {item.name}
                          </span>
                        </Link>
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
