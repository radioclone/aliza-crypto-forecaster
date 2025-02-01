import { useState } from 'react';
import { useTranslation } from 'react-i18next';
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FAQSection } from '@/components/FAQSection';
import { NewsSection } from '@/components/NewsSection';
import { MessageSquarePlus } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { AIPromptSuggestions } from '@/components/AIPromptSuggestions';
import { soundManager } from "@/utils/sounds";
import { LanguageSelector } from '@/components/LanguageSelector';
import { BackgroundProvider } from '@/components/backgrounds/BackgroundProvider';
import { VoiceSummaryButton } from '@/components/VoiceSummaryButton';

const Index = () => {
  const { toast } = useToast();
  const { t } = useTranslation();
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
    soundManager.playSound('send');

    try {
      console.log("Processing message with GoatService:", userMessage);
      const response = await goatService.processUserRequest(userMessage);
      console.log("Received response from GoatService:", response);
      
      if (response) {
        setChatHistory(prev => [...prev, { message: response, isUser: false }]);
        soundManager.playSound('receive');
        toast({
          title: t('toast.responseReceived'),
          description: t('toast.responseDescription'),
        });
      } else {
        throw new Error("No response received from GoatService");
      }
    } catch (error) {
      console.error("Error in chat:", error);
      soundManager.playSound('error');
      toast({
        title: t('toast.error'),
        description: t('toast.errorDescription'),
        variant: "destructive"
      });
      setChatHistory(prev => [...prev, { 
        message: "I apologize, but I'm having trouble processing your request at the moment. Please try again.", 
        isUser: false 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePromptSelect = (prompt: string) => {
    setMessage(prompt);
    soundManager.playSound('click');
  };

  const handleTabChange = () => {
    soundManager.playSound('click');
  };

  const handleSuggestion = () => {
    soundManager.playSound('click');
    toast({
      title: t('toast.suggestions'),
      description: t('toast.suggestionsDescription'),
    });
  };

  return (
    <BackgroundProvider type="starry">
      <div className="min-h-screen font-sans">
        <header className="border-b border-white/10 bg-black/80 backdrop-blur-sm fixed top-0 w-full z-50">
          <div className="container mx-auto px-4 py-3 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <h1 className="text-xl font-semibold text-white">{t('common.title')}</h1>
              <Badge variant="secondary" className="bg-white/10">{t('common.liveMarketData')}</Badge>
            </div>
            <div className="flex items-center gap-4">
              <LanguageSelector />
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white/10"
                onClick={handleSuggestion}
                onMouseEnter={() => soundManager.playSound('click')}
              >
                <MessageSquarePlus className="h-4 w-4 mr-2" />
                {t('common.suggestions')}
              </Button>
              <div className="relative w-64">
                <Input
                  type="text"
                  placeholder={t('common.search')}
                  className="pl-10 bg-white/5 border-white/10"
                  onClick={() => soundManager.playSound('click')}
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
              </div>
            </div>
          </div>
          
          <CryptoTicker marketData={marketData} />
        </header>

        <main className="container mx-auto px-4 pt-32 pb-32">
          <Tabs defaultValue="market" className="space-y-8" onValueChange={handleTabChange}>
            <TabsList className="bg-white/5 border border-white/10">
              <TabsTrigger value="market" className="data-[state=active]:bg-white/10">
                {t('tabs.market')}
              </TabsTrigger>
              <TabsTrigger value="education" className="data-[state=active]:bg-white/10">
                {t('tabs.education')}
              </TabsTrigger>
              <TabsTrigger value="news" className="data-[state=active]:bg-white/10">
                {t('tabs.news')}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="market" className="space-y-6 animate-fade-in">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-white">{t('market.title')}</h2>
                <VoiceSummaryButton type="market" data={marketData} />
              </div>
              <div className="grid gap-6">
                {marketData.map((crypto) => (
                  <CryptoListItem key={crypto.symbol} data={crypto} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="education" className="animate-fade-in">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-white">{t('education.title')}</h2>
                <VoiceSummaryButton type="education" data={[]} />
              </div>
              <FAQSection />
            </TabsContent>

            <TabsContent value="news" className="animate-fade-in">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-white">{t('news.title')}</h2>
                <VoiceSummaryButton type="news" data={[]} />
              </div>
              <NewsSection />
            </TabsContent>
          </Tabs>

          <div className="mt-8">
            <div className="space-y-4 mb-8">
              {chatHistory.map((chat, index) => (
                <ChatMessage key={index} message={chat.message} isUser={chat.isUser} />
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/5 rounded-lg p-4 animate-pulse flex items-center gap-2">
                    <Loader className="h-4 w-4 animate-spin" />
                    <span className="text-white/60">{t('chat.analyzing')}</span>
                  </div>
                </div>
              )}
            </div>

            <div className="fixed bottom-0 left-0 right-0 p-4 bg-black/80 backdrop-blur-sm border-t border-white/10">
              <div className="container mx-auto max-w-4xl space-y-4">
                <AIPromptSuggestions 
                  onPromptSelect={handlePromptSelect} 
                  setChatHistory={setChatHistory}
                />
                <form onSubmit={handleSubmit} className="relative">
                  <Input
                    type="text"
                    placeholder={t('chat.placeholder')}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="pr-12 bg-white/5 border-white/10 text-white placeholder:text-white/40"
                    disabled={isLoading}
                    onClick={() => soundManager.playSound('click')}
                  />
                  <Button 
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-white hover:bg-white/10"
                    size="icon"
                    variant="ghost"
                    disabled={isLoading}
                    onMouseEnter={() => soundManager.playSound('click')}
                  >
                    {isLoading ? (
                      <Loader className="h-4 w-4 animate-spin" />
                    ) : (
                      <ArrowRightIcon className="h-4 w-4" />
                    )}
                  </Button>
                </form>
                <p className="text-xs text-center text-white/40">
                  {t('chat.disclaimer')}
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </BackgroundProvider>
  );
};

export default Index;