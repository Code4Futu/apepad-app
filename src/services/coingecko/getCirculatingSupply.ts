import { API_COINGECKO_URL } from "@/config/urls";
import axios from "axios";

export async function getCirculatingSupply() {
  const lootTokenInfoUrl = `${API_COINGECKO_URL}/coins/lootbot`;
  try {
    const res = await axios.get(lootTokenInfoUrl);

    return res.data.market_data.circulating_supply;
  } catch (error) {
    console.log(error);
    throw new Error(`Method: GET to ${lootTokenInfoUrl} fails`);
  }
}
