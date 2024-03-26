import { ChainId } from "@/config/type";
import { getBackEndUrls } from "@/utils/backend/getUrls";
import axios from "axios";

export async function getConfigClaim(chainId: ChainId, address: string) {
  const configClaimURL = getBackEndUrls(chainId, "CONFIG_CLAIM");

  try {
    const res = await axios.get(`${configClaimURL}?address=${address}`);
    return res.data.data;
  } catch (error) {
    console.log(error);
    throw new Error(`Method: GET to ${configClaimURL} fails`);
  }
}

export async function getConfigSwapReward(chainId: ChainId, address: string) {
  const checkConfigSwapRewardUrl = getBackEndUrls(
    chainId,
    "SWAP_REWARD_TO_LOOT"
  );
  try {
    const res = await axios.get(
      `${checkConfigSwapRewardUrl}?address=${address}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return res?.data?.data;
  } catch (error: any) {
    console.log("error", error);
    throw error?.response?.data?.message;
  }
}
