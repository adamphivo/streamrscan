import { describe, it, expect } from "vitest";
import request from "supertest";
import { app } from "@/app";

describe("Error middleware test suite", () => {
  it("should handle thrown errors", async () => {
    const response = await request(app).get("/error");

    expect(response.status).toBe(500);
    expect(response.body.message).toBe("Test error");
  });
});
