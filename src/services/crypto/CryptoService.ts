import { CryptoData } from "@/types/crypto";

const COINGECKO_BASE_URL = 'https://api.coingecko.com/api/v3';

// Map our symbols to CoinGecko IDs
const COIN_IDS: { [key: string]: string } = {
  BTC: 'bitcoin',
  ETH: 'ethereum',
  SOL: 'solana',
  XRP: 'ripple',
  ADA: 'cardano',
  DOGE: 'dogecoin',
  DOT: 'polkadot',
  UNI: 'uniswap',
  AVAX: 'avalanche-2',
  MATIC: 'matic-network',
  ATOM: 'cosmos',
  LINK: 'chainlink',
  MODE: 'mode-token'
};

export const fetchCryptoPrices = async () => {
  try {
    const ids = Object.values(COIN_IDS).join(',');
    const response = await fetch(
      `${COINGECKO_BASE_URL}/simple/price?ids=${ids}&vs_currencies=usd&include_24hr_change=true&include_24hr_vol=true&include_market_cap=true`,
      {
        headers: {
          'Accept': 'application/json',
          'Cache-Control': 'no-cache'
        }
      }
    );
    
    if (!response.ok) {
      throw new Error(`Failed to fetch crypto prices: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching crypto prices:', error);
    throw error;
  }
};

export const transformCryptoData = (rawData: any, staticData: CryptoData[]): CryptoData[] => {
  if (!rawData) return staticData;

  return staticData.map(crypto => {
    const coinId = COIN_IDS[crypto.symbol];
    const priceData = rawData[coinId];

    if (!priceData) {
      console.log(`No price data found for ${crypto.symbol}`);
      return crypto;
    }

    const price = Number(priceData.usd) || 0;
    const change = Number(priceData.usd_24h_change?.toFixed(2)) || 0;
    const volume = Number(priceData.usd_24h_vol) || 0;
    const marketCap = Number(priceData.usd_market_cap) || 0;
    const prediction = price * 1.1; // Simple prediction logic

    return {
      ...crypto,
      price,
      change,
      volume24h: volume,
      marketCap,
      prediction
    };
  });
};