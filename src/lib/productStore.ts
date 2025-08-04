// Simple product store for testing purposes
// In a real app, this would be handled by a backend API

import { mockProducts } from '@/data/products';

// Type definition for a product
export interface Product {
  id: string;
  title: string;
  summary: string;
  description: string;
  category: string;
  priceUSD: number;
  network: string;
  priceCrypto: number;
  previewImage: string | null;
  seller: string;
  dateCreated: string;
}

// In-memory storage for products (resets on page refresh)
let products: Product[] = [...mockProducts];

// Generate a random product ID
const generateProductId = () => {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let result = 'prd_';
  for (let i = 0; i < 16; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

// Generate a mock seller address
const generateSellerAddress = () => {
  const chars = 'abcdef0123456789';
  let result = '0x';
  for (let i = 0; i < 4; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  result += '...';
  for (let i = 0; i < 4; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

// Calculate crypto price based on USD price and network
const calculateCryptoPrice = (usdPrice: number, network: string): number => {
  // Mock exchange rates (in a real app, these would be fetched from an API)
  const exchangeRates = {
    ethereum: 2500, // 1 ETH = $2500
    polygon: 0.85, // 1 MATIC = $0.85
    bsc: 310, // 1 BNB = $310
  };
  
  const rate = exchangeRates[network as keyof typeof exchangeRates] || 1;
  return parseFloat((usdPrice / rate).toFixed(6));
};

// Add a new product
export const addProduct = (productData: {
  title: string;
  summary: string;
  description: string;
  category: string;
  priceUSD: string;
  network: string;
  file: File | null;
  previewImage: File | null;
}, sellerAddress?: string): Product => {
  const newProduct: Product = {
    id: generateProductId(),
    title: productData.title,
    summary: productData.summary,
    description: productData.description,
    category: productData.category,
    priceUSD: parseFloat(productData.priceUSD),
    network: productData.network,
    priceCrypto: calculateCryptoPrice(parseFloat(productData.priceUSD), productData.network),
    previewImage: productData.previewImage ? URL.createObjectURL(productData.previewImage) : null,
    seller: sellerAddress || generateSellerAddress(), // Use provided address or generate mock
    dateCreated: new Date().toISOString().split('T')[0], // Today's date in YYYY-MM-DD format
  };

  // Add to the beginning of the array so new products appear first
  products.unshift(newProduct);
  
  return newProduct;
};

// Get all products
export const getProducts = (): Product[] => {
  return products;
};

// Get a single product by ID
export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};
