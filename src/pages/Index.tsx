import { useState, useEffect } from 'react';
import { PriceCard } from '@/components/PriceCard';
import { PriceChart } from '@/components/PriceChart';

// Temporary mock data - replace with real API calls
const mockData = {
  symbol: "BTC",
  price: 43567.89,
  change: 2.45,
  prediction: 45000.00,
  chartData: Array.from({ length: 24 }, (_, i) => ({
    timestamp: `${i}:00`,
    price: 43000 + Math.random() * 2000,
    predicted: 44000 + Math.random() * 2000,
  })),
};

const Index = () => {
  const [data, setData] = useState(mockData);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container py-8 px-4 mx-auto">
        <div className="space-y-2 text-center mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold tracking-tight">CryptoLens</h1>
          <p className="text-gray-500">Advanced Cryptocurrency Price Predictions</p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-8">
          <PriceCard
            symbol={data.symbol}
            price={data.price}
            change={data.change}
            prediction={data.prediction}
          />
          {/* Add more PriceCards here for other cryptocurrencies */}
        </div>

        <div className="mb-8">
          <PriceChart data={data.chartData} />
        </div>
      </div>
    </div>
  );
};

export default Index;