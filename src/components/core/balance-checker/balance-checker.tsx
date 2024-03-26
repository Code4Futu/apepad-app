import { getLootBalance } from "@/services";
import { useStore } from "@/store";
import { currencyFormatter, formatAmount } from "@/utils/helper/number";
import React from "react";
import useSWR from "swr";
import { useAccount, useChainId } from "wagmi";

function BalanceChecker() {
  const { address: account } = useAccount();
  const chainId = useChainId();

  const txHash = useStore((state) => state.txHash);

  const { data: balance } = useSWR(
    ["loot_balance", chainId, account, txHash],
    async () => {
      const balance = await getLootBalance(account!, chainId);

      const convertBalance = currencyFormatter(balance, 2);
      return convertBalance;
    }
  );

  return (
    <>
      <div className="dropdown dropdown-bottom dropdown-end flex-shrink-0">
        <div className="flex items-center relative overflow-hidden rounded-box">
          <label
            tabIndex={0}
            className="btn btn-md px-3 btn-outline border-primary bg-base-200 hover:bg-base-100 hover:border-primary hover:text-base-content z-[1] relative"
          >
            <img src="/logo.svg" alt="" className="h-5 mr-2" />
            {balance !== undefined ? (
              <span>{balance}</span>
            ) : (
              <strong>-</strong>
            )}
          </label>
        </div>
      </div>
    </>
  );
}

export default BalanceChecker;
