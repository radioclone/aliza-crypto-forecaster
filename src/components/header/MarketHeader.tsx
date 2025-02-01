import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, MessageSquarePlus } from "lucide-react";
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

  return (
    <header className="border-b border-white/10 bg-black/80 backdrop-blur-sm fixed top-0 w-full z-50">
      <div className="container mx-auto px-4 h-14 flex justify-between items-center">
        <div className="flex items-center gap-4 h-full py-2">
          <img 
            src="https://nifrnbzdjizwmbgatyfr.supabase.co/storage/v1/object/public/assets_brand//Retroverse%20Logo%20Animation.gif"
            alt="Retroverse"
            className="h-full w-auto object-contain"
          />
        </div>
        
        <div className="flex items-center gap-4">
          <LanguageSelector />
          <Button
            variant="ghost"
            size="sm"
            className="text-white hover:bg-white/10"
            onClick={handleSuggestion}
            onMouseEnter={() => soundManager.playSound('click')}
          >
            <MessageSquarePlus className="h-4 w-4 mr-2" />
            {t('common.suggestions')}
          </Button>
          <div className="relative w-64">
            <Input
              type="text"
              placeholder={t('common.search')}
              className="pl-10 bg-white/5 border-white/10"
              onClick={() => soundManager.playSound('click')}
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
          </div>
        </div>
      </div>
    </header>
  );
};