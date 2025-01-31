import { Card } from "@/components/ui/card";
import { ArrowUpIcon, ArrowDownIcon } from "lucide-react";

interface PriceCardProps {
  symbol: string;
  price: number;
  change: number;
  prediction: number;
}

export const PriceCard = ({ symbol, price, change, prediction }: PriceCardProps) => {
  const isPositive = change >= 0;

  return (
    <Card className="p-6 backdrop-blur-lg bg-white/80 border border-gray-200 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md animate-fade-in">
      <div className="flex justify-between items-start mb-4">
        <div className="space-y-1">
          <p className="text-sm text-gray-500">Current Price</p>
          <h3 className="text-2xl font-semibold tracking-tight">{symbol}</h3>
        </div>
        <span className={`flex items-center ${isPositive ? 'text-crypto-accent' : 'text-red-500'}`}>
          {isPositive ? <ArrowUpIcon className="w-4 h-4 mr-1" /> : <ArrowDownIcon className="w-4 h-4 mr-1" />}
          {Math.abs(change)}%
        </span>
      </div>
      <div className="space-y-4">
        <div>
          <p className="text-3xl font-bold">${price.toLocaleString()}</p>
        </div>
        <div className="pt-4 border-t border-gray-100">
          <p className="text-sm text-gray-500 mb-1">Predicted Price</p>
          <p className="text-xl font-semibold text-crypto-accent">${prediction.toLocaleString()}</p>
        </div>
      </div>
    </Card>
  );
};