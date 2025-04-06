
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
    if (isTablet && isPortrait) return 'bottom-20 left-3';
    if (isMobile) return 'bottom-20 left-2'; 
    return 'bottom-10 left-3';
  };

  return (
    <div className={`fixed ${getPositionClasses()} z-[45] flex items-center gap-2 px-2 py-1 neo-blur rounded-full shadow-md`}>
      <Circle
        fill={isMarketBullish ? "#3B82F6" : "#EF4444"}
        className={`h-2 w-2 ${isMarketBullish ? "text-blue-500" : "text-red-500"} animate-pulse`}
      />
      <span className="text-[10px] font-medium text-white">
        Market Sentiment
      </span>
    </div>
  );
};
