import { Disclosure } from "@headlessui/react";
import React, { Fragment } from "react";
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
            <select className="select px-4 w-full max-w-[120px] max-h-10">
              <option disabled selected>
                All Status
              </option>
              <option>Live</option>
              <option>Ended</option>
            </select>
            <select className="select px-4 w-full max-w-[105px] max-h-10">
              <option disabled selected>
                Sort By
              </option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
            <select className="select px-4 w-full max-w-[95px] max-h-10">
              <option disabled selected>
                Type
              </option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
            <ViewFilter className="md:hidden grid grid-cols-2 gap-2" />
          </div>
          <ViewFilter className="hidden md:grid grid-cols-2 gap-2" />
        </div>
      </div>
    </>
  );
}

export default Filter;
