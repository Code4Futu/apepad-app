import React, { useEffect, useState } from "react";

// Modules
import Stats2 from "./stats2";
import Stats from "./stats";
import Protocols from "./protocols";
import Toolbar from "./toolbar";

const Main: React.FC = () => {
  return (
    <>
      <div className="fadein w-full mx-auto text-sm md:mt-6 space-y-4 md:space-y-6 relative">
        <div className="grid grid-cols-1 gap-4 md:gap-6">
          <div className="flex bg-accent/10  px-4 py-3 rounded-md text-sm">
            <i className="fa-solid fa-circle-info mr-3 text-base text-accent"></i>
            <span>
              Wallet Activities Tracker is currently UNDER DEVELOPMENT. Check
              back later to witness the magic! 🌟🔮💰
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 md:gap-6">
          <Toolbar />
        </div>

        <header className="grid grid-cols-1 gap-4 md:gap-6">
          <Stats />
        </header>

        <div className="grid grid-cols-1 gap-4 md:gap-6">
          <Stats2 />
        </div>

        <div className="grid grid-cols-1 gap-4 md:gap-6 card">
          <Protocols />
        </div>
      </div>
    </>
  );
};

export default Main;
