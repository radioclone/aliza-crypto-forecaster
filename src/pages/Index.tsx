import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PriceCard } from '@/components/PriceCard';
import { PriceChart } from '@/components/PriceChart';
import { Github, ArrowRight, Bitcoin, Coins } from "lucide-react";
import { CryptoTicker } from '@/components/CryptoTicker';
import { ChatMessage } from '@/components/ChatMessage';
import { GoatService } from '@/services/goat/GoatService';
import { toast } from "@/components/ui/use-toast";

const Index = () => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<Array<{ message: string; isUser: boolean }>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const goatService = GoatService.getInstance();

  // Temporary mock data - will be replaced with real data
  const marketData = [
    { symbol: "BTC", icon: <Bitcoin className="h-6 w-6" />, price: 104350, change: -0.37, prediction: 105000 },
    { symbol: "ETH", icon: <Coins className="h-6 w-6" />, price: 3240.50, change: 0.65, prediction: 3300 },
    { symbol: "SOL", icon: <Coins className="h-6 w-6" />, price: 139.40, change: 0.35, prediction: 145 }
  ];

  const predefinedQuestions = [
    {
      title: "How is the crypto market",
      subtitle: "performing today by sector?"
    },
    {
      title: "What are Bitcoin's",
      subtitle: "latest metrics?"
    },
    {
      title: "Show me a crypto chart",
      subtitle: "for $BTC"
    },
    {
      title: "What is the price",
      subtitle: "of Ethereum?"
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Add user message to chat
    setChatHistory(prev => [...prev, { message, isUser: true }]);
    setIsLoading(true);

    try {
      const response = await goatService.processUserRequest(message);
      setChatHistory(prev => [...prev, { message: response, isUser: false }]);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to get response. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
      setMessage('');
    }
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/80 backdrop-blur-sm fixed top-0 w-full z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-semibold text-white">Ask Aliza</h1>
            <Button variant="outline" size="sm" className="border-white/20 hover:bg-white/5">
              Start New Chat
            </Button>
          </div>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/5">
              <Github className="h-5 w-5" />
            </Button>
          </a>
        </div>
        
        <CryptoTicker marketData={marketData} />
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 pt-32 pb-32">
        {/* Welcome Card */}
        <Card className="p-6 mb-8 neo-blur">
          <h2 className="text-2xl font-bold mb-4 text-gradient">Welcome to Ask Aliza powered by AI!</h2>
          <p className="text-white/80">
            Open source AI chatbot that uses function calling to render relevant TradingView crypto
            market widgets. Built with Vercel AI SDK, TradingView Widgets, and powered by
            advanced machine learning models.
          </p>
        </Card>

        {/* Chat History */}
        <div className="space-y-4 mb-8">
          {chatHistory.map((chat, index) => (
            <ChatMessage key={index} message={chat.message} isUser={chat.isUser} />
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white/5 rounded-lg p-4 animate-pulse">
                <div className="h-4 w-24 bg-white/10 rounded"></div>
              </div>
            </div>
          )}
        </div>

        {/* Predefined Questions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {predefinedQuestions.map((question, index) => (
            <Card 
              key={index}
              className="p-4 hover:bg-white/5 transition-colors cursor-pointer neo-blur"
              onClick={() => {
                setMessage(question.title + " " + question.subtitle);
              }}
            >
              <h3 className="font-medium text-white">{question.title}</h3>
              <p className="text-sm text-white/60">{question.subtitle}</p>
            </Card>
          ))}
        </div>

        {/* Chat Input */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-black/80 backdrop-blur-sm border-t border-white/10">
          <div className="container mx-auto max-w-4xl">
            <form onSubmit={handleSubmit} className="relative">
              <Input
                type="text"
                placeholder="Send a message."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="pr-12 bg-white/5 border-white/10 text-white placeholder:text-white/40"
              />
              <Button 
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 text-white hover:bg-white/10"
                size="icon"
                variant="ghost"
                disabled={isLoading}
              >
                <ArrowRight className="h-4 w-4" />
              </Button>
            </form>
            <p className="text-xs text-center text-white/40 mt-2">
              Ask Aliza may provide inaccurate information and does not provide investment advice.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
