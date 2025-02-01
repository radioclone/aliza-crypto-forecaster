import { supabase } from "@/integrations/supabase/client";
import { CryptoData } from "@/types/crypto";

const COINGECKO_BASE_URL = 'https://api.coingecko.com/api/v3';

const COIN_IDS = {
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
  MODE: 'mode'
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
    console.log('CoinGecko API Response:', data);
    return data;
  } catch (error) {
    console.error('Error fetching crypto prices:', error);
    throw error;
  }
};

export const formatPrice = (price: number): string => {
  if (!price || isNaN(price)) return '0.00';
  
  if (price >= 1) {
    return price.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  } else {
    return price.toLocaleString(undefined, {
      minimumFractionDigits: 6,
      maximumFractionDigits: 6
    });
  }
};

export const formatLargeNumber = (num: number): string => {
  if (!num || isNaN(num)) return '0';
  
  return num.toLocaleString(undefined, {
    maximumFractionDigits: 0
  });
};

export const transformCryptoData = (rawData: any, staticData: CryptoData[]): CryptoData[] => {
  return staticData.map(crypto => {
    const coinId = COIN_IDS[crypto.symbol as keyof typeof COIN_IDS];
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