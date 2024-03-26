import { ChainId } from "@/config/type";
import { formatBigNumberToNumber } from "@/utils/constracts/common";
import { getProvider } from "@/utils/wagmi/provider";
import { BigNumber } from "ethers";
import { Address } from "wagmi";
import { getLootTokenContract } from "./getLootTokenContract";

export async function getLootBalance(userAddress: Address, chainId: ChainId) {
  if (!userAddress) return 0;

  const provider = getProvider(chainId);
  const lootTokenContract = getLootTokenContract(chainId, provider);
  let result = BigNumber.from(0);
  try {
    result = await lootTokenContract.balanceOf(userAddress);
  } catch (error) {
    console.error(error);
  }
  return formatBigNumberToNumber(result);
}
