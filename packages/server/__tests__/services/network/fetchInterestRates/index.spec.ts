import { describe, expect, vi, test } from "vitest";
import { fetchInterestRates, InterestRatesParser } from "@/services/network";
import axios, { AxiosError } from "axios";

const mockData = { "24h-APR": 23.24, "24h-APY": 25.88, "spot-APR": 23.21, "spot-APY": 25.85, "24h-data-staked": 82919767.84, "spot-data-staked": 83029296 };

describe("Fetch network interest rates", () => {
  test("should return the formated data", async () => {
    const data = Promise.resolve({ data: mockData });

    vi.spyOn(axios, "get").mockReturnValue(data);

    expect(fetchInterestRates()).resolves.toStrictEqual(InterestRatesParser.parse(mockData));
  });
  test("should throw an error in case of changed API", async () => {
    const data = Promise.resolve({ data: { DATA: "12" } });

    vi.spyOn(axios, "get").mockReturnValue(data);

    expect(fetchInterestRates()).rejects.toThrowError();
  });
  test("should throw an error when API is down", async () => {
    vi.spyOn(axios, "get").mockRejectedValue(new AxiosError("test"));

    expect(fetchInterestRates()).rejects.toThrowError("test");
  });
});
