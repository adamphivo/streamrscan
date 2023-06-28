import { describe, expect, vi, test } from "vitest";
import { fetchPayouts } from "@/services/node";
import axios, { AxiosError } from "axios";

describe("Fetch node rewards", () => {
  test("should return the formated data", async () => {
    const data = Promise.resolve({
      data: {
        data: {
          erc20Transfers: [
            { value: "12", timestamp: "113413" },
            { value: "12", timestamp: "113413" },
          ],
        },
      },
    });

    const expected = {
      total: 24,
      payouts: [
        { value: 12, timestamp: "113413" },
        { value: 12, timestamp: "113413" },
      ],
    };

    vi.spyOn(axios, "post").mockReturnValue(data);

    expect(fetchPayouts("0x7f82e2f593ae1aec6d499d0dc133c8f5d38302d9")).resolves.toStrictEqual(expected);
  });
  test("should throw an error in case of changed API", async () => {
    const data = Promise.resolve({ data: { DATA: "12" } });

    vi.spyOn(axios, "post").mockReturnValue(data);

    expect(fetchPayouts("0x7f82e2f593ae1aec6d499d0dc133c8f5d38302d9")).rejects.toThrowError();
  });
  test("should throw an error when API is down", async () => {
    vi.spyOn(axios, "post").mockRejectedValue(new AxiosError("test"));

    expect(fetchPayouts("0x7f82e2f593ae1aec6d499d0dc133c8f5d38302d9")).rejects.toThrowError();
  });
});
