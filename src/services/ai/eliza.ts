import { toast } from "@/components/ui/use-toast";

export type AIMessage = {
  content: string;
  role: 'user' | 'assistant';
};

export class ElizaService {
  private static instance: ElizaService;
  
  private constructor() {}
  
  public static getInstance(): ElizaService {
    if (!ElizaService.instance) {
      ElizaService.instance = new ElizaService();
    }
    return ElizaService.instance;
  }

  async processMessage(message: string): Promise<string> {
    try {
      // Temporary mock response until we integrate with actual AI
      const responses = [
        "Based on current market analysis, BTC is showing strong support at $45,000.",
        "The crypto market is experiencing increased volatility due to recent regulatory news.",
        "I recommend monitoring ETH price action as it approaches a key resistance level.",
        "Looking at the charts, SOL has formed a bullish pattern over the last 24 hours."
      ];
      
      return responses[Math.floor(Math.random() * responses.length)];
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to process message. Please try again.",
        variant: "destructive"
      });
      throw error;
    }
  }
}