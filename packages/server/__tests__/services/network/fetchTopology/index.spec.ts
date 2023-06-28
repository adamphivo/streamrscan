import { describe, expect, vi, test } from "vitest";
import { fetchTopology } from "@/services/network";
import axios, { AxiosError } from "axios";

const mockData = {
  lastRewards: [
    { code: "3c2ab13a-f167-4bef-a96f-86664826fa2b", topologySize: 7649, receivedClaims: 5801, meanPropagationDelay: 384.50163764868125 },
    { code: "54b82a4b-8594-48c7-9816-25f4a15b4532", topologySize: 7660, receivedClaims: 5806, meanPropagationDelay: 329.44832931450225 },
  ],
};

describe("Fetch network topology", () => {
  test("should return the formated data", async () => {
    const data = Promise.resolve({ data: mockData });

    vi.spyOn(axios, "get").mockReturnValue(data);

    expect(fetchTopology()).resolves.toStrictEqual(mockData);
  });
  test("should throw an error in case of changed API", async () => {
    const data = Promise.resolve({ data: { DATA: "12" } });

    vi.spyOn(axios, "get").mockReturnValue(data);

    expect(fetchTopology()).rejects.toThrowError();
  });
  test("should throw an error when API is down", async () => {
    vi.spyOn(axios, "get").mockRejectedValue(new AxiosError("test"));

    expect(fetchTopology()).rejects.toThrowError("test");
  });
});
