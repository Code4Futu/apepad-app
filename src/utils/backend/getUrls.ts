import { BACKEND_URLS, DEX_URLS } from "@/config/urls";
import { ChainId } from "../wagmi/wagmi";

export function getBackEndUrls(chainId: ChainId, name: string): string {
  if (!BACKEND_URLS[chainId]) {
    throw new Error(`Unknown chainId ${chainId}`);
  }

  if (!BACKEND_URLS[chainId][name]) {
    throw new Error(`Unknown url "${name}" for chainId ${chainId}`);
  }

  return BACKEND_URLS[chainId][name];
}

export function getDexUrl(chainId: ChainId): string {
  if (!DEX_URLS[chainId]) {
    throw new Error(`Unknown chainId ${chainId}`);
  }

  return DEX_URLS[chainId];
}
