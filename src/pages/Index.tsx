import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PriceCard } from '@/components/PriceCard';
import { PriceChart } from '@/components/PriceChart';
import { CryptoTicker } from '@/components/CryptoTicker';
import { CryptoListItem } from '@/components/CryptoListItem';
import { marketData } from '@/config/marketData';
import { ChatMessage } from '@/components/ChatMessage';
import { GoatService } from '@/services/goat/GoatService';
import { toast } from "@/components/ui/use-toast";
import { Badge } from "@/components/ui/badge";
import { Search, Loader, ArrowRightIcon } from "lucide-react";

const Index = () => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<Array<{ message: string; isUser: boolean }>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const goatService = GoatService.getInstance();

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
    <div className="min-h-screen bg-black font-sans">
      <header className="border-b border-white/10 bg-black/80 backdrop-blur-sm fixed top-0 w-full z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-semibold text-white">Crypto Analytics</h1>
            <Badge variant="secondary" className="bg-white/10">Live Market Data</Badge>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative w-64">
              <Input
                type="text"
                placeholder="Search cryptocurrencies..."
                className="pl-10 bg-white/5 border-white/10"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
            </div>
          </div>
        </div>
        
        <CryptoTicker marketData={marketData} />
      </header>

      <main className="container mx-auto px-4 pt-32 pb-32">
        <div className="grid gap-6">
          {marketData.map((crypto) => (
            <CryptoListItem key={crypto.symbol} data={crypto} />
          ))}
        </div>

        <div className="mt-8">
          <PriceChart data={[]} />
        </div>

        {/* Chat section */}
        <div className="mt-8">
          <div className="space-y-4 mb-8">
            {chatHistory.map((chat, index) => (
              <ChatMessage key={index} message={chat.message} isUser={chat.isUser} />
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/5 rounded-lg p-4 animate-pulse flex items-center gap-2">
                  <Loader className="h-4 w-4 animate-spin" />
                  <span className="text-white/60">Analyzing your question...</span>
                </div>
              </div>
            )}
          </div>

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
                    <Loader className="h-4 w-4 animate-spin" />
                  ) : (
                    <ArrowRightIcon className="h-4 w-4" />
                  )}
                </Button>
              </form>
              <p className="text-xs text-center text-white/40 mt-2">
                Ask Aliza provides educational content about cryptocurrency. Not financial advice.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;