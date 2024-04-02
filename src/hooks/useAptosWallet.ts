import { useContext } from "react";
import { AptosWalletContext } from "@/context/AptosWalletProvider";

function useAptosWallet() {
  return useContext(AptosWalletContext);
}

export default useAptosWallet;
