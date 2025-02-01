import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PriceCard } from '@/components/PriceCard';
import { PriceChart } from '@/components/PriceChart';
import { Github, ArrowRight, Bitcoin, Coins, Loader2 } from "lucide-react";
import { CryptoTicker } from '@/components/CryptoTicker';
import { ChatMessage } from '@/components/ChatMessage';
import { GoatService } from '@/services/goat/GoatService';
import { toast } from "@/components/ui/use-toast";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<Array<{ message: string; isUser: boolean }>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const goatService = GoatService.getInstance();

  // Enhanced market data with more cryptocurrencies
  const marketData = [
    { symbol: "BTC", icon: <Bitcoin className="h-6 w-6" />, price: 104350, change: -0.37, prediction: 105000 },
    { symbol: "ETH", icon: <Coins className="h-6 w-6 text-blue-400" />, price: 3240.50, change: 0.65, prediction: 3300 },
    { symbol: "SOL", icon: <Coins className="h-6 w-6 text-purple-400" />, price: 139.40, change: 0.35, prediction: 145 },
    { symbol: "ADA", icon: <Coins className="h-6 w-6 text-blue-500" />, price: 0.85, change: -1.20, prediction: 0.95 },
    { symbol: "DOT", icon: <Coins className="h-6 w-6 text-pink-400" />, price: 9.25, change: 2.15, prediction: 10.50 },
    { symbol: "AVAX", icon: <Coins className="h-6 w-6 text-red-400" />, price: 42.30, change: 1.75, prediction: 45.00 },
    { symbol: "MATIC", icon: <Coins className="h-6 w-6 text-purple-500" />, price: 1.15, change: -0.45, prediction: 1.25 },
    { symbol: "LINK", icon: <Coins className="h-6 w-6 text-blue-300" />, price: 18.90, change: 3.20, prediction: 20.00 }
  ];

  const suggestedQuestions = [
    {
      title: "What is Bitcoin?",
      subtitle: "Learn about the first cryptocurrency"
    },
    {
      title: "How does blockchain work?",
      subtitle: "Understand the technology"
    },
    {
      title: "What are NFTs?",
      subtitle: "Digital ownership explained"
    },
    {
      title: "What is DeFi?",
      subtitle: "Decentralized Finance basics"
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const userMessage = message.trim();
    setChatHistory(prev => [...prev, { message: userMessage, isUser: true }]);
    setMessage('');
    setIsLoading(true);

    try {
      const response = await goatService.processUserRequest(userMessage);
      setChatHistory(prev => [...prev, { message: response, isUser: false }]);
      toast({
        title: "Response received",
        description: "Got the latest crypto insights for you!",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to get response. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/80 backdrop-blur-sm fixed top-0 w-full z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-semibold text-white">Ask Aliza</h1>
            <Badge variant="secondary" className="bg-white/10">AI Crypto Assistant</Badge>
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
          <p className="text-white/80 mb-4">
            Your personal AI assistant for learning about cryptocurrency and blockchain technology. Ask any question about digital assets, trading, or blockchain concepts!
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="bg-white/5">Crypto Education</Badge>
            <Badge variant="outline" className="bg-white/5">Market Analysis</Badge>
            <Badge variant="outline" className="bg-white/5">Trading Basics</Badge>
            <Badge variant="outline" className="bg-white/5">Blockchain Tech</Badge>
          </div>
        </Card>

        {/* Chat History */}
        <div className="space-y-4 mb-8">
          {chatHistory.map((chat, index) => (
            <ChatMessage key={index} message={chat.message} isUser={chat.isUser} />
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white/5 rounded-lg p-4 animate-pulse flex items-center gap-2">
                <Loader2 className="h-4 w-4 animate-spin" />
                <span className="text-white/60">Analyzing your question...</span>
              </div>
            </div>
          )}
        </div>

        {/* Suggested Questions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {suggestedQuestions.map((question, index) => (
            <Card 
              key={index}
              className="p-4 hover:bg-white/5 transition-colors cursor-pointer neo-blur"
              onClick={() => {
                setMessage(question.title);
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
                placeholder="Ask anything about crypto..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="pr-12 bg-white/5 border-white/10 text-white placeholder:text-white/40"
                disabled={isLoading}
              />
              <Button 
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 text-white hover:bg-white/10"
                size="icon"
                variant="ghost"
                disabled={isLoading}
              >
                {isLoading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <ArrowRight className="h-4 w-4" />
                )}
              </Button>
            </form>
            <p className="text-xs text-center text-white/40 mt-2">
              Ask Aliza provides educational content about cryptocurrency. Not financial advice.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
