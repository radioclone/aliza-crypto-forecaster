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
          <div className="flex items-center gap-4">
            <Link to="/ecosystem">
              <Button variant="ghost" className="text-white/80 hover:text-white">
                <Rocket className="mr-2 h-4 w-4" />
                Launchpad
              </Button>
            </Link>
          </div>
          
          <div className="flex items-center gap-4">
            <LanguageSelector />
          </div>
        </div>
      </div>
    </header>
  );
};