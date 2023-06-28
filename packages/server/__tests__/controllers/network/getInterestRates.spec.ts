import { describe, test, expect, vi } from "vitest";
import { getInterestRates } from "@/controllers";
import * as exports from "@/services/network";
import { NextFunction, Request, Response } from "express";

describe("Interest rates test suite", () => {
  test("pass down the error", async () => {
    const expectedError = Error("test");
    const req = {} as Request;
    const res = {} as Response;
    const next = vi.fn() as unknown as NextFunction;

    vi.spyOn(exports, "fetchInterestRates").mockRejectedValue(expectedError);

    await getInterestRates(req, res, next);

    expect(next).toBeCalledWith(expectedError);
  });
  test("pass down the error", async () => {
    const mockData = { spotAPR: 2, spotAPY: 2, dailyAPR: 0, dailyAPY: 0, dailyDataStaked: 0, spotDataStaked: 0 };
    const req = {} as Request;
    const res = { json: vi.fn() } as unknown as Response;
    const next = vi.fn() as unknown as NextFunction;

    vi.spyOn(exports, "fetchInterestRates").mockResolvedValue(mockData);

    await getInterestRates(req, res, next);

    expect(res.json).toBeCalledWith({ data: mockData });
  });
});
