
import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CryptoSearch } from "@/components/search/CryptoSearch";
import { useTranslation } from "react-i18next";
import { BarChart3, BookOpen, Newspaper } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface TabNavigationProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
}

export const TabNavigation = ({ searchQuery, onSearchChange }: TabNavigationProps) => {
  const { t } = useTranslation();
  const isMobile = useIsMobile();

  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
      <TabsList className="bg-white/5 border border-white/10 w-full sm:w-auto rounded-xl overflow-hidden">
        <TabsTrigger value="market" className="data-[state=active]:bg-white/10 flex-1 sm:flex-initial h-11 sm:h-10">
          <BarChart3 className="h-4 w-4 mr-2" />
          {isMobile ? "" : t('tabs.market')}
        </TabsTrigger>
        <TabsTrigger value="education" className="data-[state=active]:bg-white/10 flex-1 sm:flex-initial h-11 sm:h-10">
          <BookOpen className="h-4 w-4 mr-2" />
          {isMobile ? "" : t('tabs.education')}
        </TabsTrigger>
        <TabsTrigger value="news" className="data-[state=active]:bg-white/10 flex-1 sm:flex-initial h-11 sm:h-10">
          <Newspaper className="h-4 w-4 mr-2" />
          {isMobile ? "" : t('tabs.news')}
        </TabsTrigger>
      </TabsList>
      <CryptoSearch 
        searchQuery={searchQuery}
        onSearchChange={onSearchChange}
      />
    </div>
  );
};
