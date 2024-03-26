import { describe, expect, test } from "vitest";
import { getLootBalance } from "./getLootBalance";
import { ChainId } from "@/config/type";

describe("loot-token", () => {
  test("getLootBalance", async () => {
    const chainId = ChainId.GOERLI;
    const topHolder = "0xd4dcC0bB8450ab47F00CA8212cFa7F0eA9517E9d";
    const nonHolder = "0xAE23CA14C2C1f3963402AE95019906257BFE16D7";
    expect(await getLootBalance(topHolder, chainId)).toEqual(4984002.272886781);
    expect(await getLootBalance(nonHolder, chainId)).toEqual(0);
  });
});
