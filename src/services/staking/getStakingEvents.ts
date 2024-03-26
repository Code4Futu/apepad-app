import { ChainId } from "@/config/type";
import { getContract } from "@/utils/constracts/get-contracts";
import { getProvider } from "@/utils/wagmi/provider";
import { BigNumber, ethers } from "ethers";
import { Address } from "wagmi";
import { getStakingContract } from "./getStakingContract";
import { decodeTransactionLogsWithIface } from "../logs/decodeTransactionLogs";
import { STAKING_DEPLOYED_BLOCK } from "@/config/contracts";
import { formatBigNumberToNumber } from "@/utils/constracts/common";
import { getContractEvents, startMoralis } from "../moralis";

const formattedHexString = (num: string | number): string => {
  return ethers.BigNumber.from(num)
    .toHexString()
    .replace(/^(0x)0+(0?.*)$/, "$1$2");
};

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const getEvents = async (
  chainId: ChainId,
  fromBlock: number,
  toBlock: number,
  filterAddresses: Address[] = [],
  topics: string[] = []
): Promise<ethers.providers.Log[]> => {
  const provider = getProvider(chainId);
  return provider.send("eth_getLogs", [
    {
      address: [...filterAddresses],
      fromBlock: formattedHexString(fromBlock),
      toBlock: formattedHexString(toBlock),
      topics: [[...topics]],
    },
  ]);
};

const CHUNK_BLOCK = 1000;

export const _getStakingEvents = async (
  chainId: ChainId,
  minBlock: number,
  toBlock: number
) => {
  if (toBlock <= minBlock)
    return {
      fromBlock: undefined,
      decodedLogs: [],
    };

  const provider = getProvider(chainId);
  const stakingContract = getStakingContract(chainId!, provider);

  const fromBlock =
    toBlock - CHUNK_BLOCK > minBlock ? toBlock - CHUNK_BLOCK : minBlock;

  const stakingLootTopic0 = stakingContract.filters
    .StakingLoot()
    .topics?.[0].toString();
  const unStakingLootTopic0 = stakingContract.filters
    .UnStakingLoot()
    .topics?.[0].toString();
  const redeemTopic0 = stakingContract.filters.Redeem().topics?.[0].toString();

  const topics: string[] = [
    stakingLootTopic0,
    unStakingLootTopic0,
    redeemTopic0,
  ].filter((t) => !!t) as string[];

  const rawLogs = (
    await getEvents(
      chainId,
      fromBlock,
      toBlock,
      [getContract(chainId, "STAKING")],
      topics
    )
  ).reverse() as ethers.providers.Log[];

  const decodedLogs: ethers.utils.LogDescription[] =
    decodeTransactionLogsWithIface(
      stakingContract.interface,
      rawLogs
    ) as ethers.utils.LogDescription[];

  return {
    fromBlock,
    rawLogs,
    decodedLogs,
  };
};

const MAX_BLOCK_FILTER = CHUNK_BLOCK * 100;

export const topic0ToEventName = (topic0: string): string => {
  switch (topic0) {
    case "0xf5709d1f7a5543e72891be83f9afdf9333721469bb9fdfdf6581d7bed0a6eef2":
      return "StakingLoot";
    case "0xddeba978dc192cc54edaf0d5e8715b396bab7bab379618059997480882b7f4b6":
      return "UnStakingLoot";
    case "0x37b3f2a726849d103919702443b55f208b996b2deb33848759d605fe28b2555a":
      return "Redeem";
    default:
      return "";
  }
};

export const stakingEventAbi = {
  stake: {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "time",
        type: "uint256",
      },
    ],
    name: "StakingLoot",
    type: "event",
  },
  unStake: {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "time",
        type: "uint256",
      },
    ],
    name: "UnStakingLoot",
    type: "event",
  },
  redeem: {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "xloots",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "epoc",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "time",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "duration",
        type: "uint256",
      },
    ],
    name: "Redeem",
    type: "event",
  },
};

export const getStakingEvents = async (chainId: ChainId) => {
  let events: {
    txHash: string;
    action: string;
    amount: number;
    time: number;
  }[] = [];
  const provider = getProvider(chainId);
  const latestBlock = await provider.getBlockNumber();

  const stakingContract = getStakingContract(chainId!, provider);

  const stakingLootTopic0 = stakingContract.filters
    .StakingLoot()
    .topics?.[0].toString();
  const unStakingLootTopic0 = stakingContract.filters
    .UnStakingLoot()
    .topics?.[0].toString();
  const redeemTopic0 = stakingContract.filters.Redeem().topics?.[0].toString();

  await startMoralis();

  const stakingEvents = await getContractEvents(
    chainId,
    getContract(chainId, "STAKING"),
    [stakingLootTopic0!, unStakingLootTopic0!, redeemTopic0!],
    [stakingEventAbi.stake, stakingEventAbi.unStake, stakingEventAbi.redeem]
  );

  let _events = stakingEvents.map((e) => ({
    txHash: e.transaction_hash ?? "",
    action: topic0ToEventName(e.topic0 ?? ""),
    amount: formatBigNumberToNumber(BigNumber.from(e.data.amount) ?? 0),
    time: Number(e?.data.time.toString() ?? 0),
  }));

  events = [..._events.sort((a, b) => b.time - a.time)];

  // let _fromBlock: number | undefined = STAKING_DEPLOYED_BLOCK[chainId];
  // let toBlock = latestBlock;

  // const minBlock =
  //   latestBlock - _fromBlock > MAX_BLOCK_FILTER
  //     ? latestBlock - MAX_BLOCK_FILTER
  //     : latestBlock - _fromBlock;

  // const numOfChunk = Math.ceil(minBlock / CHUNK_BLOCK);

  // let chunkArray = new Array(numOfChunk).fill("").map((_, idx) => idx);

  // while (chunkArray.length > 0) {
  //   const res = await Promise.all(
  //     chunkArray.splice(0, 10).map((chunk) => {
  //       return _getStakingEvents(
  //         chainId,
  //         minBlock,
  //         toBlock - chunk * CHUNK_BLOCK - 1
  //       );
  //     })
  //   );

  //   res.map((e) => {
  //     const { fromBlock, rawLogs, decodedLogs } = e;
  //     let _events = decodedLogs.map((e, idx) => ({
  //       txHash: rawLogs?.[idx].transactionHash ?? "",
  //       action: e.name,
  //       amount: formatBigNumberToNumber(e?.args.amount ?? 0),
  //       time: Number(e?.args.time.toString() ?? 0),
  //     }));
  //     events = [...events, ..._events];
  //   });
  // }

  // while (_fromBlock) {
  //   const { fromBlock, rawLogs, decodedLogs } = await _getStakingEvents(
  //     chainId,
  //     toBlock
  //   );
  //   _fromBlock = fromBlock;
  //   toBlock = (fromBlock as number) - 1;
  //   let _events = decodedLogs.map((e, idx) => ({
  //     txHash: rawLogs?.[idx].transactionHash ?? "",
  //     action: e.name,
  //     amount: formatBigNumberToNumber(e?.args.amount ?? 0),
  //     time: Number(e?.args.time.toString() ?? 0),
  //   }));
  //   events = [...events, ..._events];
  // }

  return events;
};
