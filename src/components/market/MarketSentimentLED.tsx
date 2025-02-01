import { Circle } from "lucide-react";
import { CryptoData } from "@/types/crypto";

interface MarketSentimentLEDProps {
  marketData: CryptoData[];
}

export const MarketSentimentLED = ({ marketData }: MarketSentimentLEDProps) => {
  const isMarketBullish = marketData.reduce((acc, crypto) => acc + crypto.change, 0) / marketData.length > 0;

  return (
    <div className="fixed bottom-4 left-4 z-[200] flex items-center gap-2">
      <Circle
        fill={isMarketBullish ? "#3B82F6" : "#EF4444"}
        className={`h-3 w-3 ${isMarketBullish ? "text-blue-500" : "text-red-500"} animate-pulse`}
      />
      <span className="text-xs text-white/60">
        Market Sentiment
      </span>
    </div>
  );
};