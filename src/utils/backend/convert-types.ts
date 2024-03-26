import { BalanceSnapShot, RewardActivity } from "@/config/type";
import { capitalizedString } from "../helper/letter";
import { formatDate } from "../helper/datetime";

export function convertBalanceSnapshotToRewardActivity(
  input: BalanceSnapShot
): RewardActivity {
  return {
    id: input.id - 1,
    created_at: formatDate(input.created_at),
    status: input.status,
    loot_hold: input.loot_hold,
    xloot_hold: input.xloot_hold,
    loot_reward: input.loot_reward,
    xloot_reward: input.xloot_reward,
  };
}
