import LootTokenAbi from "@/abis/LootToken.json";
import { getContractInstance } from "@/utils/constracts/common";
import { getContract } from "@/utils/constracts/get-contracts";
import { Provider } from "@ethersproject/providers";
import { ethers } from "ethers";

export const getLootTokenContract = (
  chainId: number,
  providerOrSigner: Provider | ethers.Signer
) => {
  const address = getContract(chainId, "LOOT");
  return getContractInstance(address, LootTokenAbi, providerOrSigner);
};
