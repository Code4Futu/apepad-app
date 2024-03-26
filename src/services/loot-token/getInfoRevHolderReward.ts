import { ChainId } from "@/config/type";
import { getBackEndUrls } from "@/utils/backend/getUrls";
import axios from "axios";

export async function getInfoRevHolderReward(chainId: ChainId) {
  const infoRevHolderRewardURL = getBackEndUrls(
    chainId,
    "INFO_REV_HOLDER_REWARD"
  );

  try {
    const res = await axios.get(`${infoRevHolderRewardURL}`);
    return res.data.data;
  } catch (error) {
    console.log(error);
    throw new Error(`Method: GET to ${infoRevHolderRewardURL} fails`);
  }
}
