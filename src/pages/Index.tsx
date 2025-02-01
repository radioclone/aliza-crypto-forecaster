import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Loader } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { marketData as staticMarketData } from '@/config/marketData';
import { FAQSection } from '@/components/FAQSection';
import { NewsSection } from '@/components/NewsSection';
import { soundManager } from "@/utils/sounds";
import { BackgroundProvider } from '@/components/backgrounds/BackgroundProvider';
import { useQuery } from '@tanstack/react-query';
import { fetchCryptoPrices, transformCryptoData } from '@/services/crypto/CryptoService';
import { BrandButton } from '@/components/BrandButton';
import { CryptoListItem } from '@/components/CryptoListItem';
import { MarketHeader } from '@/components/header/MarketHeader';
import { MarketStatus } from '@/components/market/MarketStatus';
import { ChatInterface } from '@/components/chat/ChatInterface';
import { CryptoTicker } from '@/components/CryptoTicker';

const Index = () => {
  const { t } = useTranslation();

  const { data: cryptoData, isLoading: isPricesLoading, error: pricesError } = useQuery({
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
              </div>
              {isPricesLoading ? (
                <div className="flex items-center justify-center py-12">
                  <Loader className="h-8 w-8 animate-spin text-white/60" />
                </div>
              ) : (
                <div className="grid gap-6">
                  {displayData.map((crypto) => (
                    <CryptoListItem key={crypto.symbol} data={crypto} />
                  ))}
                </div>
              )}
            </TabsContent>

            <TabsContent value="education" className="animate-fade-in">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-white">{t('education.title')}</h2>
              </div>
              <FAQSection />
            </TabsContent>

            <TabsContent value="news" className="animate-fade-in">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-white">{t('news.title')}</h2>
              </div>
              <NewsSection />
            </TabsContent>
          </Tabs>

          <ChatInterface />
        </main>
        <BrandButton />
      </div>
    </BackgroundProvider>
  );
};

export default Index;