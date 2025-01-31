import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PriceCard } from '@/components/PriceCard';
import { PriceChart } from '@/components/PriceChart';
import { Github, ArrowUp } from "lucide-react";

const Index = () => {
  const [message, setMessage] = useState('');

  // Temporary mock data - will be replaced with real API data
  const marketData = [
    { symbol: "BTC", price: 104350, change: -0.37, prediction: 105000 },
    { symbol: "ETH", price: 3240.50, change: 0.65, prediction: 3300 },
    { symbol: "SOL", price: 139.40, change: 0.35, prediction: 145 }
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm fixed top-0 w-full z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-semibold">CryptoLens</h1>
            <Button variant="outline" size="sm">Start New Chat</Button>
          </div>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon">
              <Github className="h-5 w-5" />
            </Button>
          </a>
        </div>
        
        {/* Market Ticker */}
        <div className="w-full overflow-hidden bg-white/50 border-t">
          <div className="container mx-auto px-4 py-2">
            <div className="flex items-center gap-8 animate-slide-in overflow-x-auto">
              {marketData.map((item) => (
                <div key={item.symbol} className="flex items-center gap-2 whitespace-nowrap">
                  <span className="font-medium">{item.symbol}</span>
                  <span className="text-sm">${item.price.toLocaleString()}</span>
                  <span className={`text-sm flex items-center ${item.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {item.change >= 0 ? <ArrowUp className="h-3 w-3" /> : null}
                    {item.change}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 pt-32 pb-8">
        {/* Welcome Card */}
        <Card className="p-6 mb-8 backdrop-blur-lg bg-white/80">
          <h2 className="text-2xl font-bold mb-4">Welcome to CryptoLens powered by AI!</h2>
          <p className="text-gray-600">
            Open source AI chatbot that uses function calling to render relevant TradingView crypto
            market widgets. Built with Vercel AI SDK, TradingView Widgets, and powered by
            advanced machine learning models.
          </p>
        </Card>

        {/* Predefined Questions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {predefinedQuestions.map((question, index) => (
            <Card 
              key={index}
              className="p-4 hover:bg-gray-50 transition-colors cursor-pointer backdrop-blur-lg bg-white/80"
            >
              <h3 className="font-medium">{question.title}</h3>
              <p className="text-sm text-gray-500">{question.subtitle}</p>
            </Card>
          ))}
        </div>

        {/* Chat Input */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-sm border-t">
          <div className="container mx-auto max-w-4xl">
            <div className="relative">
              <Input
                type="text"
                placeholder="Send a message."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="pr-12"
              />
              <Button 
                className="absolute right-2 top-1/2 -translate-y-1/2"
                size="icon"
                variant="ghost"
              >
                <ArrowUp className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-xs text-center text-gray-500 mt-2">
              CryptoLens may provide inaccurate information and does not provide investment advice.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;