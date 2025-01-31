import { ArrowUp } from "lucide-react";

interface MarketData {
  symbol: string;
  icon: React.ReactNode;
  price: number;
  change: number;
  prediction: number;
}

interface CryptoTickerProps {
  marketData: MarketData[];
}

export const CryptoTicker = ({ marketData }: CryptoTickerProps) => {
  return (
    <div className="w-full overflow-hidden bg-black/50 border-t border-white/10">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center gap-8 animate-slide-in overflow-x-auto">
          {marketData.map((item) => (
            <div key={item.symbol} className="flex items-center gap-2 whitespace-nowrap text-white">
              {item.icon}
              <span className="font-medium">{item.symbol}</span>
              <span className="text-sm">${item.price.toLocaleString()}</span>
              <span className={`text-sm flex items-center ${item.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                {item.change >= 0 ? <ArrowUp className="h-3 w-3" /> : null}
                {item.change}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};