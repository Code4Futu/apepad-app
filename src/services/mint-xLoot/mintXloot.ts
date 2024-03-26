import {
  formatBigNumberToNumber,
  getContractInstance,
} from "@/utils/constracts/common";
import { getContract } from "@/utils/constracts/get-contracts";
import { Address } from "wagmi";
import MintXlootAbi from "@/abis/MintXloot.json";
import { Provider } from "@ethersproject/providers";
import { getProvider } from "@/utils/wagmi/provider";
import { ChainId } from "@/config/type";
import { BigNumber, ethers } from "ethers";
import { USDG_DECIMALS } from "@/utils/helper/legacy";
import LootTokenAbi from "@/abis/LootToken.json";

export const getLootTokenContract = async (
  chainId?: ChainId,
  signer?: ethers.Signer | Provider
) => {
  const address = getContract(chainId!, "LOOT");

  return getContractInstance(address, LootTokenAbi, signer);
};

export async function approveBurnLoot(signer?: ethers.Signer) {
  const chainId = await signer?.getChainId();

  const lootTokenContract = await getLootTokenContract(chainId, signer);
  let result;

  try {
    const addressXloot = getContract(chainId!, "XLOOT");

    const txn = await lootTokenContract.approve(
      addressXloot,
      ethers.constants.MaxInt256
    );
    result = await txn?.wait();
  } catch (error) {
    console.error(error);
  }
  return result;
}

export const getxLootContract = async (
  chainId?: ChainId,
  signer?: ethers.Signer
) => {
  const address = getContract(chainId!, "XLOOT");
  return getContractInstance(address, MintXlootAbi, signer);
};

export async function minxLoot(signer?: ethers.Signer, amountxLoot?: string) {
  const chainId = await signer?.getChainId();

  const xLootContract = await getxLootContract(chainId, signer);

  let hash = "";
  try {
    const txn = await xLootContract.mint(amountxLoot);
    await txn?.wait();
    hash = txn.hash.toString();
  } catch (error) {
    throw error;
  }
  return hash;
}

export const checkApprovedXlootContract = async (
  chainId: ChainId,
  userAddress: Address,
  provider: Provider
) => {
  const xlootAddress = getContract(chainId!, "XLOOT");

  const lootTokenContract = await getLootTokenContract(chainId, provider);

  let result = BigNumber.from(0);
  try {
    result = await lootTokenContract.allowance(userAddress, xlootAddress);
  } catch (error) {
    throw error;
  }
  return formatBigNumberToNumber(result);
};

export async function getEnableBurn(signer?: ethers.Signer) {
  const chainId = await signer?.getChainId();

  const xLootContract = await getxLootContract(chainId, signer);

  let result;
  try {
    result = await xLootContract.getEnableBurn();
  } catch (error) {
    throw error;
  }
  return result;
}
