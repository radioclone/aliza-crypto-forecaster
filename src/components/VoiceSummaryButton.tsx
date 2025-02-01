import { Button } from "@/components/ui/button";
import { Volume2, VolumeX, Loader2, Volume1 } from "lucide-react";
import { useState, useEffect } from "react";
import { GoatService } from "@/services/goat/GoatService";
import { toast } from "@/components/ui/use-toast";
import { soundManager } from "@/utils/sounds";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface VoiceSummaryButtonProps {
  type: 'market' | 'education' | 'news';
  data: any;
}

export const VoiceSummaryButton = ({ type, data }: VoiceSummaryButtonProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const goatService = GoatService.getInstance();

  useEffect(() => {
    const checkInitialization = async () => {
      try {
        await goatService.processUserRequest("test");
        setIsInitialized(true);
      } catch (error) {
        console.error("Voice service initialization failed:", error);
        setIsInitialized(false);
      }
    };
    checkInitialization();
  }, []);

  const generateSummary = (type: string, data: any) => {
    switch (type) {
      case 'market':
        return `Quick market update: MODE $${data[2].price.toLocaleString()} (${data[2].change}%), along with BTC $${data[0].price.toLocaleString()} and ETH $${data[1].price.toLocaleString()}`;
      case 'education':
        return "Latest Mode Network updates: Learn about Mode's unique Sequencer Fee Sharing program and how it benefits users.";
      case 'news':
        return "Latest Mode Network news: Updates on network growth, partnerships, and ecosystem developments.";
      default:
        return "";
    }
  };

  const handleVoiceSummary = async () => {
    if (isPlaying || isLoading) {
      return;
    }
    
    try {
      setIsLoading(true);
      soundManager.playSound('click');
      const summary = generateSummary(type, data);
      
      setIsPlaying(true);
      await goatService.processUserRequest(summary);
      
      toast({
        title: "Voice Summary",
        description: "Playing market summary...",
      });
    } catch (error) {
      console.error("Error playing summary:", error);
      toast({
        title: "Error",
        description: "Failed to play summary. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
      setTimeout(() => setIsPlaying(false), 100);
    }
  };

  const getButtonState = () => {
    if (!isInitialized) {
      return {
        icon: <VolumeX className="h-5 w-5" />,
        tooltip: "Voice service not available",
        disabled: true
      };
    }
    if (isLoading) {
      return {
        icon: <Loader2 className="h-5 w-5 animate-spin" />,
        tooltip: "Loading voice...",
        disabled: true
      };
    }
    if (isPlaying) {
      return {
        icon: <Volume1 className="h-5 w-5 animate-pulse" />,
        tooltip: "Playing summary...",
        disabled: true
      };
    }
    return {
      icon: <Volume2 className="h-5 w-5" />,
      tooltip: "Click to play voice summary",
      disabled: false
    };
  };

  const buttonState = getButtonState();

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleVoiceSummary}
            disabled={buttonState.disabled}
            className="transition-all duration-300 hover:bg-white/10 relative"
          >
            {buttonState.icon}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{buttonState.tooltip}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};