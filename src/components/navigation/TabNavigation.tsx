import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTranslation } from "react-i18next";
import { CryptoSearch } from "@/components/search/CryptoSearch";

interface TabNavigationProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
}

export const TabNavigation = ({ searchQuery, onSearchChange }: TabNavigationProps) => {
  const { t } = useTranslation();
  
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 w-full">
      <TabsList className="bg-white/5 border border-white/10">
        <TabsTrigger 
          value="market" 
          className="text-[#D3E4FD]/80 backdrop-blur-sm data-[state=active]:bg-white/10"
        >
          {t('tabs.market')}
        </TabsTrigger>
        <TabsTrigger 
          value="education" 
          className="text-[#D3E4FD]/80 backdrop-blur-sm data-[state=active]:bg-white/10"
        >
          {t('tabs.education')}
        </TabsTrigger>
        <TabsTrigger 
          value="news" 
          className="text-[#D3E4FD]/80 backdrop-blur-sm data-[state=active]:bg-white/10"
        >
          {t('tabs.news')}
        </TabsTrigger>
      </TabsList>
      <CryptoSearch 
        searchQuery={searchQuery}
        onSearchChange={onSearchChange}
      />
    </div>
  );
};