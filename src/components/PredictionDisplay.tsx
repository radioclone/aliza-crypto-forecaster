import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChartBar, Brain, Clock } from "lucide-react";

interface PredictionDisplayProps {
  prediction: {
    marketOutlook: string;
    personalityTraits: string;
    timing: string;
  };
}

export const PredictionDisplay = ({ prediction }: PredictionDisplayProps) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-[100] bg-black/50 backdrop-blur-sm">
      <Card className="neo-blur p-6 w-full max-w-2xl mx-4 animate-fade-in">
        <h2 className="text-2xl font-bold mb-6 text-gradient">Your Astrological Market Prediction</h2>
        
        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-white/80">
                <ChartBar className="w-5 h-5" />
                <h3 className="font-semibold">Market Outlook</h3>
              </div>
              <p className="text-white/70 leading-relaxed pl-7">
                {prediction.marketOutlook}
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-white/80">
                <Brain className="w-5 h-5" />
                <h3 className="font-semibold">Trading Personality</h3>
              </div>
              <p className="text-white/70 leading-relaxed pl-7">
                {prediction.personalityTraits}
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-white/80">
                <Clock className="w-5 h-5" />
                <h3 className="font-semibold">Optimal Timing</h3>
              </div>
              <p className="text-white/70 leading-relaxed pl-7">
                {prediction.timing}
              </p>
            </div>
          </div>
        </ScrollArea>
      </Card>
    </div>
  );
};