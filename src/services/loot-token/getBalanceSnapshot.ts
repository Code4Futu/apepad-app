import { ChainId } from "@/config/type";
import { getBackEndUrls } from "@/utils/backend/getUrls";
import { ACCESS_TOKEN, getItem } from "@/utils/local-storage";
import axios from "axios";

export async function getBalanceSnapshot(
  chainId: ChainId,
  take: number,
  page: number,
  address: string
) {
  const balanceSnapshotUrl = getBackEndUrls(chainId, "BALANCE_SNAPSHOT");

  try {
    const res = await axios.get(
      `${balanceSnapshotUrl}?take=${take}&page=${page}&address=${address}`
    );
    return res.data;
  } catch (error) {
    console.log(error);
    throw new Error(
      `Method: GET to ${balanceSnapshotUrl}?take=${take}&page=${page} fails`
    );
  }
}
