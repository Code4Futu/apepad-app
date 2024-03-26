import StakingAbi from "@/abis/Staking.json";
import { getContractInstance } from "@/utils/constracts/common";
import { getContract } from "@/utils/constracts/get-contracts";
import { Provider } from "@ethersproject/providers";
import { ethers } from "ethers";

export const getStakingContract = (
  chainId: number,
  providerOrSigner: Provider | ethers.Signer
) => {
  const address = getContract(chainId, "STAKING");
  return getContractInstance(address, StakingAbi, providerOrSigner);
};
