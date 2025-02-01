import { CryptoData } from "@/types/crypto";
import btcIcon from "cryptocurrency-icons/svg/color/btc.svg";
import ethIcon from "cryptocurrency-icons/svg/color/eth.svg";
import solIconDefault from "cryptocurrency-icons/svg/color/sol.svg"; // Renamed import
import adaIcon from "cryptocurrency-icons/svg/color/ada.svg";
import dotIcon from "cryptocurrency-icons/svg/color/dot.svg";
import avaxIcon from "cryptocurrency-icons/svg/color/avax.svg";
import maticIcon from "cryptocurrency-icons/svg/color/matic.svg";
import linkIcon from "cryptocurrency-icons/svg/color/link.svg";
import dogeIcon from "cryptocurrency-icons/svg/color/doge.svg";
import uniIcon from "cryptocurrency-icons/svg/color/uni.svg";
import xrpIcon from "cryptocurrency-icons/svg/color/xrp.svg";
import atomIcon from "cryptocurrency-icons/svg/color/atom.svg";

// Custom Solana SVG icon with correct colors
const solIcon = `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgNDAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImEiIHgxPSIxMDAlIiB5MT0iMCUiIHgyPSIwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM5OTQ1RkY7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGQzgxRkY7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBmaWxsPSJ1cmwoI2EpIiBkPSJNMjgxLjQ4IDEzNS4yNGwtNTcuMTMgMjkuMjktNzAuMjUgMzUuOThjLTQuMjUgMi4xNy05LjE0IDIuMTctMTMuMzkgMGwtNTIuMDktMjYuNjljLTQuMjUtMi4xNyA5LjE0LTIuMTcgMTMuMzkgMGw1Mi4wOSAyNi42OWM0LjI1IDIuMTcgNi44OSA2LjM0IDYuODkgMTAuOTN2NzEuNzFsMTMuMzktNi44NVY5OC42NmMwLTQuNTkgMi42NC04Ljc2IDYuODktMTAuOTNsNTIuMDktMjYuNjljNC4yNSAyLjE3IDkuMTQtMi4xNyAxMy4zOSAwbDUyLjA5IDI2LjY5YzQuMjUgMi4xNyA2Ljg5IDYuMzQgNi44OSAxMC45M3YtNTMuMzhjMC00LjU5IDIuNjQtOC43NiA2Ljg5LTEwLjkzbDUyLjA5LTI2LjY5YzQuMjUtMi4xNyA5LjE0LTIuMTcgMTMuMzkgMHptMTI3LjM4IDBsNTIuMDkgMjYuNjljNC4yNSAyLjE3IDYuODkgNi4zNCA2Ljg5IDEwLjkzdjUzLjM4YzAgNC41OS0yLjY0IDguNzYtNi44OSAxMC45M2wtNTIuMDkgMjYuNjljLTQuMjUgMi4xNy05LjE0IDIuMTctMTMuMzkgMGwtNTIuMDktMjYuNjljLTQuMjUtMi4xNy02Ljg5LTYuMzQtNi44OS0xMC45M3YtNTMuMzhjMC00LjU5IDIuNjQtOC43NiA2Ljg5LTEwLjkzbDUyLjA5LTI2LjY5YzQuMjUtMi4xNyA5LjE0LTIuMTcgMTMuMzkgMHoiLz48L3N2Zz4=`;

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

export const aiPrompts = [
  "What's your prediction for Bitcoin's price next month?",
  "Explain the concept of DeFi in simple terms",
  "How does staking work?",
  "What are the risks of cryptocurrency investment?",
  "Compare proof of work vs proof of stake",
  "Explain what a smart contract is",
  "How do cryptocurrency wallets work?",
  "What is the impact of halving on Bitcoin?",
  "Explain the concept of gas fees",
  "What are layer 2 scaling solutions?"
];
