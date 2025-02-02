import { CryptoData } from "@/types/crypto";
import btcIcon from "cryptocurrency-icons/svg/color/btc.svg";
import ethIcon from "cryptocurrency-icons/svg/color/eth.svg";
import adaIcon from "cryptocurrency-icons/svg/color/ada.svg";
import dotIcon from "cryptocurrency-icons/svg/color/dot.svg";
import avaxIcon from "cryptocurrency-icons/svg/color/avax.svg";
import maticIcon from "cryptocurrency-icons/svg/color/matic.svg";
import linkIcon from "cryptocurrency-icons/svg/color/link.svg";
import dogeIcon from "cryptocurrency-icons/svg/color/doge.svg";
import uniIcon from "cryptocurrency-icons/svg/color/uni.svg";
import xrpIcon from "cryptocurrency-icons/svg/color/xrp.svg";
import atomIcon from "cryptocurrency-icons/svg/color/atom.svg";
import modeIcon from "/lovable-uploads/eec3796c-9458-4edb-a83c-5ff4ae7fd72d.png";

export const aiPrompts = [
  'common.aiPrompt1',
  'common.aiPrompt2',
  'common.aiPrompt3',
  'common.aiPrompt4',
  'common.aiPrompt5',
  'common.aiPrompt6',
  'common.aiPrompt7',
  'common.aiPrompt8', // New Mode Network prompt
];

// Custom Solana icon component with gradient
const SolanaIcon = () => {
  return (
    <div className="relative w-6 h-6 rounded-full overflow-hidden transform transition-transform duration-300 hover:scale-110">
      <svg viewBox="0 0 397 311" className="w-full h-full">
        <path
          d="M64.6 237.9c2.4-2.4 5.7-3.8 9.2-3.8h317.4c5.8 0 8.7 7 4.6 11.1l-62.7 62.7c-2.4 2.4-5.7 3.8-9.2 3.8H6.5c-5.8 0-8.7-7-4.6-11.1l62.7-62.7z"
          fill="#9945FF"
        />
        <path
          d="M64.6 3.8C67.1 1.4 70.4 0 73.8 0h317.4c5.8 0 8.7 7 4.6 11.1l-62.7 62.7c-2.4 2.4-5.7 3.8-9.2 3.8H6.5c-5.8 0-8.7-7-4.6-11.1L64.6 3.8z"
          fill="#8752F3"
        />
        <path
          d="M333.1 120.1c-2.4-2.4-5.7-3.8-9.2-3.8H6.5c-5.8 0-8.7 7-4.6 11.1l62.7 62.7c2.4 2.4 5.7 3.8 9.2 3.8h317.4c5.8 0 8.7-7 4.6-11.1l-62.7-62.7z"
          fill="#FC81FF"
        />
      </svg>
    </div>
  );
};

// Sample price history data
export const priceHistoryData = [
  { timestamp: "Jan", price: 42000, predicted: 43000 },
  { timestamp: "Feb", price: 45000, predicted: 46000 },
  { timestamp: "Mar", price: 47000, predicted: 48000 },
  { timestamp: "Apr", price: 49000, predicted: 50000 }
];

export const cryptoData: CryptoData[] = [
  {
    symbol: "BTC",
    name: "Bitcoin",
    icon: btcIcon,
    price: 42000,
    change: 2.5,
    prediction: 43000,
    volume24h: 35000000000,
    marketCap: 800000000000,
    priceHistory: priceHistoryData,
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    icon: ethIcon,
    price: 3000,
    change: 1.5,
    prediction: 3100,
    volume24h: 20000000000,
    marketCap: 350000000000,
    priceHistory: priceHistoryData,
  },
  {
    symbol: "ADA",
    name: "Cardano",
    icon: adaIcon,
    price: 1.2,
    change: 3.0,
    prediction: 1.25,
    volume24h: 1000000000,
    marketCap: 40000000000,
    priceHistory: priceHistoryData,
  },
  {
    symbol: "DOT",
    name: "Polkadot",
    icon: dotIcon,
    price: 20,
    change: 2.0,
    prediction: 21,
    volume24h: 500000000,
    marketCap: 20000000000,
    priceHistory: priceHistoryData,
  },
  {
    symbol: "AVAX",
    name: "Avalanche",
    icon: avaxIcon,
    price: 50,
    change: 1.0,
    prediction: 52,
    volume24h: 3000000000,
    marketCap: 12000000000,
    priceHistory: priceHistoryData,
  },
  {
    symbol: "MATIC",
    name: "Polygon",
    icon: maticIcon,
    price: 1.5,
    change: 2.5,
    prediction: 1.6,
    volume24h: 1500000000,
    marketCap: 12000000000,
    priceHistory: priceHistoryData,
  },
  {
    symbol: "LINK",
    name: "Chainlink",
    icon: linkIcon,
    price: 25,
    change: 1.5,
    prediction: 26,
    volume24h: 800000000,
    marketCap: 10000000000,
    priceHistory: priceHistoryData,
  },
  {
    symbol: "DOGE",
    name: "Dogecoin",
    icon: dogeIcon,
    price: 0.25,
    change: 3.0,
    prediction: 0.26,
    volume24h: 500000000,
    marketCap: 35000000000,
    priceHistory: priceHistoryData,
  },
  {
    symbol: "UNI",
    name: "Uniswap",
    icon: uniIcon,
    price: 30,
    change: 2.0,
    prediction: 31,
    volume24h: 2000000000,
    marketCap: 15000000000,
    priceHistory: priceHistoryData,
  },
  {
    symbol: "XRP",
    name: "Ripple",
    icon: xrpIcon,
    price: 0.5,
    change: 1.0,
    prediction: 0.52,
    volume24h: 1000000000,
    marketCap: 25000000000,
    priceHistory: priceHistoryData,
  },
  {
    symbol: "ATOM",
    name: "Cosmos",
    icon: atomIcon,
    price: 10,
    change: 2.0,
    prediction: 10.5,
    volume24h: 500000000,
    marketCap: 3000000000,
    priceHistory: priceHistoryData,
  },
  {
    symbol: "MODE",
    name: "Mode Network",
    icon: modeIcon,
    price: 5,
    change: 1.5,
    prediction: 5.5,
    volume24h: 200000000,
    marketCap: 1000000000,
    priceHistory: priceHistoryData,
  },
];
