import React, { useCallback, useState } from "react";

import InfoSuccessDialog from "@/components/modals/infoSuccess";
import {
  UserStaking,
  getClaimableOf,
  getUserStaking,
  redeem,
} from "@/services/staking/staking";
import { formatDate } from "@/utils/helper/datetime";
import { helperToast } from "@/utils/helper/helper-toast";
import { currencyFormatter, formatSmartNumber } from "@/utils/helper/number";
import useSWR from "swr";
import { useAccount, useChainId, useSigner } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { toNumber } from "lodash";
import { useRouter } from "next/router";
import { getExplorerUrl } from "@/utils/constracts/call-contract";
const RedeemForm = (props: any) => {
  const { data: signer } = useSigner();
  const { address: account, isConnected } = useAccount();
  const [amount, setAmount] = useState("");

  const chainId = useChainId();

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [txReceipt, setTxReceipt] = useState<{
    txHash: string;
    user: string;
    xloots: number[];
    amount: number;
    epoc: number;
    time: number;
  }>({
    txHash: "",
    user: "",
    xloots: [],
    amount: 0,
    epoc: 0,
    time: 0,
  });

  const { data } = useSWR<{
    userStaking: UserStaking;
    estLootReceived: number;
  }>(
    [txReceipt.txHash, chainId, account, "claim"],
    async () => {
      const userStaking = await getUserStaking(chainId!, account!);
      const { claimable: estLootReceived } = await getClaimableOf(
        chainId!,
        account!
      );

      return { userStaking, estLootReceived };
    },
    {
      revalidateOnMount: true,
    }
  );

  const toogleDialog = () => {
    setIsDialogOpen((pre) => !pre);
  };

  const handleRedeem = useCallback(async () => {
    if (!chainId || !signer || !account)
      return helperToast.error("Connect wallet first");
    try {
      setIsLoading(true);
      if (data?.estLootReceived === 0)
        return helperToast.error("Nothing to claim");
      const txReceipt = await redeem(chainId, signer, account);
      setTxReceipt(txReceipt);
      toogleDialog();
    } catch (error) {
      helperToast.error("Claim Failed!");
    } finally {
      setIsLoading(false);
    }
  }, [chainId, signer, account, data?.estLootReceived]);

  const claimableRewards = {
    claimable: data?.estLootReceived ?? 0,
    total_claim: data?.userStaking.totalClaimed ?? 0,
  };
  const { claimable, total_claim } = claimableRewards;

  return (
    <>
      <InfoSuccessDialog
        txUrl={`${getExplorerUrl(chainId)}tx/${txReceipt.txHash}`}
        isDialogOpen={isDialogOpen}
        toogleDialog={toogleDialog}
        title="Successfully Claim"
      >
        <div className="space-y-3">
          <div className="flex items-baseline justify-between">
            <span className="text-base-content/70 flex-shrink-0">Claim</span>
            <span className="border-b border-dashed border-base-content border-opacity-10 w-full mx-2"></span>
            <span className="whitespace-nowrap font-medium">
              <strong className="font-bold">
                {formatSmartNumber(txReceipt.amount)}
              </strong>
              <span className="opacity-70 ml-1">ETH</span>
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

          <div className="flex items-baseline justify-between">
            <span className="text-base-content/70 flex-shrink-0">
              Remain Stake
            </span>
            <span className="border-b border-dashed border-base-content border-opacity-10 w-full mx-2"></span>
            <span className="whitespace-nowrap font-medium">
              <strong className="font-bold">
                {currencyFormatter(data?.userStaking?.amount ?? 0, 2)}
              </strong>
              <span className="opacity-70 ml-1">$LOOT</span>
            </span>
          </div>
        </div>
      </InfoSuccessDialog>
      <div className="fadein w-full mx-auto text-sm">
        <div className="mt-4">
          <div className="grid grid-cols-2 md:divide-x divide-base-content/10 text-base md:border-2 border-base-content/10 rounded-box ">
            <div className="flex flex-col gap-1 items-stretch p-0 md:px-6 md:py-4">
              <span className="text-xs text-base-content/70 uppercase">
                Claimable
              </span>
              <strong className="text-primary">
                {data?.estLootReceived && toNumber(claimable)
                  ? toNumber(claimable).toFixed(4) + " ETH"
                  : "-"}
              </strong>
            </div>
            {/* <div className="flex flex-col gap-1 items-stretch p-0 md:px-6 md:py-4">
            <span className="text-xs text-base-content/70 uppercase">
              Unclaimed
            </span>
            <strong>-</strong>
          </div> */}
            <div className="flex flex-col gap-1 items-stretch p-0 md:px-6 md:py-4">
              <span className="text-xs text-base-content/70 uppercase">
                Total Claimed
              </span>
              <strong className="text-base">
                {total_claim && toNumber(total_claim)
                  ? toNumber(amount || total_claim).toFixed(4) + " ETH"
                  : "-"}
              </strong>
            </div>
          </div>

          <div className="mt-6">
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
                className="btn btn-block btn-primary text-base"
                onClick={handleRedeem}
                disabled={isLoading || !claimable}
              >
                {isLoading ? (
                  <>
                    <i className=" text-base fa-regular fa-spin fa-circle-notch mr-2" />
                    Claiming
                  </>
                ) : (
                  <span>
                    Claim{" "}
                    {claimable && toNumber(claimable)
                      ? toNumber(claimable).toFixed(4) + " ETH"
                      : ""}
                  </span>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default RedeemForm;
