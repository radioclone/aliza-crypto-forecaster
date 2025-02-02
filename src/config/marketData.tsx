<lov-code>
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
  { timestamp: "Feb", price: