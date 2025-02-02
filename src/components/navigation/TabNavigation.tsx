import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTranslation } from "react-i18next";

export const TabNavigation = () => {
  const { t } = useTranslation();
  
  return (
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
  );
};