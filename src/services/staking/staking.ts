import { ChainId } from "@/config/type";
import { BigNumber, ethers } from "ethers";
import { Provider } from "@ethersproject/providers";
import { getContract } from "@/utils/constracts/get-contracts";
import { approveLootToken } from "../loot-token/approve";
import { getLootAllowance } from "../loot-token/getAllowance";
import { Address } from "wagmi";
import { getStakingContract } from "./getStakingContract";
import { formatBigNumberToNumber } from "@/utils/constracts/common";
import { getProvider } from "@/utils/wagmi/provider";
import { getLootBalance } from "../loot-token/getLootBalance";
import { decodeTransactionLogsWithIface } from "../logs/decodeTransactionLogs";
import { getOwnerXLoots } from "../xloots/getOwnerXLoots";

export const approveLootStake = async (
  chainId: ChainId,
  signer: ethers.Signer
) => {
  const stakingAddress = getContract(chainId!, "STAKING");
  return approveLootToken(
    chainId,
    signer,
    stakingAddress,
    ethers.constants.MaxInt256
  );
};

export const getLootAllowanceOfStaking = async (
  chainId: ChainId,
  userAddress: Address
) => {
  const stakingAddress = getContract(chainId!, "STAKING");

  return getLootAllowance(chainId, userAddress, stakingAddress);
};

export const stake = async (
  chainId: ChainId,
  signer: ethers.Signer,
  amount: BigNumber
) => {
  const stakingContract = getStakingContract(chainId!, signer);
  const tx: ethers.providers.TransactionResponse = await stakingContract.stake(
    amount
  );
  const result: ethers.providers.TransactionReceipt = await tx.wait();

  const decodedLogs = decodeTransactionLogsWithIface(
    stakingContract.interface,
    result.logs
  );

  const stakeEvent = decodedLogs.find((log) => log?.name === "StakingLoot");

  return {
    txHash: result.transactionHash,
    user: stakeEvent?.args.user,
    amount: formatBigNumberToNumber(stakeEvent?.args.amount ?? 0),
    time: Number(stakeEvent?.args.time.toString()),
  };
};

export const unstake = async (
  chainId: ChainId,
  signer: ethers.Signer,
  amount: BigNumber
) => {
  const stakingContract = getStakingContract(chainId!, signer);

  const tx: ethers.providers.TransactionResponse =
    await stakingContract.unstake(amount);
  const result: ethers.providers.TransactionReceipt = await tx.wait();

  const decodedLogs = decodeTransactionLogsWithIface(
    stakingContract.interface,
    result.logs
  );

  const unstakeEvent = decodedLogs.find((log) => log?.name === "UnStakingLoot");

  return {
    txHash: result.transactionHash,
    user: unstakeEvent?.args.user,
    amount: formatBigNumberToNumber(unstakeEvent?.args.amount ?? 0),
    time: Number(unstakeEvent?.args.time.toString()),
  };
};

export type UserStaking = {
  amount: number;
  time: number;
  points: number;
  epoc: number;
  totalClaimed: number;
};

export const getUserStaking = async (
  chainId: ChainId,
  account: Address
): Promise<UserStaking> => {
  const provider = getProvider(chainId);
  const stakingContract = getStakingContract(chainId!, provider);
  const user = await stakingContract.user(account);

  return {
    amount: formatBigNumberToNumber(user.amount),
    time: Number(user.time.toString()),
    points: formatBigNumberToNumber(user.points),
    epoc: Number(user.epoc.toString()),
    totalClaimed: formatBigNumberToNumber(user.totalClaimed),
  };
};

export const getTotalLootStaked = async (chainId: ChainId): Promise<number> => {
  const stakingAddress = getContract(chainId, "STAKING");
  return getLootBalance(stakingAddress, chainId);
};

export const getTotalUser = async (chainId: ChainId): Promise<number> => {
  const provider = getProvider(chainId);
  const stakingContract = getStakingContract(chainId!, provider);
  const totalUser = await stakingContract.totalUser();
  return Number(totalUser.toString());
};

export const getTotalRewarded = async (chainId: ChainId): Promise<number> => {
  const provider = getProvider(chainId);
  const stakingContract = getStakingContract(chainId!, provider);
  const totalRewarded = await stakingContract.totalRewarded();
  return formatBigNumberToNumber(totalRewarded);
};

export const getStakingPointOf = async (
  chainId: ChainId,
  account: Address
): Promise<number> => {
  const provider = getProvider(chainId);
  const stakingContract = getStakingContract(chainId!, provider);
  const point = await stakingContract.stakingPointOf(account);
  return Number(point.toString());
};

export const getClaimableOf = async (
  chainId: ChainId,
  account: Address
): Promise<{
  claimable: number;
  bonusToken: number;
  duration: number;
  xloots: number[];
}> => {
  const provider = getProvider(chainId);
  const stakingContract = getStakingContract(chainId!, provider);

  const xloots = await getOwnerXLoots(chainId, account);
  const claimable = await stakingContract.claimableOf(account, xloots);

  return {
    claimable: formatBigNumberToNumber(claimable.claimable),
    bonusToken: formatBigNumberToNumber(claimable.bonusAmount),
    duration: claimable.duration.toNumber(),
    xloots,
  };
};

export const redeem = async (
  chainId: ChainId,
  signer: ethers.Signer,
  account: Address
) => {
  const stakingContract = getStakingContract(chainId!, signer);

  const xloots = await getOwnerXLoots(chainId, account);

  const tx: ethers.providers.TransactionResponse = await stakingContract.redeem(
    xloots
  );
  const result: ethers.providers.TransactionReceipt = await tx.wait();

  const decodedLogs = decodeTransactionLogsWithIface(
    stakingContract.interface,
    result.logs
  );

  const redeemEvent = decodedLogs.find((log) => log?.name === "Redeem");

  return {
    txHash: result.transactionHash,
    user: redeemEvent?.args.user,
    xloots: redeemEvent?.args.xloots.map((x: ethers.BigNumber) =>
      formatBigNumberToNumber(x ?? 0)
    ),
    amount: formatBigNumberToNumber(redeemEvent?.args.amount ?? 0),
    epoc: Number(redeemEvent?.args.epoc.toString()),
    time: Number(redeemEvent?.args.time.toString() ?? 0),
    duration: Number(redeemEvent?.args.duration.toString() ?? 0),
  };
};

export type XLootStats = {
  address: string;
  ppt: number;
  tpn: number;
  supply: number;
};

export const getXLootStats = async (chainId: ChainId): Promise<XLootStats> => {
  const provider = getProvider(chainId);
  const stakingContract = getStakingContract(chainId!, provider);
  const xloot = await stakingContract.xloot();

  return {
    address: xloot.address,
    ppt: Number(xloot.ppt.toString()),
    tpn: Number(xloot.tpn.toString()),
    supply: Number(xloot.supply.toString()),
  };
};
