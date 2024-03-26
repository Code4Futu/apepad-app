import React, { useEffect, useState } from "react";
import Link from "next/link";
import Footer from "@/components/layout/footer/footer";
import Header from "@/components/layout/header/header";
import Main from "./tracker";
import LayoutDefault from "@/components/layout/main-template/main";
import Topbar from "@/components/top-bar/topbar";

export default function TrackerMain() {
  const [sidebarLeft, setSidebarLeft] = useState<boolean>(false);

  return (
    <LayoutDefault sidebarLeft={sidebarLeft} setSidebarLeft={setSidebarLeft}>
      <div className="flex flex-col flex-1 min-h-full items-stretch">
        <Topbar />

        {/* Header */}
        <Header />
        {/* //Header */}

        {/* Main */}
        <div className="lg:h-full lg:flex-1">
          <div className="flex flex-col justify-center items-center w-full">
            <div className="container-lg">
              <Main />
            </div>
          </div>
        </div>
        {/* //Main */}

        {/* Footer */}
        <Footer />
        {/* //Footer */}
      </div>
    </LayoutDefault>
  );
}
