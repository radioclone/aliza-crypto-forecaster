import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CryptoSearch } from "@/components/search/CryptoSearch";
import { useTranslation } from "react-i18next";
import { BarChart3, BookOpen, Newspaper, ArrowLeftRight } from "lucide-react";

interface TabNavigationProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
}

export const TabNavigation = ({ searchQuery, onSearchChange }: TabNavigationProps) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <TabsList className="bg-white/5 border border-white/10">
        <TabsTrigger value="market" className="data-[state=active]:bg-white/10">
          <BarChart3 className="h-4 w-4 mr-2" />
          {t('tabs.market')}
        </TabsTrigger>
        <TabsTrigger value="bridge" className="data-[state=active]:bg-white/10">
          <ArrowLeftRight className="h-4 w-4 mr-2" />
          {t('tabs.bridge', 'Bridge')}
        </TabsTrigger>
        <TabsTrigger value="education" className="data-[state=active]:bg-white/10">
          <BookOpen className="h-4 w-4 mr-2" />
          {t('tabs.education')}
        </TabsTrigger>
        <TabsTrigger value="news" className="data-[state=active]:bg-white/10">
          <Newspaper className="h-4 w-4 mr-2" />
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