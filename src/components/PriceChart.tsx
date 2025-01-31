import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Card } from "@/components/ui/card";

interface PriceChartProps {
  data: Array<{
    timestamp: string;
    price: number;
    predicted: number;
  }>;
}

export const PriceChart = ({ data }: PriceChartProps) => {
  return (
    <Card className="p-6 h-[400px] backdrop-blur-lg bg-white/80 border border-gray-200 rounded-xl shadow-sm animate-fade-in">
      <h3 className="text-lg font-semibold mb-4">Price History & Predictions</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <XAxis 
            dataKey="timestamp" 
            stroke="#9CA3AF"
            fontSize={12}
          />
          <YAxis 
            stroke="#9CA3AF"
            fontSize={12}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              border: '1px solid #E5E7EB',
              borderRadius: '8px'
            }}
          />
          <Line 
            type="monotone" 
            dataKey="price" 
            stroke="#9CA3AF" 
            strokeWidth={2}
            dot={false}
          />
          <Line 
            type="monotone" 
            dataKey="predicted" 
            stroke="#34D399" 
            strokeWidth={2}
            strokeDasharray="5 5"
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
};