import { ChainId } from "@/config/type";
import { BigNumber, ethers } from "ethers";
import { Address } from "wagmi";
import { getLootTokenContract } from "./getLootTokenContract";

export async function approveLootToken(
  chainId: ChainId,
  signer: ethers.Signer,
  spender: Address,
  amount: BigNumber
): Promise<number> {
  const lootTokenContract = await getLootTokenContract(chainId, signer);
  let result;

  try {
    const txn = await lootTokenContract.approve(spender, amount);
    result = await txn?.wait();
  } catch (error) {
    throw error;
  }
  return result;
}
