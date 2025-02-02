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
  'common.aiPrompt8', // Mode Network prompt
  'common.aiPrompt7', // Keep AiFi as last
];

// Custom Solana icon component with gradient
const SolanaIcon = () => (
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
    symbol: "MODE",
    name: "Mode Network",
    icon: (
      <div className="relative w-6 h-6 rounded-full overflow-hidden bg-gradient-to-br from-[#9b87f5] to-[#7E69AB] p-0.5 transition-transform duration-300 hover:scale-110">
        <img 
          src={modeIcon} 
          alt="MODE" 
          className="w-full h-full object-contain rounded-full transform transition-all duration-300 hover:brightness-110" 
        />
      </div>
    ),
    price: 0.85,
    change: 15.25,
    prediction: 1.00,
    volume24h: 12500000,
    marketCap: 85000000,
    priceHistory: priceHistoryData
  },
  {
    symbol: "AR",
    name: "Arweave",
    icon: (
      <div className="relative w-6 h-6 rounded-full overflow-hidden bg-black p-0.5 transition-transform duration-300 hover:scale-110">
        <img 
          src="https://nifrnbzdjizwmbgatyfr.supabase.co/storage/v1/object/public/assets_brand//Arweave%201.png" 
          alt="AR" 
          className="w-full h-full object-contain rounded-full transform transition-all duration-300 hover:brightness-110" 
        />
      </div>
    ),
    price: 12.85,
    change: 5.25,
    prediction: 15.00,
    volume24h: 22500000,
    marketCap: 425000000,
    priceHistory: priceHistoryData
  },
  {
    symbol: "SOL",
    name: "Solana",
    icon: <SolanaIcon />,
    price: 139.40,
    change: 0.35,
    prediction: 145,
    volume24h: 8420000000,
    marketCap: 62000000000,
    priceHistory: priceHistoryData
  },
  {
    symbol: "XRP",
    name: "Ripple",
    icon: <img src={xrpIcon} alt="XRP" className="h-6 w-6" />,
    price: 0.62,
    change: 1.20,
    prediction: 0.70,
    volume24h: 2420000000,
    marketCap: 32000000000,
    priceHistory: priceHistoryData
  },
  {
    symbol: "ADA",
    name: "Cardano",
    icon: <img src={adaIcon} alt="ADA" className="h-6 w-6" />,
    price: 0.85,
    change: -1.20,
    prediction: 0.95,
    volume24h: 1420000000,
    marketCap: 28000000000,
    priceHistory: priceHistoryData
  },
  {
    symbol: "DOGE",
    name: "Dogecoin",
    icon: <img src={dogeIcon} alt="DOGE" className="h-6 w-6" />,
    price: 0.12,
    change: 2.50,
    prediction: 0.15,
    volume24h: 980000000,
    marketCap: 15000000000,
    priceHistory: priceHistoryData
  },
  {
    symbol: "DOT",
    name: "Polkadot",
    icon: <img src={dotIcon} alt="DOT" className="h-6 w-6" />,
    price: 9.25,
    change: 2.15,
    prediction: 10.50,
    volume24h: 720000000,
    marketCap: 11000000000,
    priceHistory: priceHistoryData
  },
  {
    symbol: "UNI",
    name: "Uniswap",
    icon: <img src={uniIcon} alt="UNI" className="h-6 w-6" />,
    price: 7.80,
    change: -0.90,
    prediction: 8.50,
    volume24h: 520000000,
    marketCap: 8900000000,
    priceHistory: priceHistoryData
  },
  {
    symbol: "AVAX",
    name: "Avalanche",
    icon: <img src={avaxIcon} alt="AVAX" className="h-6 w-6" />,
    price: 42.30,
    change: 1.75,
    prediction: 45.00,
    volume24h: 890000000,
    marketCap: 14500000000,
    priceHistory: priceHistoryData
  },
  {
    symbol: "MATIC",
    name: "Polygon",
    icon: <img src={maticIcon} alt="MATIC" className="h-6 w-6" />,
    price: 1.15,
    change: -0.45,
    prediction: 1.25,
    volume24h: 650000000,
    marketCap: 10800000000,
    priceHistory: priceHistoryData
  },
  {
    symbol: "ATOM",
    name: "Cosmos",
    icon: <img src={atomIcon} alt="ATOM" className="h-6 w-6" />,
    price: 9.85,
    change: 1.30,
    prediction: 11.00,
    volume24h: 480000000,
    marketCap: 7200000000,
    priceHistory: priceHistoryData
  },
  {
    symbol: "LINK",
    name: "Chainlink",
    icon: <img src={linkIcon} alt="LINK" className="h-6 w-6" />,
    price: 18.90,
    change: 3.20,
    prediction: 20.00,
    volume24h: 750000000,
    marketCap: 9800000000,
    priceHistory: priceHistoryData
  }
];
