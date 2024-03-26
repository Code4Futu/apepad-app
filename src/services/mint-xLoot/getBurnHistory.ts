import { ChainId } from "@/config/type";
import { getBackEndUrls } from "@/utils/backend/getUrls";
import axios from "axios";

export async function getBurnHistory(
  chainId: ChainId,
  take: number,
  page: number,
  address: string
) {
  const burnHistoryUrl = getBackEndUrls(chainId, "BURN_HISTORY");

  try {
    const res = await axios.get(
      `${burnHistoryUrl}?take=${take}&page=${page}&address=${address}`
    );
    return res.data;
  } catch (error) {
    console.log(error);
    throw new Error(
      `Method: GET to ${burnHistoryUrl}?take=${take}&page=${page} fails`
    );
  }
}
