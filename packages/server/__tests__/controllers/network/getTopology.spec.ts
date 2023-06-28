import { describe, test, expect, vi } from "vitest";
import { getTopology } from "@/controllers";
import * as exports from "@/services/network";
import { NextFunction, Request, Response } from "express";

describe("Topology rates test suite", () => {
  test("pass down the error", async () => {
    const expectedError = Error("test");
    const req = {} as Request;
    const res = {} as Response;
    const next = vi.fn() as unknown as NextFunction;

    vi.spyOn(exports, "fetchTopology").mockRejectedValue(expectedError);

    await getTopology(req, res, next);

    expect(next).toBeCalledWith(expectedError);
  });
  test("pass down the error", async () => {
    const mockData = { lastRewards: [] };
    const req = {} as Request;
    const res = { json: vi.fn() } as unknown as Response;
    const next = vi.fn() as unknown as NextFunction;

    vi.spyOn(exports, "fetchTopology").mockResolvedValue(mockData);

    await getTopology(req, res, next);

    expect(res.json).toBeCalledWith({ data: mockData });
  });
});
