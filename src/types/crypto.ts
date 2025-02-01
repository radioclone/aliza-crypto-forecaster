export interface CryptoData {
  symbol: string;
  name: string;
  icon: React.ReactNode;
  price: number;
  change: number;
  prediction: number;
  volume24h?: number;
  marketCap?: number;
}

export interface CryptoDisplayProps {
  data: CryptoData;
}