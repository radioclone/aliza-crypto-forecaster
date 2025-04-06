
import { Circle } from "lucide-react";
import { CryptoData } from "@/types/crypto";
import { useIsMobile, useIsTablet, useIsPortrait } from "@/hooks/use-mobile";

interface MarketSentimentLEDProps {
  marketData: CryptoData[];
}

export const MarketSentimentLED = ({ marketData }: MarketSentimentLEDProps) => {
  const isMarketBullish = marketData.reduce((acc, crypto) => acc + crypto.change, 0) / marketData.length > 0;
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const isPortrait = useIsPortrait();
  
  const getPositionClasses = () => {
    if (isTablet && isPortrait) return 'bottom-20 left-4';
    if (isMobile) return 'bottom-4 left-4';
    return 'bottom-4 left-4';
  };

  return (
    <div className={`fixed ${getPositionClasses()} z-[200] flex items-center gap-2`}>
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
