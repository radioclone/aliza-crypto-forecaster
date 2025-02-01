import { CryptoDisplayProps } from "@/types/crypto";
import { formatNumber } from "@/lib/utils";
import { ArrowUp, ArrowDown } from "lucide-react";

export const CryptoListItem = ({ data }: CryptoDisplayProps) => {
  const isPositive = data.change >= 0;

  return (
    <div className="flex items-center gap-4 p-4 neo-blur rounded-lg hover:bg-white/5 transition-all">
      <div className="flex items-center gap-3">
        {data.icon}
        <div>
          <h3 className="font-semibold text-white">{data.name}</h3>
          <span className="text-sm text-white/60">{data.symbol}</span>
        </div>
      </div>
      <div className="ml-auto flex items-center gap-6">
        <div className="text-right">
          <div className="font-medium">${formatNumber(data.price)}</div>
          <div className={`text-sm flex items-center justify-end ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
            {isPositive ? <ArrowUp className="h-3 w-3 mr-1" /> : <ArrowDown className="h-3 w-3 mr-1" />}
            {Math.abs(data.change)}%
          </div>
        </div>
        <div className="text-right hidden md:block">
          <div className="text-sm text-white/60">24h Volume</div>
          <div className="font-medium">${formatNumber(data.volume24h || 0)}</div>
        </div>
        <div className="text-right hidden lg:block">
          <div className="text-sm text-white/60">Market Cap</div>
          <div className="font-medium">${formatNumber(data.marketCap || 0)}</div>
        </div>
      </div>
    </div>
  );
};