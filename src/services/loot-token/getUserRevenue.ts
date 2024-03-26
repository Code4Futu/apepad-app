import { ChainId } from "@/config/type";
import { getBackEndUrls } from "@/utils/backend/getUrls";
import axios from "axios";

export async function getUserRevenue(chainId: ChainId, address: string) {
  const userRewardURL = getBackEndUrls(chainId, "USER_REVENUE");

  try {
    const res = await axios.get(`${userRewardURL}?address=${address}`);
    return res.data.data;
  } catch (error) {
    console.log(error);
    throw new Error(`Method: GET to ${userRewardURL} fails`);
  }
}
