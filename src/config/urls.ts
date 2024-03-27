// import { ChainId } from "./type";

// export const DEX_URLS: { [chainId in ChainId]: string } = {
//   [ChainId.ARBITRUM]: "https://app.camelot.exchange/?token2=",
//   [ChainId.GOERLI]: "https://app.uniswap.org/#/swap?outputCurrency=",
//   [ChainId.ZKSYNC_TESTNET]: "https://app.mute.io/swap?outputCurrency=",
//   [ChainId.ZKSYNC_MAINNET]: "https://app.mute.io/swap?outputCurrency=",
// };

// const END_POINT_ZKSYNC_MAINNET = process.env.NEXT_PUBLIC_SERVER_URL;

// const END_POINT_ZKSYNC_TESTNET = process.env.NEXT_PUBLIC_SERVER_URL;

// export const BACKEND_URLS: { [chainId in ChainId]: { [key: string]: string } } =
//   {
//     [ChainId.ZKSYNC_TESTNET]: {},
//     [ChainId.ZKSYNC_MAINNET]: {
//       GET_NONCE: `${END_POINT_ZKSYNC_MAINNET}/user/get-nonce`,
//       BALANCE_SNAPSHOT: `${END_POINT_ZKSYNC_MAINNET}/snapshot`,
//       USER_REVENUE: `${END_POINT_ZKSYNC_MAINNET}/user/info-revenue-share`,
//       BURN_HISTORY: `${END_POINT_ZKSYNC_MAINNET}/burn-history`,
//       BALANCE_SNAPSHOT_CLAIM: `${END_POINT_ZKSYNC_MAINNET}/balance-snapshot/claim`,
//     },
//     [ChainId.MAINNET]: {
//       GET_NONCE: `${END_POINT_ZKSYNC_MAINNET}/user/get-nonce`,
//       BALANCE_SNAPSHOT: `${END_POINT_ZKSYNC_MAINNET}/snapshot`,
//       USER_REVENUE: `${END_POINT_ZKSYNC_MAINNET}/user/info-revenue-share`,
//       BURN_HISTORY: `${END_POINT_ZKSYNC_MAINNET}/burn-history`,
//       BURN_INFO: `${END_POINT_ZKSYNC_MAINNET}/burn-history/info-burn`,
//       BALANCE_SNAPSHOT_CLAIM: `${END_POINT_ZKSYNC_MAINNET}/balance-snapshot/claim`,
//       CONFIG_CLAIM: `${END_POINT_ZKSYNC_MAINNET}/config`,
//       INFO_REV_HOLDER_REWARD: `${END_POINT_ZKSYNC_MAINNET}/snapshot/info-rev-holder-reward`,
//       SNAPSHOT_CLAIM_SUCCESS: `${END_POINT_ZKSYNC_MAINNET}/balance-snapshot/is-claim-successfully`,
//       SWAP_REWARD_TO_LOOT: `${END_POINT_ZKSYNC_MAINNET}/user/config/swap-reward-to-loot`,
//     },
//     [ChainId.GOERLI]: {
//       GET_NONCE: `${END_POINT_ZKSYNC_TESTNET}/user/get-nonce`,
//     },
//   };

// export const API_COINGECKO_URL = "https://api.coingecko.com/api/v3";

// export const MORALIS_KEYS = process.env.NEXT_PUBLIC_MORALIS_KEYS;
