import Logo from "@/components/core/logo/logo";
import WalletConnectBtn from "@/components/wallet-connect-btn/wallet-connect-btn";
import React from "react";
import Screen from "../../common/Responsive";

// ClassName
const headerClass =
  "sticky flex flex-col justify-start flex-shrink-0 top-0 left-0 right-0 w-full z-40 py-3 md:py-6 bg-[#1A1D1F] shadow-[inset_1px_0_0_0_#111315]";

function Header() {
  return (
    <>
      <div id={"header"} className={headerClass}>
        <div
          className={
            "container-lg !max-w-none flex justify-between items-center self-stretch !mx-0 md:!px-10"
          }
        >
          <Screen upto={"md"}>
            <Logo />
          </Screen>

          <Screen from={"lg"}>
            <label className="input border-none h-10 w-[360px] p-2 rounded-xl bg-[#272B30] flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-6 h-6 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type="text"
                className="grow bg-transparent focus-visible:outline-none"
                placeholder="Type token symbol, address"
              />
            </label>
          </Screen>
          <div
            className={"flex flex-row items-center justify-between space-x-2"}
          >
            {/* Create Button */}
            <div className="dropdown dropdown-bottom dropdown-end flex-shrink-0">
              <div className="flex items-center relative overflow-hidden rounded-box">
                <label
                  tabIndex={0}
                  className="btn btn-md px-3 btn-outline border-green-500 bg-green-500 hover:border-green-500 hover:bg-green-500 z-[1] relative"
                >
                  <i
                    className={`fa-solid fa-plus text-lg text-[#111315] mr-2`}
                  ></i>
                  <span className="text-[13px] text-[#111315] font-bold">
                    Create
                  </span>
                </label>
              </div>
            </div>
            <WalletConnectBtn />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
