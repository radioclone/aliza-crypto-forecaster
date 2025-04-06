
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Tabs } from "@/components/ui/tabs";
import { marketData as staticMarketData } from '@/config/market/marketData';
import { soundManager } from "@/utils/sounds";
import { useQuery } from '@tanstack/react-query';
import { fetchCryptoPrices, transformCryptoData } from '@/services/crypto/CryptoService';
import { ChatInterface } from '@/components/chat/ChatInterface';
import { TabNavigation } from '@/components/navigation/TabNavigation';
import { TabContent } from '@/components/tabs/TabContent';
import { MainLayout } from '@/components/layout/MainLayout';
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const isMobile = useIsMobile();

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
    <MainLayout isLoading={isPricesLoading} marketData={displayData}>
      <Tabs defaultValue="market" className="space-y-4 md:space-y-8" onValueChange={handleTabChange}>
        <TabNavigation 
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />
        <TabContent 
          isLoading={isPricesLoading}
          displayData={displayData}
          searchQuery={searchQuery}
        />
      </Tabs>
      <div className={isMobile ? "mt-8" : ""}>
        <ChatInterface />
      </div>
    </MainLayout>
  );
};

export default Index;
