import ClaimSuccessDialog from "@/components/modals/claimSuccess";
import { ChainId } from "@/config/type";
import {
  checkClaimSuccess,
  claimReward,
  updateConfigSwapReward,
} from "@/services/loot-token/claimReward";
import { getExplorerUrl } from "@/utils/constracts/call-contract";
import { formatNumber } from "@/utils/constracts/common";
import { formatDate } from "@/utils/helper/datetime";
import { helperToast } from "@/utils/helper/helper-toast";
import { Switch } from "@headlessui/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { toNumber } from "lodash";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useAccount, useChainId } from "wagmi";
interface Props {
  claimableRewards: {
    claimable?: string;
    total_claim?: string;
    unclaimed?: string;
  };

  tokenHolding: {
    duration?: string;
    start_time?: string;
    status?: string;
    total_loot?: string;
    total_xloot?: string;
  };
  activeClaim: {
    active_claim: boolean;
    minimum_balance_claim: string;
  };
  nextTimeRun?: number;
  setkeyClaimInfo: (newKey: number) => void;
  setIsAutoCompoud: (isAuto: boolean) => void;
  isAutoCompoud: boolean;
}
const RevshareClaim = ({
  tokenHolding,
  claimableRewards,
  activeClaim,
  setkeyClaimInfo,
  setIsAutoCompoud,
  nextTimeRun,
  isAutoCompoud,
}: Props) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingCompoud, setIsLoadingCompoud] = useState(false);

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [txUrl, setTxUrl] = useState("");
  const [amount, setAmount] = useState("");

  const toogleDialog = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  const router = useRouter();
  const { t } = router.query;

  const chainId = useChainId();
  const { address, connector, isConnected } = useAccount();

  const getAddress = t?.toString() || address || "";

  const [err, setErr] = useState("");
  function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  const handleClaim = async () => {
    if (chainId !== ChainId.MAINNET) return;

    try {
      setIsLoading(true);
      const signer = await connector?.getSigner();
      await claimReward(signer);

      while (true) {
        const resClaimStatus = await checkClaimSuccess(chainId, getAddress);
        const isCalaiming = resClaimStatus?.is_claimed;
        const txHash = resClaimStatus?.tx_hash;
        const amount = resClaimStatus?.amount;

        const txUrl = getExplorerUrl(chainId) + "tx/" + txHash;
        if (isCalaiming) {
          setTxUrl(txUrl);
          setAmount(amount);
          toogleDialog();
          break;
        }

        await delay(5000);
      }

      setIsLoading(false);
      setkeyClaimInfo(Date.now());
    } catch (error: any) {
      setErr("Claim fail! Please try again.");
      setIsVisible(true);
      setIsLoading(false);

      const timeoutId = setTimeout(() => {
        setIsVisible(false);
      }, 6000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  };

  const handleAutoCompoud = async () => {
    if (chainId !== ChainId.MAINNET) return;

    try {
      setIsLoadingCompoud(true);
      const signer = await connector?.getSigner();

      await updateConfigSwapReward(signer, !isAutoCompoud);
      setIsAutoCompoud(!isAutoCompoud);
      setIsLoadingCompoud(false);
    } catch (error: any) {
      setIsLoadingCompoud(false);

      setIsVisible(true);
      setErr("Config auto compound fail! Please try again.");
      const timeoutId = setTimeout(() => {
        setIsVisible(false);
      }, 6000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  };

  const total_claim = claimableRewards?.total_claim;
  const claimable = claimableRewards?.claimable;
  const unclaimed = claimableRewards?.unclaimed;

  const holdLess =
    Number(claimable) < Number(activeClaim?.minimum_balance_claim);

  const isCalculating = nextTimeRun !== null && !activeClaim.active_claim;

  return (
    <>
      {/* Claim */}
      <ClaimSuccessDialog
        txUrl={txUrl}
        totalClaimable={toNumber(amount).toFixed(4)}
        isDialogOpen={isDialogOpen}
        toogleDialog={toogleDialog}
      />

      <div className={`w-full`}>
        <div className="grid lg:grid-cols-12 gap-4 md:gap-6">
          <div className="lg:col-span-4 card">
            <div className="card--header">
              <h4 className="">
                <i className="fa-duotone fa-coins mr-3"></i>
                <span className="">Your Last Snapshot</span>
              </h4>
            </div>

            <div className="card--body">
              <div className="text-base border-b border-base-content/10 pb-4">
                <div className="flex flex-row items-center justify-between">
                  <span className="text-xs text-base-content/70 uppercase">
                    LOOT
                  </span>
                  <strong>
                    {" "}
                    {tokenHolding?.total_loot
                      ? formatNumber(Number(tokenHolding?.total_loot)) +
                        " $LOOT"
                      : "-"}{" "}
                  </strong>
                </div>

                <div className="flex flex-row items-center justify-between">
                  <span className="text-xs text-base-content/70 ">xLOOT</span>
                  <strong>
                    {" "}
                    {tokenHolding?.total_xloot
                      ? tokenHolding?.total_xloot + " $xLOOT"
                      : "-"}{" "}
                  </strong>
                </div>
              </div>

              <div className="space-y-2 mt-4">
                <div className="flex items-baseline justify-between">
                  <span className="flex-shrink-0">
                    <span className="text-xs text-base-content/70 uppercase">
                      Start
                    </span>
                  </span>
                  <span className="border-b border-dashed border-base-content border-opacity-10 w-full mx-2"></span>
                  <span className="whitespace-nowrap font-medium">
                    {tokenHolding?.start_time
                      ? formatDate(tokenHolding?.start_time) + " UTC"
                      : "-"}
                  </span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="flex-shrink-0">
                    <span className="text-xs text-base-content/70 uppercase">
                      Duration
                    </span>
                  </span>
                  <span className="border-b border-dashed border-base-content border-opacity-10 w-full mx-2"></span>
                  <span className="whitespace-nowrap font-medium">
                    {" "}
                    {tokenHolding?.duration ? tokenHolding?.duration : "1 Day"}
                  </span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="flex-shrink-0">
                    <span className="text-xs text-base-content/70 uppercase">
                      Status
                    </span>
                    {/* <span
                      className="ml-1 opacity-70 hover:text-primary hover:opacity-100 tooltip text-sm cursor-pointer"
                      data-tip="Lorem ipsum dolor sit amet"
                    >
                      <i className="fa-solid fa-circle-info"></i>
                    </span> */}
                  </span>
                  <span className="border-b border-dashed border-base-content border-opacity-10 w-full mx-2"></span>
                  {tokenHolding?.status ? (
                    <span className="badge !text-xs !px-5 badge-rounded bg-success text-success-content whitespace-nowrap font-medium">
                      Eligible
                    </span>
                  ) : (
                    <>
                      <span className="badge !text-xs !px-5 badge-rounded bg-error text-error-content whitespace-nowrap font-medium">
                        ineligible
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 card card-primary">
            <div className="card--header">
              <h4 className="">
                <i className="fa-duotone fa-sack-dollar mr-3"></i>
                <span className="">Claimable RevShare</span>
              </h4>
            </div>

            {err && isVisible ? (
              <div className="mt-4 -mb-2">
                <h6 className="text-sm rounded text-warning">
                  <i className="fa-solid fa-triangle-exclamation"></i>{" "}
                  <span className="">{err}</span>
                </h6>
              </div>
            ) : null}

            <div className="mt-4">
              <div className="grid grid-cols-3 gap-6 md:divide-x divide-base-content/10 text-base md:border-2 border-base-content/10 rounded-box ">
                <div className="flex flex-col items-stretch p-0 md:px-6 md:py-4">
                  <span className="text-xs text-base-content/70 uppercase">
                    Total Claimable
                  </span>
                  <strong className="text-primary">
                    {" "}
                    {claimable && toNumber(claimable)
                      ? toNumber(amount || claimable).toFixed(4) + " ETH"
                      : "-"}
                  </strong>
                </div>
                <div className="flex flex-col items-stretch p-0 md:px-6 md:py-4">
                  <span className="text-xs text-base-content/70 uppercase">
                    Forfeited
                  </span>
                  <strong>
                    {" "}
                    {unclaimed && toNumber(unclaimed)
                      ? toNumber(unclaimed).toFixed(4) + " ETH"
                      : "-"}
                  </strong>
                </div>
                <div className="flex flex-col items-stretch p-0 md:px-6 md:py-4">
                  <span className="text-xs text-base-content/70 uppercase">
                    Total
                  </span>
                  <strong className="text-base">
                    {total_claim && toNumber(total_claim)
                      ? toNumber(total_claim).toFixed(4) + " ETH"
                      : "-"}
                  </strong>
                </div>
              </div>

              <div className="mt-6 w-full">
                {!isConnected ? (
                  <ConnectButton.Custom>
                    {({
                      account,
                      chain,
                      openConnectModal,
                      authenticationStatus,
                      mounted,
                    }) => {
                      const ready =
                        mounted && authenticationStatus !== "loading";
                      const connected =
                        ready &&
                        account &&
                        chain &&
                        (!authenticationStatus ||
                          authenticationStatus === "authenticated");

                      if (!connected) {
                        return (
                          <button
                            type="button"
                            className="btn btn-block btn-primary"
                            onClick={openConnectModal}
                          >
                            <i className="fa-duotone fa-wallet mr-3 text-lg"></i>
                            <span className="">Connect wallet</span>
                          </button>
                        );
                      }
                    }}
                  </ConnectButton.Custom>
                ) : (
                  <div className="flex gap-3 md:gap-1 items-center flex-col md:flex-row">
                    <button
                      className="btn btn-block h-auto min-h-0 py-3 btn-primary shadow-md flex-1"
                      onClick={handleClaim}
                      disabled={
                        isLoading ||
                        !activeClaim.active_claim ||
                        holdLess ||
                        isCalculating ||
                        isAutoCompoud
                      }
                    >
                      {isLoading ? (
                        <>
                          <i className=" text-base fa-regular fa-spin fa-circle-notch mr-2" />
                          Claiming
                        </>
                      ) : isCalculating ? (
                        "Calculating..."
                      ) : holdLess ? (
                        `Min Claim: ${activeClaim?.minimum_balance_claim} ETH`
                      ) : (
                        "Claim"
                      )}
                    </button>

                    <div className="flex items-center justify-end flex-1">
                      <span className=" uppercase text-xs">
                        <span className="font-medium ">
                          {isLoadingCompoud
                            ? isAutoCompoud
                              ? "Turning off..."
                              : "Turning on..."
                            : "Auto Compound"}
                        </span>{" "}
                      </span>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://docs.lootbot.xyz/lootbot/technical-documentation/revenue-sharing/auto-compounding"
                      >
                        <i className="fa-duotone fa-block-question ml-1 mr-3 text-sm"></i>
                      </a>
                      <Switch.Group as="div" className="flex items-center">
                        <Switch
                          disabled={isLoadingCompoud}
                          checked={isAutoCompoud}
                          onChange={handleAutoCompoud}
                          className={`
                          ${isAutoCompoud ? "bg-primary" : "bg-base-content"}
                          "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
                        `}
                        >
                          <span
                            aria-hidden="true"
                            className={`
                            ${isAutoCompoud ? "translate-x-5" : "translate-x-0"}
                            "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                          `}
                          />
                        </Switch>
                      </Switch.Group>
                    </div>
                  </div>
                )}
              </div>

              {/* <div className="text-xs opacity-70 mt-2 text-center">
                You've claimed 80.0% of your total allowance
              </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* //Claim */}
    </>
  );
};
export default RevshareClaim;
