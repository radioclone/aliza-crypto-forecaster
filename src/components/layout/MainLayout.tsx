import { BackgroundProvider } from '@/components/backgrounds/BackgroundProvider';
import { MarketHeader } from '@/components/header/MarketHeader';
import { MarketStatus } from '@/components/market/MarketStatus';
import { MarketSentimentLED } from '@/components/market/MarketSentimentLED';
import { CryptoTicker } from '@/components/CryptoTicker';
import { BrandButton } from '@/components/BrandButton';
import { AlizaBranding } from '@/components/AlizaBranding';
import { Attribution } from '@/components/layout/Attribution';
import { CryptoData } from '@/types/crypto';

interface MainLayoutProps {
  children: React.ReactNode;
  isLoading: boolean;
  marketData: CryptoData[];
}

export const MainLayout = ({ children, isLoading, marketData }: MainLayoutProps) => {
  return (
    <BackgroundProvider type="space">
      <div className="min-h-screen font-sans">
        <MarketHeader />
        <div className="container mx-auto px-4">
          <MarketStatus isLoading={isLoading} marketData={marketData} />
        </div>
        <CryptoTicker marketData={marketData} />
        <MarketSentimentLED marketData={marketData} />

        <main className="container mx-auto px-4 pt-32 pb-32">
          {children}
        </main>

        <BrandButton />
        <AlizaBranding />
        <Attribution />
      </div>
    </BackgroundProvider>
  );
};