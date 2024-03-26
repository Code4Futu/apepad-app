import { Address } from "wagmi";
import { ChainId } from "./type";

const isXlootOffical = true;

export const CONTRACTS: {
  [chainId in ChainId]: { [key: string]: Address };
} = {
  [ChainId.GOERLI]: {
    LOOT: "0x9FF05aA9741ff0B8A1452A8A76f477dd68508C3d",
    XLOOT: "0xe1ed8C99309ed930f129b3c066f50cCEF6e661D2",
    STAKING: "0x2bb8D14C18E8eB50F44F67659c4AAA1608F9decc",
  },
  [ChainId.ARBITRUM]: {},
  [ChainId.ZKSYNC_TESTNET]: {},
  [ChainId.ZKSYNC_MAINNET]: {
    LOOT: "0xb478c6245e3D85D6EC3486B62ea872128d562541",
  },
  [ChainId.MAINNET]: {
    LOOT: isXlootOffical
      ? "0xb478c6245e3d85d6ec3486b62ea872128d562541"
      : "0xa0583517464cf1cda1e681e7d57b9b6d552bb752",
    XLOOT: isXlootOffical
      ? "0x9237DfD3Ff86710bfD16Ee6172F184a2bB4de10A"
      : "0xeE17b2D27757046821CeD556eBBfa01dF2F92E8e",
    STAKING: "0x9d87Ff196646A99BDdb16876066aA863900118b4"
  },
};

export const STAKING_DEPLOYED_BLOCK: {
  [chainId in ChainId]: number;
} = {
  [ChainId.GOERLI]: 10231584,
};
