import React from "react";
import Screen from "@/common/Responsive";

import Logo from "../../components/core/logo";
import WalletConnectBtn from "../../components/core/wallet-connect-btn";
import BalanceChecker from "../../components/core/balance-checker";

// ClassName
const headerClass =
  "sticky flex flex-col justify-start flex-shrink-0 top-0 left-0 right-0 w-full z-40 pt-3 pb-3 mb-6 bg-base-200/90 backdrop-blur border-b border-base-content/10";
const pageNavClass = "flex flex-col justify-end z-40 mt-3 -mb-3 bg-base-300/90";
const navItemClass =
  "flex flex-col justify-center items-center font-medium transition group/page-nav";
const navItemActiveClass = "grad-text";
const navItemNormalClass = "text-base-content/70 hover:text-base-content";

function Header({sidebarLeft, setSidebarLeft }: any) {
  return (
    <>
      <header id={"header"} className={headerClass}>
        <div className={"container-lg flex justify-between items-center"}>
          <Screen upto={"md"}>
            <Logo />
          </Screen>

          <Screen from={"lg"}>
            <button
              className="btn btn-md btn-ghost"
              onClick={() => {
                setSidebarLeft(!sidebarLeft);
              }}
            >
              <i className="fa-regular fa-bars"></i>
            </button>
          </Screen>

          <div
            className={"flex flex-row items-center justify-between space-x-2"}
          >
            <BalanceChecker />
            <WalletConnectBtn />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
