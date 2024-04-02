import FilterButton from "@/components/buttons/FilterButton";
import { SearchIcon } from "@/components/icons";
import { STATUS } from "@/models/status";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

interface FilterProps {
  infoTab: string;
  setInfoTab: (tab: string) => void;
  view: string;
  setView: (view: string) => void;
}

const buttonStyle =
  "btn btn-md px-3 btn-outline border-[#1A1D1F] bg-[#1A1D1F] text-[#6F767E] hover:border-[#272B30] hover:bg-[#272B30] hover:text-[#FCFCFC] z-[1] relative transition-all";
const buttonViewStyle =
  "flex p-2 items-center justify-center rounded-lg shadow-[inset_0_-1px_-1px_0_rgba(0,0,0,0.04),inset_0_2px_0_0_rbga(255,255,255,0.05)] hover:bg-[#111315] w-10 h-10 transition-all";

function Filter({ infoTab, setInfoTab, view, setView }: FilterProps) {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  const toogleDialog = () => setIsDialogOpen(!isDialogOpen);

  const ViewFilter = ({ className }: { className: string }) => (
    <div className={className}>
      <div
        className={twMerge(
          buttonViewStyle,
          view === "list" && "text-white bg-[#111315]"
        )}
        onClick={() => setView("list")}
      >
        <i className="fa-solid fa-bars"></i>
      </div>
      <div
        className={twMerge(
          buttonViewStyle,
          view === "grid" && "text-white bg-[#111315]"
        )}
        onClick={() => setView("grid")}
      >
        <i className="fa-solid fa-grid"></i>
      </div>
    </div>
  );

  return (
    <>
      <div className="relative flex flex-col gap-8 w-full">
        <div className="!flex-row !gap-2 !justify-start">
          <div className="dropdown dropdown-bottom dropdown-end flex-shrink-0">
            <div className="flex items-center relative overflow-hidden rounded-box">
              <label
                className={twMerge(
                  buttonStyle,
                  infoTab === "all" &&
                    "border-[#272B30] bg-[#272B30] text-[#FCFCFC]"
                )}
                onClick={() => setInfoTab("all")}
              >
                <span className="text-[13px] font-bold">All</span>
              </label>
            </div>
          </div>
          <div className="dropdown dropdown-bottom dropdown-end flex-shrink-0">
            <div className="flex items-center relative overflow-hidden rounded-box">
              <label
                className={twMerge(
                  buttonStyle,
                  infoTab === "contribution" &&
                    "border-[#272B30] bg-[#272B30] text-[#FCFCFC]"
                )}
                onClick={() => setInfoTab("contribution")}
              >
                <span className="text-[13px] font-bold">My Contribution</span>
              </label>
            </div>
          </div>
        </div>

        <div className="flex items-start self-stretch md:p-3 flex-col gap-6 xl:flex-row xl:justify-between xl:items-center">
          <div className="flex items-center gap-4 xl:gap-6 max-md:flex-wrap self-stretch">
            <label className="input border-none h-10 w-full max-w-full md:w-[360px] xl:w-[411px] md:w-full md:w-[360px] xl:w-[411px] p-2 rounded-xl bg-[#272B30] flex items-center gap-2">
              <SearchIcon />
              <input
                type="text"
                className="grow bg-transparent focus-visible:outline-none"
                placeholder="Type token symbol, address"
              />
            </label>
            <select className="select px-4 w-full max-w-[120px] max-h-10 hidden md:flex">
              <option disabled selected>
                All Status
              </option>
              <option>Live</option>
              <option>Ended</option>
            </select>
            <select className="select px-4 w-full max-w-[105px] max-h-10 hidden md:flex">
              <option disabled selected>
                Sort By
              </option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
            <select className="select px-4 w-full max-w-[95px] max-h-10 hidden md:flex">
              <option disabled selected>
                Type
              </option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
            <FilterButton toggle={toogleDialog} />
            <ViewFilter className="md:hidden grid grid-cols-2 gap-2" />
          </div>
          <ViewFilter className="hidden md:grid grid-cols-2 gap-2" />
        </div>
      </div>
      <dialog
        id="mobileMenu_modal"
        className={`${
          isDialogOpen ? "fixed z-20" : "hidden z-0"
        } modal modal-bottom md:modal-middle`}
        open={isDialogOpen}
        onClose={toogleDialog}
      >
        <form
          method="dialog"
          className="modal-box text-sm relative md:max-w-sm"
        >
          <div className="modal-box--header">
            <span className="font-medium">All Filters</span>
          </div>

          <button
            className="btn btn-sm btn-circle modal-box--close"
            onClick={toogleDialog}
          >
            ✕
          </button>

          <div className="modal-box--body !flex !flex-col !items-start !py-10 !px-2">
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div className="collapse-title text-xl font-medium">
                All Status
              </div>
              <div className="collapse-content">
                <p>{STATUS.LIVE}</p>
                <p>{STATUS.UPCOMING}</p>
                <p>{STATUS.ENDED}</p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">Sort By</div>
              <div className="collapse-content">
                <p>Lorem ipsum dolor s</p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">Type</div>
              <div className="collapse-content">
                <p>Lorem ipsum dolor s</p>
              </div>
            </div>
          </div>
        </form>
      </dialog>
    </>
  );
}

export default Filter;
