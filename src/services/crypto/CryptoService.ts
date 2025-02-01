import { supabase } from "@/integrations/supabase/client";

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
      `${COINGECKO_BASE_URL}/simple/price?ids=${ids}&vs_currencies=usd&include_24hr_change=true&include_24hr_vol=true&include_market_cap=true`
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch crypto prices');
    }

    const data = await response.json();
    console.log('CoinGecko API Response:', data);
    return data;
  } catch (error) {
    console.error('Error fetching crypto prices:', error);
    throw error;
  }
};

export const transformCryptoData = (rawData: any, staticData: any[]) => {
  return staticData.map(crypto => {
    const coinId = COIN_IDS[crypto.symbol as keyof typeof COIN_IDS];
    const priceData = rawData[coinId];

    if (!priceData) {
      console.log(`No price data found for ${crypto.symbol}`);
      return crypto;
    }

    return {
      ...crypto,
      price: priceData.usd || crypto.price,
      change: priceData.usd_24h_change?.toFixed(2) || crypto.change,
      volume24h: priceData.usd_24h_vol || crypto.volume24h,
      marketCap: priceData.usd_market_cap || crypto.marketCap,
      prediction: (priceData.usd * 1.1).toFixed(2) // Simple prediction logic
    };
  });
};