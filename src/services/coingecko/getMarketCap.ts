import { API_COINGECKO_URL } from "@/config/urls";
import axios from "axios";

export async function getMarketcap() {
    const marketcap = `${API_COINGECKO_URL}/coins/markets/?ids=lootbot&vs_currency=usd&include_market_cap=true`
  try {
    const res = await axios.get(marketcap);    
    return res?.data;
  } catch (error) {
    console.log(error);
    throw new Error(`Method: GET to ${marketcap} fails`);
  }
}