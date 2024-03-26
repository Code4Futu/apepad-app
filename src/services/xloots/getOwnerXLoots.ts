import Moralis from "moralis";
import { EvmChain } from "@moralisweb3/common-evm-utils";
import { ChainId } from "@/config/type";
import { Address } from "wagmi";
import { getContract } from "@/utils/constracts/get-contracts";
import { chainIdToChain, startMoralis } from "../moralis";

export const getOwnerXLoots = async (
  chainId: ChainId,
  owner: Address
): Promise<number[]> => {
  try {
    const chain = chainIdToChain(chainId);
    if (!chain) return [];

    await startMoralis();

    const address = `${owner}`;

    const xlootAddress = getContract(chainId, "XLOOT");

    const response = await Moralis.EvmApi.nft.getWalletNFTs({
      tokenAddresses: [xlootAddress],
      address,
      chain,
    });

    return response.toJSON().result.map((r) => Number(r.token_id));
  } catch (error) {
    console.log(error);
    return [];
  }
};
