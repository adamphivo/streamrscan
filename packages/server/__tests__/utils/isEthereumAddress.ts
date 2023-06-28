import { describe, it, expect } from "vitest";
import { isEthereumAddress } from "@/utils/isEthereumAddress";

describe("iSethereum address test suite", () => {
  it("should return true if the address is correct", () => {
    expect(isEthereumAddress("0xe53023347b757a04e4130ae8948f1fb7b2632d9e")).toBe(true);
  });
  it("should ignore case", () => {
    expect(isEthereumAddress("0xe53023347b757a04E4130AE8948f1fb7b2632d9e")).toBe(true);
  });
  it("should return false if the address is incorrect", () => {
    // Missing char
    expect(isEthereumAddress("0xe53023347b757a04E4130AE8948f1fb7b2632d9")).toBe(false);
    // Wrong char
    expect(isEthereumAddress("1xe53023347b757a04E4130AE8948f1fb7b2632d9T")).toBe(false);
    // Empty address
    expect(isEthereumAddress("")).toBe(false);
  });
});
