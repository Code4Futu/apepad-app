import React, { useState } from "react";
import LayoutDefault from "./core/_mainTmpl";
import Main from "./main";

export default function Portal() {
  const [pageView, setPageView] = useState<string>("claim");
  const [sidebarLeft, setSidebarLeft] = useState<boolean>(false); // [true, false]
  return (
    <>
      <LayoutDefault
        pageView={pageView}
        setPageView={setPageView}
        sidebarLeft={sidebarLeft}
        setSidebarLeft={setSidebarLeft}
      >
        <Main
          pageView={pageView}
          setPageView={setPageView}
          sidebarLeft={sidebarLeft}
          setSidebarLeft={setSidebarLeft}
        />
      </LayoutDefault>
    </>
  );
}
