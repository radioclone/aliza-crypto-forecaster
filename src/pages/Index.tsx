import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { marketData as staticMarketData } from '@/config/market/marketData';
import { FAQSection } from '@/components/FAQSection';
import { NewsSection } from '@/components/NewsSection';
import { soundManager } from "@/utils/sounds";
import { BackgroundProvider } from '@/components/backgrounds/BackgroundProvider';
import { useQuery } from '@tanstack/react-query';
import { fetchCryptoPrices, transformCryptoData } from '@/services/crypto/CryptoService';
import { BrandButton } from '@/components/BrandButton';
import { AlizaBranding } from '@/components/AlizaBranding';
import { MarketHeader } from '@/components/header/MarketHeader';
import { MarketStatus } from '@/components/market/MarketStatus';
import { MarketSentimentLED } from '@/components/market/MarketSentimentLED';
import { ChatInterface } from '@/components/chat/ChatInterface';
import { CryptoTicker } from '@/components/CryptoTicker';
import { AudioPlayer } from '@/components/audio/AudioPlayer';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { TabNavigation } from '@/components/navigation/TabNavigation';
import { MarketContent } from '@/components/market/MarketContent';

const Index = () => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');

  const { data: cryptoData, isLoading: isPricesLoading } = useQuery({
    queryKey: ['cryptoPrices'],
    queryFn: fetchCryptoPrices,
    refetchInterval: 30000,
    select: (data) => transformCryptoData(data, staticMarketData),
    meta: {
      onError: (error: Error) => {
        console.error('Error fetching crypto prices:', error);
      }
    }
  });

  const displayData = cryptoData || staticMarketData;

  const handleTabChange = () => {
    soundManager.playSound('click');
  };

  return (
    <BackgroundProvider type="space">
      <div className="min-h-screen font-sans">
        <MarketHeader />
        <div className="container mx-auto px-4">
          <MarketStatus isLoading={isPricesLoading} marketData={displayData} />
        </div>
        <CryptoTicker marketData={displayData} />
        <MarketSentimentLED marketData={displayData} />

        <main className="container mx-auto px-4 pt-32 pb-32">
          <Tabs defaultValue="market" className="space-y-8" onValueChange={handleTabChange}>
            <TabNavigation 
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
            />

            <TabsContent value="market" className="mt-6">
              <MarketContent 
                isLoading={isPricesLoading}
                displayData={displayData}
                searchQuery={searchQuery}
              />
            </TabsContent>

            <TabsContent value="education" className="mt-6 animate-fade-in">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-white">{t('education.title')}</h2>
              </div>
              <FAQSection />
            </TabsContent>

            <TabsContent value="news" className="mt-6 animate-fade-in">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-white">{t('news.title')}</h2>
              </div>
              <NewsSection />
            </TabsContent>
          </Tabs>

          <ChatInterface />
        </main>

        <BrandButton />
        <AlizaBranding />
        
        <div className="fixed bottom-4 right-4 text-xs text-white/60">
          <HoverCard>
            <HoverCardTrigger asChild>
              <a 
                href="https://www.elizaos.ai/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white/80 transition-colors"
                onClick={() => soundManager.playSound('click')}
              >
                * Attribution: Inspired by the open-source project Eliza OS
              </a>
            </HoverCardTrigger>
            <HoverCardContent className="w-80 bg-black/90 border-white/10 text-white p-4">
              <div className="space-y-2">
                <h4 className="text-sm font-semibold">Eliza OS</h4>
                <p className="text-xs text-white/80">
                  This project draws inspiration from the kickass open source movement Eliza OS. 
                  Click to visit the original project.
                </p>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
      </div>
    </BackgroundProvider>
  );
};

export default Index;