import React, { useEffect, useState } from "react";

import Main from "./main";

export default function Claim() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const onScroll = (e: any) => {
      setScrolling(e.target.documentElement.scrollTop > 0);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Main */}
      <div className="container-lg">
        <Main />
      </div>
      {/* //Main */}
    </>
  );
}
