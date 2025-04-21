
import { Button } from "@/components/ui/button";
import { LanguageSelector } from "@/components/LanguageSelector";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { Rocket } from "lucide-react";
import { TypingText } from "@/components/text/TypingText";
import { useIsMobile, useIsTablet, useIsPortrait } from "@/hooks/use-mobile";

export const MarketHeader = () => {
  const { t, i18n } = useTranslation();
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const isPortrait = useIsPortrait();
  const location = useLocation();

  // Always show Japanese for RetroVerse on the landing page ('/')
  const logoText =
    location.pathname === "/"
      ? "レトロバース"
      : t("common.retroverse");

  return (
    <header className="fixed top-0 left-0 right-0 z-header bg-black/80 backdrop-blur-sm border-b border-white/10 safe-area-inset-top">
      <div className="container mx-auto px-4">
        <div className={`flex items-center justify-between ${isMobile ? 'h-16' : (isTablet && isPortrait ? 'h-16' : 'h-18')}`}>
          <div className="flex items-center gap-2">
            <TypingText 
              key={`retroverse-${i18n.language}-${location.pathname}`} // Ensure re-render for language/route changes
              text={logoText}
              className={isMobile || (isTablet && isPortrait) ? "text-lg" : ""}
            />
            {/* Placeholder Buttons for future logo customization */}
            <Button
              variant="ghost"
              className="ml-2 px-2 py-1 text-xs text-white/60 border border-white/10"
              disabled
            >
              Placeholder
            </Button>
            <Button
              variant="ghost"
              className="ml-1 px-2 py-1 text-xs text-white/60 border border-white/10"
              disabled
            >
              Placeholder
            </Button>
          </div>
          <div className="flex items-center gap-2 md:gap-4">
            {!(isMobile || (isTablet && isPortrait)) && (
              <Link to="/ecosystem">
                <Button variant="ghost" className="text-white/80 hover:text-white">
                  <Rocket className="mr-2 h-4 w-4" />
                  {t('common.launchpad')}
                </Button>
              </Link>
            )}
            <LanguageSelector />
          </div>
        </div>
      </div>
    </header>
  );
};
