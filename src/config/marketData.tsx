import { Bitcoin, Coins } from "lucide-react";
import { CryptoData } from "@/types/crypto";

export const marketData: CryptoData[] = [
  {
    symbol: "BTC",
    name: "Bitcoin",
    icon: <Bitcoin className="h-6 w-6 text-orange-500" />,
    price: 104350,
    change: -0.37,
    prediction: 105000,
    volume24h: 48320000000,
    marketCap: 2050000000000
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    icon: <Coins className="h-6 w-6 text-blue-400" />,
    price: 3240.50,
    change: 0.65,
    prediction: 3300,
    volume24h: 15420000000,
    marketCap: 389000000000
  },
  { symbol: "SOL", name: "Solana", icon: <Coins className="h-6 w-6 text-purple-400" />, price: 139.40, change: 0.35, prediction: 145 },
  { symbol: "ADA", name: "Cardano", icon: <Coins className="h-6 w-6 text-blue-500" />, price: 0.85, change: -1.20, prediction: 0.95 },
  { symbol: "DOT", name: "Polkadot", icon: <Coins className="h-6 w-6 text-pink-400" />, price: 9.25, change: 2.15, prediction: 10.50 },
  { symbol: "AVAX", name: "Avalanche", icon: <Coins className="h-6 w-6 text-red-400" />, price: 42.30, change: 1.75, prediction: 45.00 },
  { symbol: "MATIC", name: "Polygon", icon: <Coins className="h-6 w-6 text-purple-500" />, price: 1.15, change: -0.45, prediction: 1.25 },
  { symbol: "LINK", name: "Chainlink", icon: <Coins className="h-6 w-6 text-blue-300" />, price: 18.90, change: 3.20, prediction: 20.00 }
];
