import React, { useState } from "react";

import Header from "./core/header";
import Footer from "./core/footer";
import Topbar from "./core/topbar";

import Revshare from "./revshare";
import Tracker from "./tracker";
import Burner from "./burner";
import Stake from "./stake";

import BurnReceiptDialog from "../components/modals/burnReceipt";
import StakeReceiptDialog from "../components/modals/stakeReceipt";
import UnstakeReceiptDialog from "../components/modals/unstakeReceipt";
import ClaimstakeReceiptDialog from "../components/modals/claimstakeReceipt";

export default function Main({
  pageView,
  setPageView,
  sidebarLeft,
  setSidebarLeft,
}: any) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col flex-1 min-h-full items-stretch">
        <Topbar />

        {/* Header */}
        <Header
          pageView={pageView}
          sidebarLeft={sidebarLeft}
          setSidebarLeft={setSidebarLeft}
        />
        {/* //Header */}

        {/* Main */}
        <main className="lg:h-full lg:flex-1">
          <div className="flex flex-col justify-center items-center w-full">
            {pageView === "claim" && <Revshare />}
            {pageView === "tracker" && <Tracker />}
            {pageView === "burner" && <Burner />}
            {pageView === "stake" && <Stake />}
          </div>
        </main>
        {/* //Main */}

        {/* Footer */}
        <Footer />
        {/* //Footer */}
      </div>

      <BurnReceiptDialog />
      <StakeReceiptDialog />
      <UnstakeReceiptDialog />
      <ClaimstakeReceiptDialog />
    </>
  );
}
