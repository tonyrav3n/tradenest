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
