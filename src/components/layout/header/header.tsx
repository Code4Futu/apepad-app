import Logo from "@/components/core/logo/logo";
import WalletConnectBtn from "@/components/wallet-connect-btn/wallet-connect-btn";
import React, { useState } from "react";
import Screen from "../../common/Responsive";
import MainNavigation from "../nav-main/nav-main";
import { SearchIcon } from "@/components/icons";

// ClassName
const headerClass =
  "sticky flex flex-col justify-start flex-shrink-0 top-0 left-0 right-0 w-full z-40 py-6 px-6 md:px-10 bg-[#1A1D1F] shadow-[inset_1px_0_0_0_#111315]";

function Header() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const toogleDialog = () => {
    setIsDialogOpen(!isDialogOpen);
  };
  return (
    <>
      <dialog
        id="mobileMenu_modal"
        className={`${
          isDialogOpen ? "fixed z-20" : "hidden z-0"
        } modal modal-top mt-[164px]`}
        open={isDialogOpen}
        onClose={toogleDialog}
      >
        <form method="dialog" className="modal-box text-sm relative">
          <div className="w-full px-6">
            <label className="input border-none h-12 w-full p-2 rounded-xl bg-[#272B30] flex items-center gap-2">
              <SearchIcon />
              <input
                type="text"
                className="grow bg-transparent focus-visible:outline-none"
                placeholder="Type token symbol, address"
              />
            </label>
          </div>
          <div className="modal-box--body !py-2 !px-2">
            <MainNavigation />
          </div>
        </form>
      </dialog>

      <div id={"header"} className={headerClass}>
        <div
          className={
            "container-lg !max-w-none flex justify-between items-center self-stretch !px-0"
          }
        >
          <Screen upto={"md"}>
            <div
              className="flex p-3 items-start gap-[10px]"
              onClick={toogleDialog}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className={isDialogOpen ? "hidden" : "block"}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 16C4 15.4477 4.44772 15 5 15H19C19.5523 15 20 15.4477 20 16C20 16.5523 19.5523 17 19 17H5C4.44772 17 4 16.5523 4 16Z"
                  fill="#6F767E"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 8C4 7.44772 4.44772 7 5 7H19C19.5523 7 20 7.44772 20 8C20 8.55228 19.5523 9 19 9H5C4.44772 9 4 8.55228 4 8Z"
                  fill="#6F767E"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className={!isDialogOpen ? "hidden" : "block"}
              >
                <path
                  d="M6.70708 5.29289C6.31655 4.90237 5.68339 4.90237 5.29286 5.29289C4.90234 5.68342 4.90234 6.31658 5.29286 6.70711L10.5857 12L5.29277 17.2929C4.90225 17.6834 4.90225 18.3166 5.29277 18.7071C5.6833 19.0976 6.31646 19.0976 6.70698 18.7071L11.9999 13.4142L17.2929 18.7071C17.6834 19.0976 18.3166 19.0976 18.7071 18.7071C19.0976 18.3166 19.0976 17.6834 18.7071 17.2929L13.4141 12L18.707 6.70711C19.0975 6.31658 19.0975 5.68342 18.707 5.29289C18.3165 4.90237 17.6833 4.90237 17.2928 5.29289L11.9999 10.5857L6.70708 5.29289Z"
                  fill="#6F767E"
                />
              </svg>
            </div>
          </Screen>

          <Screen from={"lg"}>
            <label className="input border-none h-10 w-full md:w-[360px] xl:w-[411px] p-2 rounded-xl bg-[#272B30] flex items-center gap-2">
              <SearchIcon />
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
              <div className="flex items-center relative overflow-hidden rounded-xl">
                <label
                  tabIndex={0}
                  className="btn btn-md px-3 btn-outline border-[#90E788] bg-[#90E788] hover:border-[#90E788] hover:bg-[#90E788] z-[1] relative"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5Z"
                      fill="#111315"
                    />
                  </svg>
                  <span className="text-[13px] text-[#111315] leading-[24px] font-bold">
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
