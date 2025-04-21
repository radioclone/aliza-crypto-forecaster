
import { CryptoData } from "@/types/crypto";
import { useTranslation } from "react-i18next";

interface MarketSentimentLEDProps {
  marketData: CryptoData[];
}

export const MarketSentimentLED = ({ marketData }: MarketSentimentLEDProps) => {
  const { t } = useTranslation();
  
  const isBullish = marketData.reduce((acc, crypto) => acc + crypto.change, 0) / marketData.length > 0;
  
  return (
    <div 
      className="flex items-center gap-2 text-xs text-white/80 bg-black/80 backdrop-blur-md p-2 rounded-full border border-white/10 z-40"
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        transition: 'all 0.3s ease'
      }}
    >
      <div 
        className={`w-2 h-2 rounded-full animate-pulse ${
          isBullish ? 'bg-green-500' : 'bg-red-500'
        }`}
      />
      <span>{t('common.marketSentiment')}</span>
    </div>
  );
};
