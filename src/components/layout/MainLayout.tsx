
import { BackgroundProvider } from '@/components/backgrounds/BackgroundProvider';
import { MarketHeader } from '@/components/header/MarketHeader';
import { MarketStatus } from '@/components/market/MarketStatus';
import { MarketSentimentLED } from '@/components/market/MarketSentimentLED';
import { CryptoTicker } from '@/components/CryptoTicker';
import { BrandButton } from '@/components/BrandButton';
import { AlizaBranding } from '@/components/AlizaBranding';
import { Attribution } from '@/components/layout/Attribution';
import { CryptoData } from '@/types/crypto';
import { useIsMobile } from "@/hooks/use-mobile";

interface MainLayoutProps {
  children: React.ReactNode;
  isLoading: boolean;
  marketData: CryptoData[];
}

export const MainLayout = ({ children, isLoading, marketData }: MainLayoutProps) => {
  const isMobile = useIsMobile();

  return (
    <BackgroundProvider type="space">
      <div className="min-h-screen font-sans flex flex-col">
        <div className="notch-area-padding">
          <MarketHeader />
        </div>
        <div className="container mx-auto px-4 max-w-full md:max-w-[90%] lg:max-w-[1280px]">
          <MarketStatus isLoading={isLoading} marketData={marketData} />
        </div>
        {!isMobile && <CryptoTicker marketData={marketData} />}
        <MarketSentimentLED marketData={marketData} />

        <main className="container mx-auto px-4 pt-24 md:pt-28 lg:pt-32 pb-24 md:pb-28 lg:pb-32 max-w-full md:max-w-[90%] lg:max-w-[1280px] flex-grow">
          {children}
        </main>

        <div className={`${isMobile ? 'pb-16' : 'pb-24'} pt-4 safe-area-inset-bottom`}>
          {/* Spacer to ensure content isn't hidden behind branding elements */}
        </div>
        
        <BrandButton />
        <AlizaBranding />
        <Attribution />
      </div>
    </BackgroundProvider>
  );
};
