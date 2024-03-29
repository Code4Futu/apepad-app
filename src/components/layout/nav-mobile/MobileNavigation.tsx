import React, { useState } from "react";
import MainNavigation from "../nav-main/nav-main";
import { useLocation } from "react-use";
import Link from "next/link";

export const navItem = [
  {
    name: "Home",
    icon: "fa-solid fa-home",
    link: "/",
  },
  {
    name: "Lock",
    icon: "fa-solid fa-lock",
    link: "/lock",
  },
  {
    name: "Airdrop",
    icon: "fa-solid fa-gift",
    link: "/air-drop",
  },
];

// Mobile Bottom Navigation
export function MobileNavigation() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const { pathname } = useLocation();

  const itemClass = (link: string) =>
    `nav-mobile-item cursor-pointer ${
      pathname === link ? "text-green-500" : ""
    }`;

  const itemClassActive = "";

  const toogleDialog = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  return (
    <>
      {/* Mobile Menu Modal*/}
      <dialog
        id="mobileMenu_modal"
        className={`${
          isDialogOpen ? "z-20" : "z-0"
        } modal modal-bottom md:modal-middle`}
        open={isDialogOpen}
        onClose={toogleDialog}
      >
        <form
          method="dialog"
          className="modal-box text-sm relative md:max-w-sm"
        >
          <button
            className="btn btn-sm btn-circle modal-box--close !top-[1.75rem]"
            onClick={toogleDialog}
          >
            ✕
          </button>

          <div className="modal-box--body !py-2 !px-2">
            <MainNavigation />
          </div>
        </form>
      </dialog>
      {/* //Mobile Menu Modal */}
      <div className="nav-mobile z-0">
        <div className="flex w-full justify-between items-center px-2 max-w-3xl mx-auto">
          {navItem.map((item, idx) => (
            <Link key={idx} className={itemClass(item.link)} href={item.link}>
              <i className={`${item.icon} text-xl`}></i>
              <span className="text-xs leading-none mt-2">{item.name}</span>
            </Link>
          ))}

          <button
            onClick={toogleDialog}
            className="nav-mobile-item cursor-pointer"
          >
            <i className={`text-xl fa-duotone fa-ellipsis`}></i>
            <span className="text-xs leading-none mt-2">More</span>
          </button>
        </div>
      </div>
    </>
  );
}
