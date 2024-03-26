import { describe, expect, test } from "vitest";
import { ChainId } from "@/config/type";
import { getBalanceSnapshot } from "./getBalanceSnapshot";

describe("loot-token", () => {
  test("getBalanceSnapshot", async () => {
    const chainId = ChainId.ZKSYNC_MAINNET;
    const accessToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjRlMzMzNmQ2LTJlMTgtNDhhOS05YzUyLTAxYWMxMGIwZThkOSIsIm5vbmNlIjotMSwid2FsbGV0X2FkZHJlc3MiOiIweEFFMjNDQTE0QzJDMWYzOTYzNDAyQUU5NTAxOTkwNjI1N0JGRTE2RDciLCJpYXQiOjE2OTA5NjMwNzAsImV4cCI6MTY5MDk3Mzg3MH0.ThLYBG6x3NN7sPJQRYcSf_4uVqDOSzOGn2q5f4oYnnA";
    const take = 10;
    const page = 0;
    const data = await getBalanceSnapshot(chainId, take, page, accessToken);
    console.log("data =", data.data);
  });
});