import { Button } from "@/components/ui/button";
import { Volume2, VolumeX } from "lucide-react";
import { useState } from "react";
import { GoatService } from "@/services/goat/GoatService";
import { toast } from "@/components/ui/use-toast";
import { soundManager } from "@/utils/sounds";

interface VoiceSummaryButtonProps {
  type: 'market' | 'education' | 'news';
  data: any;
}

export const VoiceSummaryButton = ({ type, data }: VoiceSummaryButtonProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const goatService = GoatService.getInstance();

  const generateSummary = (type: string, data: any) => {
    switch (type) {
      case 'market':
        return `Quick market update: BTC $${data[0].price.toLocaleString()} (${data[0].change}%), ETH $${data[1].price.toLocaleString()} (${data[1].change}%)`;
      case 'education':
        return "Latest crypto education: Learn about blockchain technology, DeFi, and crypto trading basics.";
      case 'news':
        return "Latest crypto headlines: Market trends, regulatory updates, and major cryptocurrency developments.";
      default:
        return "";
    }
  };

  const handleVoiceSummary = async () => {
    if (isPlaying) {
      setIsPlaying(false);
      return;
    }
    
    try {
      setIsPlaying(true);
      soundManager.playSound('click');
      const summary = generateSummary(type, data);
      
      // Cache key based on content type and data
      const cacheKey = `voice_summary_${type}_${JSON.stringify(data)}`;
      
      await goatService.processUserRequest(summary);
      
      toast({
        title: "Summary Playing",
        description: "Listen to the market summary",
      });
    } catch (error) {
      console.error("Error playing summary:", error);
      toast({
        title: "Error",
        description: "Failed to play summary",
        variant: "destructive",
      });
    } finally {
      setIsPlaying(false);
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleVoiceSummary}
      disabled={isPlaying}
      className="transition-all duration-300 hover:bg-white/10"
    >
      {isPlaying ? (
        <VolumeX className="h-5 w-5 animate-pulse" />
      ) : (
        <Volume2 className="h-5 w-5" />
      )}
    </Button>
  );
};