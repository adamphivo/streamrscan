import { describe, expect, vi, test } from "vitest";
import { fetchNodeStats } from "@/services/node/fetchNodeStats";
import axios, { AxiosError } from "axios";

const mockData = {
  data: {
    claimCount: 12,
    claimPercentage: 0.2,
    claimedRewardCodes: [],
  },
};
const invalidMockData = {
  data: {
    claimCount: 0,
    claimPercentage: 0,
    claimedRewardCodes: [],
  },
};

describe("Fetch node stats", () => {
  test("should return the formated data", async () => {
    const data = Promise.resolve(mockData);

    vi.spyOn(axios, "get").mockReturnValue(data);

    expect(fetchNodeStats("1")).resolves.toStrictEqual(mockData.data);
  });
  test("should work with an invalid node", async () => {
    const data = Promise.resolve(invalidMockData);

    vi.spyOn(axios, "get").mockReturnValue(data);

    expect(fetchNodeStats("1")).resolves.toStrictEqual(invalidMockData.data);
  });
  test("should throw an error in case of changed API", async () => {
    const data = Promise.resolve({ data: { DATA: "12" } });

    vi.spyOn(axios, "get").mockReturnValue(data);

    expect(fetchNodeStats("1")).rejects.toThrowError();
  });
  test("should throw an error when API is down", async () => {
    vi.spyOn(axios, "get").mockRejectedValue(new AxiosError("test"));

    expect(fetchNodeStats("1")).rejects.toThrowError("test");
  });
});
