import React, { useCallback, useEffect, useState } from "react";
import {
  approveBurnLoot,
  checkApprovedXlootContract,
  getEnableBurn,
  minxLoot,
} from "@/services/mint-xLoot/mintXloot";
import {
  useAccount,
  useChainId,
  useProvider,
  useSigner,
  useConnect,
} from "wagmi";
import { ethers } from "ethers";
import { currencyFormatter } from "@/utils/helper/number";
import BurnReceiptDialog from "@/components/modals/burnReceipt";
import { helperToast } from "@/utils/helper/helper-toast";
import { getContract } from "@/utils/constracts/get-contracts";
import { useCopyToClipboard, useLocation } from "react-use";
import { getExplorerUrl } from "@/utils/constracts/call-contract";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import useSWR from "swr";
import { getLootBalance } from "@/services";
import { XLOOT_EXCHANGE_RATE } from "@/utils/helper/legacy";
import { toNumber } from "lodash";

const pack = [
  {
    key: 1,
    name: "1",
    price: "15K",
    oldPrice: "",
    discount: "",
    amount: "15000",
  },
  {
    key: 2,
    name: "5",
    price: "71,25K",
    oldPrice: "75K",
    discount: "5%",
    amount: "71250",
  },
  {
    key: 4,
    name: "10",
    price: "135K",
    oldPrice: "150K",
    discount: "10%",
    amount: "135000",
  },
  // {
  //   key: 4,
  //   name: "15",
  //   price: "127,5K",
  //   oldPrice: "150K",
  //   discount: "15%",
  //   amount: "127500",
  // },
  // {
  //   key: 5,
  //   name: "20",
  //   price: "160K",
  //   oldPrice: "200K",
  //   discount: "20%",
  //   amount: "160000",
  // },
];

interface Props {
  setKey: () => void;
}

const Burn = ({ setKey }: Props) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentPackage, setCurrentPackage] = useState(pack[0]);
  const [isApproved, setIsApproved] = useState(false);
  const { pathname } = useLocation();

  const [isEnable, setIsEnable] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [txUrl, setTxUrl] = useState("");

  const { data } = useSigner();
  const { address: account, isConnected } = useAccount();
  const chainId = useChainId();
  const provider = useProvider();

  const toogleDialog = () => {
    setIsDialogOpen(!isDialogOpen);
  };
  const key = JSON.stringify({ pathname });
  const { data: balance } = useSWR([key, chainId, account], async () => {
    const balance = (await getLootBalance(account!, chainId)).toString();

    return Number(balance?.replaceAll(",", ""));
  });

  const isEnoughLoot = balance ? balance >= XLOOT_EXCHANGE_RATE : false;

  const checkAllowance = useCallback(async () => {
    try {
      const result = await checkApprovedXlootContract(
        chainId,
        account!,
        provider
      );

      const isApproved = result >= Number(currentPackage.amount);

      setIsApproved(isApproved);
    } catch (error) {}
  }, [account, chainId, currentPackage.amount, provider]);

  const approveBurnRequest = async () => {
    try {
      setIsLoading(true);
      await approveBurnLoot(data as ethers.Signer);
    } catch (error: any) {
      helperToast.error("Approve Failed!");
    } finally {
      checkAllowance();
      setIsLoading(false);
    }
  };

  const mintXloot = async () => {
    try {
      setIsLoading(true);
      const result = await minxLoot(data as ethers.Signer, currentPackage.name);

      const txUrl = getExplorerUrl(chainId) + "tx/" + result;
      setTxUrl(txUrl);

      toogleDialog();

      const timeoutId = setTimeout(() => {
        setKey();
      }, 10000);
      return () => {
        clearTimeout(timeoutId);
      };
    } catch (error: any) {
      helperToast.error("Burn Failed!");
    } finally {
      setIsLoading(false);
    }
  };

  const checkEnableBurn = useCallback(async () => {
    if (!data) return;

    try {
      const res = await getEnableBurn(data as ethers.Signer);

      setIsEnable(res);
    } catch (error) {
      setIsEnable(false);
      helperToast.error("Not enabled to Burn");
    }
  }, [data]);

  const addressXloot = getContract(chainId!, "XLOOT");
  const [value, copy] = useCopyToClipboard();

  const handleClickCopy = () => {
    copy(addressXloot);
  };

  const amountLoot = currencyFormatter(Number(currentPackage.amount));

  useEffect(() => {
    checkAllowance();
  }, [checkAllowance]);

  useEffect(() => {
    checkEnableBurn();
  }, [checkEnableBurn]);

  return (
    <>
      <BurnReceiptDialog
        chainId={chainId}
        txUrl={txUrl}
        copyResult={value}
        addressXloot={addressXloot}
        handleClickCopy={handleClickCopy}
        currentPackage={currentPackage}
        isDialogOpen={isDialogOpen}
        toogleDialog={toogleDialog}
      />

      {/* Burn */}
      <div className={`w-full`}>
        <div className="grid lg:grid-cols-12 gap-4 md:gap-6">
          <div className="lg:col-span-4 card">
            <div className="card--body !pt-0">
              <ul className="steps steps-vertical">
                <li className="step !text-left py-1">Select a Burn package</li>
                <li className="step !text-left py-1">
                  Burn more, earn more 🔥
                </li>
                <li className="step !text-left py-1">
                  {`Connect -> Approve -> Burn`}
                </li>
                <li className="step !text-left py-1">
                  {" "}
                  Get transferrable $×LOOT NFTs{" "}
                </li>
                <li className="step !text-left py-1">
                  Enjoy daily revenue share and all future rewards
                </li>
              </ul>
              <div className="flex bg-accent/10  px-4 py-3 rounded-md text-sm mt-4">
                <i className="fa-solid fa-circle-info mr-3 text-base text-accent mt-1"></i>
                <span>
                  Learn more about $xLOOT and RevShare at our{" "}
                  <a
                    href="https://docs.lootbot.xyz/lootbot/technical-documentation/revenue-sharing"
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-1 cursor-pointer"
                  >
                    Docs
                  </a>
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 card card-primary">
            <div className="card--header">
              <h4 className="">
                <i className="fa-duotone fa-fire mr-3"></i>
                <span className="">Select a Burn package</span>
              </h4>
            </div>
            <div className="card--body justify-between flex flex-col h-full">
              <div className="grid gap-2">
                {pack.map((item, idx) => (
                  <div
                    key={idx}
                    className={`flex justify-between items-baseline bg-base-200 px-4 py-2 rounded-box border border-base-content/20 cursor-pointer transition-all ${
                      currentPackage.amount === item.amount
                        ? "border-primary shadow bg-primary/10"
                        : ""
                    }`}
                    onClick={() => setCurrentPackage(item)}
                  >
                    <div className="flex flex-col">
                      <div className="mb-2">
                        <span className="text-[10px] uppercase opacity-70 ">
                          Receive
                        </span>
                      </div>

                      <h6 className="flex items-baseline transition-all">
                        <span
                          className={`text-lg font-bold leading-none mr-1 ${
                            currentPackage.amount === item.amount
                              ? "text-primary"
                              : ""
                          }`}
                        >
                          {item.name}
                        </span>
                        <span
                          className={`opacity-70 font-medium  text-xs ${
                            currentPackage.amount === item.amount
                              ? "opacity-100"
                              : ""
                          }`}
                        >
                          xLOOT
                        </span>
                      </h6>
                    </div>

                    <div className="flex flex-col items-end">
                      <div className="mb-1 flex items-center gap-2">
                        {item.discount && (
                          <span
                            className={`badge badge-success transition-all !text-[10px] !px-[4px] !py-0 ${
                              currentPackage.amount === item.amount
                                ? ""
                                : "badge-outline"
                            }`}
                          >
                            {item.discount} Bonus
                          </span>
                        )}
                        <span className="text-[10px] uppercase opacity-70 ">
                          Burn
                        </span>
                      </div>
                      <div className="flex items-baseline gap-1">
                        <span className="line-through opacity-70 text-xs">
                          {item.oldPrice}
                        </span>
                        <span
                          className={`text-lg font-bold ${
                            currentPackage.amount === item.amount
                              ? "text-primary"
                              : ""
                          }`}
                        >
                          {item.price}
                        </span>

                        <span
                          className={`opacity-50 font-medium ${
                            currentPackage.amount === item.amount
                              ? "opacity-100"
                              : ""
                          }`}
                        >
                          $LOOT
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4">
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
                  <button
                    className="btn btn-block btn-primary"
                    onClick={() =>
                      isApproved ? mintXloot() : approveBurnRequest()
                    }
                    disabled={isLoading || !isEnable || !isEnoughLoot}
                  >
                    {!isEnable ? (
                      "Burning is Paused"
                    ) : isLoading ? (
                      <>
                        <i className=" text-base fa-regular fa-spin fa-circle-notch mr-2" />
                        {isApproved ? "Burning" : "Approving"}
                      </>
                    ) : isApproved ? (
                      `Burn ${amountLoot} $LOOT`
                    ) : isEnoughLoot ? (
                      "Approve"
                    ) : (
                      `Min Burn: ${currencyFormatter(
                        XLOOT_EXCHANGE_RATE
                      )} $LOOT`
                    )}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* //Burn */}
    </>
  );
};
export default Burn;
