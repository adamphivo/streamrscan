import { describe, expect, vi, test } from "vitest";
import { fetchNodeRewards } from "@/services/node/fetchNodeRewards";
import axios, { AxiosError } from "axios";

describe("Fetch node rewards", () => {
  test("should return the formated data", async () => {
    const data = Promise.resolve({ data: { DATA: 12 } });

    vi.spyOn(axios, "get").mockReturnValue(data);

    expect(fetchNodeRewards("1")).resolves.toStrictEqual({ DATA: 12 });
  });
  test("should throw an error in case of changed API", async () => {
    const data = Promise.resolve({ data: { DATA: "12" } });

    vi.spyOn(axios, "get").mockReturnValue(data);

    expect(fetchNodeRewards("1")).rejects.toThrowError();
  });
  test("should throw an error when API is down", async () => {
    vi.spyOn(axios, "get").mockRejectedValue(new AxiosError("test"));

    expect(fetchNodeRewards("1")).rejects.toThrowError();
  });
});
