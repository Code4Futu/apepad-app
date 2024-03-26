import { arbitrum, goerli, zkSync, zkSyncTestnet, mainnet } from "wagmi/chains";

export enum ChainId {
  GOERLI = goerli.id,
  ARBITRUM = arbitrum.id,
  ZKSYNC_TESTNET = zkSyncTestnet.id,
  ZKSYNC_MAINNET = zkSync.id,
  MAINNET = mainnet.id,
}

export enum BalanceSnapshotStatus {
  Verifying = "verifying",
  Pending = "pending",
  Processing = "processing",
  Done = "done",
  TransferFailed = "transferFailed",
  UpdateDBFailedWhenTransferDone = "updateDBFailedWhenTransferDone",
  HoldLessMin = "holdLessMin",
  CancelledByHoldLessMin = "cancelledByHoldLessMin",
  AutoSwapProcessing = "autoSwapProcessing",
  AutoSwapFailed = "autoSwapFailed",
  UpdateDBFailedWhenAutoSwapDone = "updateDBFailedWhenAutoSwapDone",
}

export interface BalanceSnapShot {
  id: number;
  created_at: string;
  status: string;
  loot_hold: string;
  xloot_hold: string;
  loot_reward: string;
  xloot_reward: string;
}

export interface Snapshot {
  id: string;
  total_token: string;
  total_reward: string;
  total_reward_currency: string;
  current_revenue_balance: string;
  before_revenue_balance: string;
  address: string;
  from_block: any;
  to_block: number;
  reward_pool: string;
  revert_reward: string;
  created_at: string;
  updated_at: string;
  deleted_at: any;
}

export interface RewardActivity {
  id: number;
  created_at: string;
  status: string;
  loot_hold: string;
  xloot_hold: string;
  loot_reward: string;
  xloot_reward: string;
}

export interface BurnHistory {
  id?: string;
  from_address?: string;
  block_number?: number;
  amount_token?: string;
  amount_xtoken?: string;
  time_burn?: number;
  created_at?: string;
  tx_hash?: string;
}

export interface BurnInfo {
  total_x_loot: string;
  total_loot_burn: string;
  est_revenue_share: string;
}
