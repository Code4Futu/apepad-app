import { BalanceSnapShot, RewardActivity } from "@/config/type";
import { describe, expect, test } from "vitest";
import { convertBalanceSnapshotToRewardActivity } from "./convert-types";

describe("convert-types", () => {
  describe("convertBalanceSnapshotToRewardActivity", () => {
    test("should return exact match", () => {
      const input: BalanceSnapShot = {
        id: "0c83ff16-7f5f-4bd0-9852-93485e1637ef",
        snapshot_id: "432e104c-354e-429d-bc87-85bdec7d74f0",
        wallet_id: null,
        wallet_address: "0xAE23CA14C2C1f3963402AE95019906257BFE16D7",
        user_id: null,
        token_hold: "1914816.753078411",
        transaction_snapshot_id: null,
        status: "pending",
        created_at: "2023-08-02T07:24:46.969Z",
        updated_at: "2023-08-02T07:24:46.969Z",
        deleted_at: null,
        snapshot: {
          id: "432e104c-354e-429d-bc87-85bdec7d74f0",
          total_token: "9999999.9997119253701",
          total_reward: "0.75",
          total_reward_currency: "ETH",
          address: "0xb478c6245e3d85d6ec3486b62ea872128d562541",
          from_block: null,
          to_block: 17825794,
          reward_pool: "0",
          created_at: "2023-08-02T07:23:01.981Z",
          updated_at: "2023-08-02T07:24:47.325Z",
          deleted_at: null,
        },
      };

      const output = convertBalanceSnapshotToRewardActivity(input);

      const expectOutput: RewardActivity = {
        epoch: "432e104c-354e-429d-bc87-85bdec7d74f0",
        rewards: "0.14361125648501790",
        status: "Pending",
        time: "2023-08-02 07:24",
        token_hold: "1914816.753078411",
      };

      expect(output).toMatchObject(expectOutput);
    });
  });
});
