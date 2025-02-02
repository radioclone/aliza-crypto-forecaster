import { Button } from "@/components/ui/button";
import { LanguageSelector } from "@/components/LanguageSelector";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Rocket } from "lucide-react";

export const MarketHeader = () => {
  const { t } = useTranslation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/eec3796c-9458-4edb-a83c-5ff4ae7fd72d.png" 
              alt="Logo" 
              className="h-8 w-8"
            />
            <h1 className="text-xl font-bold text-white">
              {t('common.appName')}
            </h1>
          </Link>
          
          <div className="flex items-center gap-4">
            <Link to="/ecosystem">
              <Button variant="ghost" className="text-white/80 hover:text-white">
                <Rocket className="mr-2 h-4 w-4" />
                Ecosystem
              </Button>
            </Link>
            <LanguageSelector />
          </div>
        </div>
      </div>
    </header>
  );
};