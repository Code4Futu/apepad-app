import { API_COINGECKO_URL } from "@/config/urls";
import axios from "axios";
import { sleep } from "../staking/getStakingEvents";

export async function getEthPrice() {
  // TODO
  // await sleep(10000); // tmp resolve CORS
  // const id = "ethereum";
  // const lootPriceUrl = `${API_COINGECKO_URL}/simple/price?ids=${id}&vs_currencies=usd`;
  // const res = await axios.get<{
  //   [id]: {
  //     usd: number;
  //   };
  // }>(lootPriceUrl);

  // return res.data[id].usd;

  return 2300;
}
