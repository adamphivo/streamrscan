export function isEthereumAddress(address: string): boolean {
  const ethereumRegex = /^0x[a-fA-F0-9]{40}$/g;

  return ethereumRegex.test(address);
}
