import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PredictionDisplayProps {
  prediction: {
    marketOutlook: string;
    personalityTraits: string;
    timing: string;
  };
  onClose: () => void;
}

export const PredictionDisplay = ({ prediction, onClose }: PredictionDisplayProps) => {
  // Create a simple fortune cookie style message from the prediction
  const fortuneMessage = `${prediction.marketOutlook.split('.')[0]}.`;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-[100] bg-black/50 backdrop-blur-sm">
      <Card className="neo-blur p-6 w-full max-w-lg mx-4 animate-fade-in relative">
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-4"
          onClick={onClose}
        >
          <X className="h-4 w-4" />
        </Button>
        
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold mb-6 text-gradient">Your Market Fortune</h2>
          <ScrollArea className="h-auto max-h-[40vh]">
            <p className="text-xl text-white/90 leading-relaxed italic">
              "{fortuneMessage}"
            </p>
          </ScrollArea>
        </div>
      </Card>
    </div>
  );
};