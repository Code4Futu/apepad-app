import ClaimSuccessDialog from "@/components/modals/claimSuccess";
import InfoSuccessDialog from "@/components/modals/infoSuccess";
import { getLootBalance } from "@/services/index";
import {
  getTotalLootStaked,
  getUserStaking,
  unstake,
  UserStaking,
} from "@/services/staking/staking";
import { getExplorerUrl } from "@/utils/constracts/call-contract";
import { formatDate } from "@/utils/helper/datetime";
import { helperToast } from "@/utils/helper/helper-toast";
import {
  convertToInternationalCurrencySystem,
  currencyFormatter,
} from "@/utils/helper/number";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { ethers } from "ethers";
import { toNumber } from "lodash";
import React, { useCallback, useEffect, useState } from "react";
import useSWR from "swr";
import { useAccount, useChainId, useSigner } from "wagmi";
import { actionMapping } from "./history";
import { StakingEvent } from "./main";
import { useStore } from "@/store";

const unstakeAmounts = [
  { label: "25%", value: 25 },
  { label: "50%", value: 50 },
  { label: "75%", value: 75 },
  { label: "Max", value: 100 },
];

const UnstakeForm = ({
  setEvents,
}: {
  setEvents: React.Dispatch<React.SetStateAction<StakingEvent[]>>;
}) => {
  const { data: signer } = useSigner();
  const { address: account, isConnected } = useAccount();
  const chainId = useChainId();

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [unstakeAmount, setUnStakeAmount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(false);
  const [currentAmount, setCurrentAmount] = useState({ label: "", value: 0 });
  const [txReceipt, setTxReceipt] = useState<{
    txHash: string;
    user: string;
    amount: number;
    time: number;
  }>({
    txHash: "",
    user: "",
    amount: 0,
    time: 0,
  });

  const { data: userStats } = useSWR<{
    totalLootStaked: number;
    userStaking: UserStaking;
  }>(
    [txReceipt.txHash, chainId, account, "unstake"],
    async () => {
      const [totalLootStaked, userStaking] = await Promise.all([
        getTotalLootStaked(chainId!),
        getUserStaking(chainId, account!),
      ]);

      return { totalLootStaked, userStaking };
    },
    {
      revalidateOnMount: true,
    }
  );

  const toogleDialog = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  const unstakeLoot = useCallback(async () => {
    if (!chainId || !signer) return helperToast.error("Connect wallet first");
    if (!unstakeAmount || isNaN(unstakeAmount))
      return helperToast.error("Invalid stake amount");

    const amount = ethers.utils.parseUnits(unstakeAmount.toString(), 18);
    try {
      setIsLoading(true);
      const txReceipt = await unstake(chainId, signer, amount);
      setEvents((pre) => [
        {
          txHash: txReceipt.txHash,
          action: "UnStakingLoot",
          amount: txReceipt.amount,
          time: txReceipt.time,
        },
        ...pre,
      ]);
      useStore.setState({ txHash: txReceipt.txHash });
      setTxReceipt(txReceipt);
      toogleDialog();
    } catch (error) {
      console.log(error);
      helperToast.error("Unstake Failed!");
    } finally {
      setIsLoading(false);
    }
  }, [chainId, signer, unstakeAmount]);

  const userStakingAmount = userStats?.userStaking.amount
    ? userStats?.userStaking.amount
    : 0;

  const remainStake =
    userStakingAmount - unstakeAmount > 0
      ? userStakingAmount - unstakeAmount
      : 0;

  return (
    <>
      <InfoSuccessDialog
        txUrl={`${getExplorerUrl(chainId)}tx/${txReceipt.txHash}`}
        isDialogOpen={isDialogOpen}
        toogleDialog={toogleDialog}
        title="Successfully Unstake"
        icon="fa-duotone fa-check text-2xl"
      >
        <div className="space-y-3">
          <div className="flex items-baseline justify-between">
            <span className="text-base-content/70 flex-shrink-0">Unstaked</span>
            <span className="border-b border-dashed border-base-content border-opacity-10 w-full mx-2"></span>
            <span className="whitespace-nowrap font-medium">
              <strong className="font-bold">
                {currencyFormatter(txReceipt?.amount ?? 0, 2)}
              </strong>

              <span className="opacity-70 ml-1">$LOOT</span>
            </span>
          </div>

          <div className="flex items-baseline justify-between">
            <span className="text-base-content/70 flex-shrink-0">Time</span>
            <span className="border-b border-dashed border-base-content border-opacity-10 w-full mx-2"></span>
            <span className="whitespace-nowrap font-medium">
              <strong className="">
                {formatDate(txReceipt?.time * 1000)} UTC
              </strong>
            </span>
          </div>
        </div>
      </InfoSuccessDialog>

      <div className="fadein w-full mx-auto text-sm">
        <div className="bg-base-300/40 rounded-box p-4 pb-6">
          <div className="flex items-center justify-between text-sm opacity-70 mb-2">
            <div>You unstake</div>

            <div>
              Current Stake:{" "}
              {convertToInternationalCurrencySystem(
                userStats?.userStaking?.amount ?? 0
              )}{" "}
              $LOOT
            </div>
          </div>
          <div className="flex items-center justify-between text-lg font-semibold">
            <div className="flex items-center text-xl">
              <span className="flex items-center">
                <img
                  src={"/currency-icons/$LOOT.svg"}
                  alt=""
                  className="w-6 mr-3"
                />
                <span className="truncate text-xl">$LOOT</span>
              </span>
            </div>
            <input
              title="Token Amount"
              type="number"
              inputMode="decimal"
              pattern="^[0-9]*[.,]?[0-9]*$"
              autoCorrect="off"
              autoComplete="off"
              className="input-ghost text-2xl font-semibold text-right w-auto max-w-[160px] md:max-w-none"
              placeholder="0.00"
              value={unstakeAmount.toString()}
              onChange={(e) => setUnStakeAmount(+e.target.value)}
              disabled={isLoading || userStakingAmount === 0}
            ></input>
          </div>
          <div className="grid grid-cols-4 gap-1 mt-3">
            {unstakeAmounts.map((am) => (
              <button
                onClick={() => {
                  if (!userStakingAmount) return;
                  const calcAmount = (userStakingAmount / 100) * am.value;

                  setUnStakeAmount(calcAmount);
                  setCurrentAmount(am);
                }}
                className={`btn btn-sm ${
                  currentAmount.value === am.value
                    ? "border-primary bg-primary/10 hover:bg-primary/20 hover:border-primary"
                    : "bg-white/10 hover:bg-white/20 "
                }`}
                key={am.value}
              >
                {am.label}
              </button>
            ))}
          </div>
          {/* <div className="mt-4 mb-1">
            <div className="flex items-center justify-between text-xs opacity-70 mb-2">
              <div>For (Month)</div>
              <div>APY: </div>
            </div>
            <div>
              <form>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value="75"
                  className="range range-primary range-sm"
                  step="25"
                />
                <div className="w-full flex justify-between text-xs">
                  <span className="ml-1">1</span>
                  <span className="ml-1">3</span>
                  <span className="ml-3">6</span>
                  <span className="mx-1">9</span>
                  <span className="mr-1">12</span>
                </div>
              </form>
            </div>
          </div> */}
        </div>

        {/* <div className="-my-2 text-center">
          <span className="inline-flex justify-center items-center bg-base-200 w-6 h-6 rounded-full ring-2 ring-base-100 cursor-default shadow">
            <i className="fa-solid fa-arrow-down transition-all"></i>
          </span>
        </div> */}

        {/* <div className="border border-base-content border-opacity-20 rounded-box p-4">
          <div className="flex items-center justify-between text-sm opacity-70 mb-2">
            <div>Est. Daily Claimable</div>
            <div className="badge badge-success gap-1">
              <i className="fa-solid fa-bolt animate-pulse"></i> APY: 18%
            </div>
          </div>
          <div className="">
            <div className="flex items-center justify-between font-semibold w-full">
              <div className="flex items-center text-xl">
                <img
                  src="/currency-icons/Ethereum.svg"
                  alt=""
                  className="w-6 mr-3"
                />
                <span className="">ETH</span>
              </div>
              <span className="text-2xl">~0.002</span>
            </div>
          </div>
        </div> */}

        <div className="mt-4 mx-2 flex flex-col gap-2">
          <div className="flex items-baseline justify-between">
            <span className="text-sm text-base-content text-opacity-70 flex-shrink-0">
              Remain Stake
            </span>
            <span className="border-b border-dashed border-base-content border-opacity-10 w-full mx-2"></span>
            <span className="whitespace-nowrap font-semibold">
              {currencyFormatter(remainStake)} $LOOT
            </span>
          </div>

          {/* <div className="flex items-baseline justify-between">
            <span className="text-sm text-base-content text-opacity-70 flex-shrink-0">
              APY
              <span
                className="ml-1 opacity-70 hover:text-primary hover:opacity-100 tooltip text-sm cursor-pointer"
                data-tip="Lorem ipsum dolor sit amet"
              >
                <i className="fa-solid fa-circle-info"></i>
              </span>
            </span>
            <span className="border-b border-dashed border-base-content border-opacity-10 w-full mx-2"></span>
            <span className="whitespace-nowrap font-semibold">18.00%</span>
          </div> */}

          {/* <div className="flex items-baseline justify-between">
            <span className="text-sm text-base-content text-opacity-70 flex-shrink-0">
              Stake Duration
              <span
                className="ml-1 opacity-70 hover:text-primary hover:opacity-100 tooltip text-sm cursor-pointer"
                data-tip="Lorem ipsum dolor sit amet"
              >
                <i className="fa-solid fa-circle-info"></i>
              </span>
            </span>
            <span className="border-b border-dashed border-base-content border-opacity-10 w-full mx-2"></span>
            <span className="whitespace-nowrap">Flexible</span>
          </div> */}
        </div>

        <div className="mt-4 grid gap-2">
          {/* User not approved yet */}
          {/* <button className="btn btn-block btn-primary text-base">
            Enable Pool
          </button> */}
          {!isConnected ? (
            <ConnectButton.Custom>
              {({
                account,
                chain,
                openConnectModal,
                authenticationStatus,
                mounted,
              }) => {
                const ready = mounted && authenticationStatus !== "loading";
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
            <button
              onClick={unstakeLoot}
              className="btn btn-block btn-primary text-base"
              disabled={
                isLoading ||
                userStakingAmount === 0 ||
                unstakeAmount === 0 ||
                unstakeAmount > userStakingAmount
              }
            >
              {isLoading ? (
                <>
                  <i className=" text-base fa-regular fa-spin fa-circle-notch mr-2" />
                  Unstaking
                </>
              ) : (
                "Unstake"
              )}
            </button>
          )}
        </div>
      </div>
    </>
  );
};
export default UnstakeForm;
