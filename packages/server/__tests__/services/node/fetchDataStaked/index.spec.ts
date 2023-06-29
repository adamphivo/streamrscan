import { describe, expect, vi, test } from "vitest";
import { fetchDataStaked } from "@/services/node";
import axios, { AxiosError } from "axios";

describe("Fetch node rewards", () => {
  test("should return the formated data", async () => {
    const data = Promise.resolve({ data: { data: { erc20Balances: [{ value: "12" }] } } });

    vi.spyOn(axios, "post").mockReturnValue(data);

    expect(fetchDataStaked("0x7f82e2f593ae1aec6d499d0dc133c8f5d38302d9")).resolves.toStrictEqual({ dataStaked: 12 });
  });
  test("should work with an invalid node", async () => {
    const data = Promise.resolve({ data: { data: { erc20Balances: [] } } });

    vi.spyOn(axios, "post").mockReturnValue(data);

    expect(fetchDataStaked("0x7f82e2f593ae1aec6d499d0dc133c8f5d38302d9")).resolves.toStrictEqual({ dataStaked: 0 });
  });
  test("should throw an error in case of changed API", async () => {
    const data = Promise.resolve({ data: { DATA: "12" } });

    vi.spyOn(axios, "post").mockReturnValue(data);

    expect(fetchDataStaked("0x7f82e2f593ae1aec6d499d0dc133c8f5d38302d9")).rejects.toThrowError();
  });
  test("should throw an error when API is down", async () => {
    vi.spyOn(axios, "post").mockRejectedValue(new AxiosError("test"));

    expect(fetchDataStaked("0x7f82e2f593ae1aec6d499d0dc133c8f5d38302d9")).rejects.toThrowError();
  });
});
