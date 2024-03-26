import { ChainId } from "@/config/type";
import { getBackEndUrls } from "@/utils/backend/getUrls";
import axios from "axios";

export async function getBurnInfo(chainId: ChainId) {
  const burnInfoURL = getBackEndUrls(chainId, "BURN_INFO");

  try {
    const res = await axios.get(`${burnInfoURL}`);
    return res.data.data;
  } catch (error) {
    console.log(error);
    throw new Error(`Method: GET to ${burnInfoURL} fails`);
  }
}
