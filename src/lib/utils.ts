// Exchange rates - in a real app, these would come from an API
export const exchangeRates = {
  ethereum: 2500, // 1 ETH = $2500
  polygon: 0.85, // 1 MATIC = $0.85
  bsc: 310, // 1 BNB = $310
} as const;

export type NetworkType = keyof typeof exchangeRates;

/**
 * Calculate equivalent cryptocurrency price from USD amount
 * @param usdPrice - Price in USD as string
 * @param network - Network identifier
 * @returns Formatted price string with 6 decimal places
 */
export const calculateEquivalentPrice = (
  usdPrice: string,
  network: string
): string => {
  const price = parseFloat(usdPrice);
  if (isNaN(price) || !network || !exchangeRates[network as NetworkType]) {
    return '0.00';
  }

  const rate = exchangeRates[network as NetworkType];
  const equivalent = price / rate;
  return equivalent.toFixed(6);
};

/**
 * Get network label from network value
 * @param networkValue - Network identifier
 * @returns Human-readable network label
 */
export const getNetworkLabel = (networkValue: string): string => {
  const networks = {
    ethereum: 'Ethereum (ETH)',
    polygon: 'Polygon (MATIC)',
    bsc: 'Binance Smart Chain (BNB)',
  };

  return networks[networkValue as NetworkType] || '';
};

/**
 * Get currency symbol from network value
 * @param networkValue - Network identifier
 * @returns Currency symbol (e.g., 'ETH', 'MATIC', 'BNB')
 */
export const getCurrencySymbol = (networkValue: string): string => {
  const symbols = {
    ethereum: 'ETH',
    polygon: 'MATIC',
    bsc: 'BNB',
  };

  return symbols[networkValue as NetworkType] || '';
};

/**
 * Format price display with both crypto and USD amounts
 * @param usd - Price in USD
 * @param crypto - Price in cryptocurrency
 * @param network - Network identifier
 * @returns Object with formatted USD and crypto prices
 */
export const formatPrice = (usd: number, crypto: number, network: string) => {
  return {
    usd: `$${usd.toFixed(2)}`,
    crypto: `${crypto.toFixed(6)} ${getCurrencySymbol(network)}`
  };
};

/**
 * Truncate wallet address for display
 * @param address - Full wallet address
 * @returns Truncated address in format "0x1234...abcd"
 */
export const truncateAddress = (address: string): string => {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};
