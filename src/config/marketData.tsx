import { CryptoData } from "@/types/crypto";
import btcIcon from "cryptocurrency-icons/svg/color/btc.svg";
import ethIcon from "cryptocurrency-icons/svg/color/eth.svg";
import solIcon from "cryptocurrency-icons/svg/color/sol.svg";
import adaIcon from "cryptocurrency-icons/svg/color/ada.svg";
import dotIcon from "cryptocurrency-icons/svg/color/dot.svg";
import avaxIcon from "cryptocurrency-icons/svg/color/avax.svg";
import maticIcon from "cryptocurrency-icons/svg/color/matic.svg";
import linkIcon from "cryptocurrency-icons/svg/color/link.svg";

// Sample price history data
export const priceHistoryData = [
  { timestamp: "Jan", price: 42000, predicted: 43000 },
  { timestamp: "Feb", price: 44500, predicted: 45000 },
  { timestamp: "Mar", price: 47000, predicted: 48000 },
  { timestamp: "Apr", price: 45000, predicted: 46000 },
  { timestamp: "May", price: 48000, predicted: 49000 },
  { timestamp: "Jun", price: 50000, predicted: 52000 },
];

export const marketData: CryptoData[] = [
  {
    symbol: "BTC",
    name: "Bitcoin",
    icon: <img src={btcIcon} alt="BTC" className="h-6 w-6" />,
    price: 104350,
    change: -0.37,
    prediction: 105000,
    volume24h: 48320000000,
    marketCap: 2050000000000,
    priceHistory: priceHistoryData
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    icon: <img src={ethIcon} alt="ETH" className="h-6 w-6" />,
    price: 3240.50,
    change: 0.65,
    prediction: 3300,
    volume24h: 15420000000,
    marketCap: 389000000000,
    priceHistory: priceHistoryData
  },
  {
    symbol: "SOL",
    name: "Solana",
    icon: <img src={solIcon} alt="SOL" className="h-6 w-6" />,
    price: 139.40,
    change: 0.35,
    prediction: 145,
    priceHistory: priceHistoryData
  },
  {
    symbol: "ADA",
    name: "Cardano",
    icon: <img src={adaIcon} alt="ADA" className="h-6 w-6" />,
    price: 0.85,
    change: -1.20,
    prediction: 0.95,
    priceHistory: priceHistoryData
  },
  {
    symbol: "DOT",
    name: "Polkadot",
    icon: <img src={dotIcon} alt="DOT" className="h-6 w-6" />,
    price: 9.25,
    change: 2.15,
    prediction: 10.50,
    priceHistory: priceHistoryData
  },
  {
    symbol: "AVAX",
    name: "Avalanche",
    icon: <img src={avaxIcon} alt="AVAX" className="h-6 w-6" />,
    price: 42.30,
    change: 1.75,
    prediction: 45.00,
    priceHistory: priceHistoryData
  },
  {
    symbol: "MATIC",
    name: "Polygon",
    icon: <img src={maticIcon} alt="MATIC" className="h-6 w-6" />,
    price: 1.15,
    change: -0.45,
    prediction: 1.25,
    priceHistory: priceHistoryData
  },
  {
    symbol: "LINK",
    name: "Chainlink",
    icon: <img src={linkIcon} alt="LINK" className="h-6 w-6" />,
    price: 18.90,
    change: 3.20,
    prediction: 20.00,
    priceHistory: priceHistoryData
  }
];
