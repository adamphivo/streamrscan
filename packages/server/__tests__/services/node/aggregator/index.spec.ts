import { describe, expect, vi, test } from "vitest";
import * as exports from "@/services/node";
import { NodeParser } from "@/services/node/aggregator/schema";

describe("Fetch node rewards", () => {
  test("should return the formated data", async () => {
    vi.spyOn(exports, "fetchPayouts").mockResolvedValue({ total: 245, payouts: [{ value: 24, timestamp: "12323" }] });
    vi.spyOn(exports, "fetchDataStaked").mockResolvedValue({ dataStaked: 10000 });
    vi.spyOn(exports, "fetchNodeStats").mockResolvedValue({
      claimCount: 0,
      claimPercentage: 0.2,
      claimedRewardCodes: [
        { id: "6c2275f8-f510-4f45-a1f0-4e3c470a0323", claimTime: "2023-06-29T13:13:46.286Z" },
        { id: "6c2275f8-f510-4f45-a1f0-4e3c470a0323", claimTime: "2023-06-29T13:13:46.286Z" },
      ],
    });
    vi.spyOn(exports, "fetchNodeRewards").mockResolvedValue({ reward: 479 });

    const promises = [exports.fetchDataStaked("1"), exports.fetchNodeRewards("1"), exports.fetchNodeStats("1"), exports.fetchPayouts("1")];

    const data = await Promise.all(promises);

    NodeParser.parse({ ...data[0], ...data[1], ...data[2], ...data[3], address: "test" });
  });
});
