import { ethers } from "ethers";
import { JsonFragment } from "@ethersproject/abi";

export const decodeTransactionLogs = (
  abi: string | readonly (string | ethers.utils.Fragment | JsonFragment)[],
  transactionLogs: any[]
): (ethers.utils.LogDescription | null)[] => {
  const iface = new ethers.utils.Interface(abi);
  return decodeTransactionLogsWithIface(iface, transactionLogs);
};

export const decodeTransactionLogsWithIface = (
  iface: ethers.utils.Interface,
  transactionLogs: any[]
): (ethers.utils.LogDescription | null)[] => {
  return transactionLogs.map((log) => {
    try {
      return iface.parseLog(log);
    } catch {
      return null;
    }
  });
};
