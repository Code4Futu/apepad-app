import ClaimSuccessDialog from "@/components/modals/claimSuccess";
import InfoSuccessDialog from "@/components/modals/infoSuccess";
import { getLootBalance } from "@/services/index";
import {
  approveLootStake,
  getLootAllowanceOfStaking,
  getUserStaking,
  stake,
  UserStaking,
} from "@/services/staking/staking";
import { getExplorerUrl } from "@/utils/constracts/call-contract";
import { formatDate } from "@/utils/helper/datetime";
import { helperToast } from "@/utils/helper/helper-toast";
import { currencyFormatter } from "@/utils/helper/number";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { ethers } from "ethers";
import React, { useCallback, useEffect, useState } from "react";
import useSWR from "swr";
import { useAccount, useChainId, useSigner } from "wagmi";
import { StakingEvent } from "./main";
import { useStore } from "@/store";

const stakeAmounts = [
  { label: "25%", value: 25 },
  { label: "50%", value: 50 },
  { label: "75%", value: 75 },
  { label: "Max", value: 100 },
];

const StakeForm = ({
  setEvents,
}: {
  setEvents: React.Dispatch<React.SetStateAction<StakingEvent[]>>;
}) => {
  const { data: signer } = useSigner();
  const { address: account, isConnected } = useAccount();
  const chainId = useChainId();

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [stakeAmount, setStakeAmount] = useState<number>(0);
  const [isApproved, setIsApproved] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(false);
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
  const [currentAmount, setCurrentAmount] = useState({ label: "", value: 0 });

  const { data: userStats } = useSWR<{
    lootBalance: number;
    userStaking: UserStaking;
  }>(
    [txReceipt.txHash, chainId, account, "stake"],
    async () => {
      const [lootBalance, userStaking] = await Promise.all([
        getLootBalance(account!, chainId),
        getUserStaking(chainId, account!),
      ]);

      return { lootBalance, userStaking };
    },
    {
      revalidateOnMount: true,
    }
  );

  const toogleDialog = () => {
    setIsDialogOpen((pre) => !pre);
  };

  const checkApprovedLootToken = useCallback(async () => {
    if (!account) return isApproved ? setIsApproved(false) : null;

    const allowance = await getLootAllowanceOfStaking(chainId, account);

    setIsApproved(allowance >= stakeAmount);
  }, [chainId, account, stakeAmount, isLoading]);

  useEffect(() => {
    checkApprovedLootToken();
  }, [checkApprovedLootToken]);

  const approveLoot = useCallback(async () => {
    if (!chainId || !signer) return helperToast.error("Connect wallet first");

    try {
      setIsLoading(true);
      await approveLootStake(chainId, signer);
      setIsApproved(true);
    } catch (error) {
      helperToast.error("Approve Failed!");
    } finally {
      setIsLoading(false);
    }
  }, [chainId, signer, isApproved]);

  const stakeLoot = useCallback(async () => {
    if (!chainId || !signer) return helperToast.error("Connect wallet first");
    if (!stakeAmount || isNaN(stakeAmount))
      return helperToast.error("Invalid stake amount");

    const amount = ethers.utils.parseUnits(stakeAmount.toString(), 18);
    try {
      setIsLoading(true);
      const txReceipt = await stake(chainId, signer, amount);

      setEvents((pre) => [
        {
          txHash: txReceipt.txHash,
          action: "StakingLoot",
          amount: txReceipt.amount,
          time: txReceipt.time,
        },
        ...pre,
      ]);
      setStakeAmount(0);
      setCurrentAmount({ label: "", value: 0 });
      useStore.setState({ txHash: txReceipt.txHash });
      setTxReceipt(txReceipt);
      toogleDialog();
    } catch (error) {
      helperToast.error("Stake Failed!");
    } finally {
      setIsLoading(false);
    }
  }, [chainId, signer, stakeAmount]);

  return (
    <>
      <InfoSuccessDialog
        txUrl={`${getExplorerUrl(chainId)}tx/${txReceipt.txHash}`}
        isDialogOpen={isDialogOpen}
        toogleDialog={toogleDialog}
        title="Successfully Stake"
      >
        <div className="space-y-3">
          <div className="flex items-baseline justify-between">
            <span className="text-base-content/70 flex-shrink-0">Staked</span>
            <span className="border-b border-dashed border-base-content border-opacity-10 w-full mx-2"></span>
            <span className="whitespace-nowrap font-medium">
              <strong className="font-bold">
                {currencyFormatter(txReceipt.amount, 2)}
              </strong>
              <span className="opacity-70 ml-1">$LOOT</span>
            </span>
          </div>

          <div className="flex items-baseline justify-between">
            <span className="text-base-content/70 flex-shrink-0">Time</span>
            <span className="border-b border-dashed border-base-content border-opacity-10 w-full mx-2"></span>
            <span className="whitespace-nowrap font-medium">
              <strong className="">
                {formatDate(txReceipt.time * 1000)} UTC
              </strong>
            </span>
          </div>

          {/* <div className="flex items-baseline justify-between">
            <span className="text-base-content/70 flex-shrink-0">APY</span>
            <span className="border-b border-dashed border-base-content border-opacity-10 w-full mx-2"></span>
            <span className="whitespace-nowrap font-medium">
              <strong className="">15%</strong>
            </span>
          </div> */}
        </div>
      </InfoSuccessDialog>

      <div className="fadein w-full mx-auto text-sm">
        <div className="bg-base-300/40 rounded-box p-4 pb-6">
          <div className="flex items-center justify-between text-sm opacity-70 mb-2">
            <div>You stake</div>
            <div>
              Balance: {currencyFormatter(userStats?.lootBalance ?? 0, 2)}
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
              disabled={isLoading || userStats?.lootBalance === 0}
              value={Math.floor(stakeAmount).toString()}
              onChange={(e) => setStakeAmount(+e.target.value)}
            ></input>
          </div>
          <div className="grid grid-cols-4 gap-1 mt-3">
            {stakeAmounts.map((am) => (
              <button
                onClick={() => {
                  if (!userStats?.lootBalance) return;
                  const calcAmount = (userStats.lootBalance / 100) * am.value;

                  setStakeAmount(Math.floor(calcAmount));
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
        {/* 
        <div className="-my-2 text-center">
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
              Current Stake
            </span>
            <span className="border-b border-dashed border-base-content border-opacity-10 w-full mx-2"></span>
            <span className="whitespace-nowrap font-semibold">
              {currencyFormatter(userStats?.userStaking?.amount ?? 0, 2)} $LOOT
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
              onClick={isApproved ? stakeLoot : approveLoot}
              className="btn btn-block btn-primary text-base"
              disabled={
                isLoading ||
                (!!userStats?.lootBalance &&
                  stakeAmount > userStats?.lootBalance) ||
                !stakeAmount
              }
            >
              {isLoading ? (
                <>
                  <i className=" text-base fa-regular fa-spin fa-circle-notch mr-2" />
                  {isApproved ? "Staking" : "Approving"}
                </>
              ) : isApproved ? (
                `Stake Now`
              ) : (
                "Approve LOOT"
              )}
            </button>
          )}
        </div>
      </div>
    </>
  );
};
export default StakeForm;
