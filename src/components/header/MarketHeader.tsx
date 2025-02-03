import { Button } from "@/components/ui/button";
import { LanguageSelector } from "@/components/LanguageSelector";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Rocket } from "lucide-react";
import { TypingText } from "@/components/text/TypingText";

export const MarketHeader = () => {
  const { t } = useTranslation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <TypingText text={t('common.retroverse')} key={t('common.retroverse')} />
          </div>
          
          <div className="flex items-center gap-4">
            <Link to="/ecosystem">
              <Button variant="ghost" className="text-white/80 hover:text-white">
                <Rocket className="mr-2 h-4 w-4" />
                {t('common.launchpad')}
              </Button>
            </Link>
            <LanguageSelector />
          </div>
        </div>
      </div>
    </header>
  );
};