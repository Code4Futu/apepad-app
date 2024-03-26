import React, { useEffect, useState } from "react";

// Modules
import Toolbar from "./toolbar";
import Stats from "./stats";
import Stats2 from "./stats2";
import Protocols from "./protocols";

const Main: React.FC = (props) => {
  const [infoTab, setInfoTab] = useState("info");

  return (
    <>
      <div className="fadein w-full mx-auto text-sm md:mt-6 space-y-4 md:space-y-6">

        <div className="grid grid-cols-1 gap-4 md:gap-6">
          <Toolbar />
        </div>

        <div className="grid grid-cols-1 gap-4 md:gap-6">
          <Stats />
        </div>

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
