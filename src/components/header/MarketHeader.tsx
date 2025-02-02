import { Button } from "@/components/ui/button";
import { MessageSquarePlus } from "lucide-react";
import { useTranslation } from "react-i18next";
import { LanguageSelector } from '@/components/LanguageSelector';
import { soundManager } from "@/utils/sounds";
import { useToast } from "@/components/ui/use-toast";

export const MarketHeader = () => {
  const { t } = useTranslation();
  const { toast } = useToast();

  const handleSuggestion = () => {
    soundManager.playSound('click');
    toast({
      title: t('toast.suggestions'),
      description: t('toast.suggestionsDescription'),
    });
  };

  const handleConnectWallet = () => {
    soundManager.playSound('click');
    toast({
      title: "Coming Soon",
      description: "Wallet connection functionality will be available soon.",
    });
  };

  return (
    <header className="border-b border-white/10 bg-black/80 backdrop-blur-sm fixed top-0 w-full z-50">
      <div className="container mx-auto px-4 h-16 flex justify-between items-center">
        <div className="flex items-center gap-4 h-full">
          <div className="h-full flex items-center">
            <img 
              src="https://nifrnbzdjizwmbgatyfr.supabase.co/storage/v1/object/public/assets_brand//Retroverse%20Logo%20Animation.gif"
              alt="Retroverse"
              className="h-full w-auto object-contain"
            />
          </div>
        </div>
        
        <div className="flex items-center gap-2 md:gap-4">
          <LanguageSelector />
          <Button
            variant="ghost"
            size="sm"
            className="text-white hover:bg-white/10 hidden sm:flex"
            onClick={handleSuggestion}
            onMouseEnter={() => soundManager.playSound('click')}
          >
            <MessageSquarePlus className="h-4 w-4 mr-2" />
            <span className="hidden md:inline">{t('common.suggestions')}</span>
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="text-white border-white/20 hover:bg-white/10 rounded-full px-6"
            onClick={handleConnectWallet}
            onMouseEnter={() => soundManager.playSound('hover')}
          >
            Connect Wallet
          </Button>
        </div>
      </div>
    </header>
  );
};