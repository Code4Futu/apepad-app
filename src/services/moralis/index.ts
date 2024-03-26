import { ChainId } from "@/config/type";
import { MORALIS_KEYS } from "@/config/urls";
import { EvmChain, EvmTransactionLog } from "@moralisweb3/common-evm-utils";
import { sample } from "lodash";
import Moralis from "moralis";
import { Address } from "wagmi";

export const chainIdToChain = (chainId: ChainId): EvmChain | undefined => {
  let chainKey: EvmChain | undefined;
  switch (chainId) {
    case ChainId.GOERLI:
      chainKey = EvmChain.GOERLI;
      break;
    case ChainId.MAINNET:
      chainKey = EvmChain.ETHEREUM;
      break;
    case ChainId.ARBITRUM:
      chainKey = EvmChain.ARBITRUM;
      break;
  }
  return chainKey;
};

export const startMoralis = () => {
  if (!Moralis.Core.isStarted) {
    const key = sample(MORALIS_KEYS?.split(","));
    return Moralis.start({
      apiKey: key,
    });
  }
};

export const getContractEvents = async (
  chainId: ChainId,
  address: Address,
  topic0s: string[],
  abis: any[]
) => {
  const chain = chainIdToChain(chainId);
  if (!chain) return [];

  let results: any[] = [];

  for (let i in topic0s) {
    const topic0 = topic0s[i];
    const response = await Moralis.EvmApi.events.getContractEvents({
      chain: chain,
      topic: topic0,
      address: address,
      abi: abis[i],
    });

    results = [
      ...results,
      ...response.raw.result.map((e) => ({ ...e, topic0 })),
    ];
  }

  return results;
};
