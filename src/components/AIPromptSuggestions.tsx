import { Button } from "./ui/button";
import { Sparkles } from "lucide-react";
import { aiPrompts } from "@/config/marketData";
import { useState } from "react";
import { soundManager } from "@/utils/sounds";
import { useTranslation } from "react-i18next";

interface AIPromptSuggestionsProps {
  onPromptSelect: (prompt: string) => void;
}

export const AIPromptSuggestions = ({ onPromptSelect }: AIPromptSuggestionsProps) => {
  const { t } = useTranslation();
  const [displayedPrompts, setDisplayedPrompts] = useState<string[]>(() => {
    const shuffled = [...aiPrompts].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  });

  const refreshPrompts = () => {
    soundManager.playSound('click');
    const shuffled = [...aiPrompts].sort(() => 0.5 - Math.random());
    setDisplayedPrompts(shuffled.slice(0, 3));
  };

  const handlePromptClick = (promptKey: string) => {
    soundManager.playSound('click');
    onPromptSelect(t(promptKey));
  };

  const handleHover = () => {
    soundManager.playSound('click');
  };

  return (
    <div className="space-y-4 animate-fade-in">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-white/60">{t('chat.suggestedQuestions')}</h3>
        <Button
          variant="ghost"
          size="sm"
          onClick={refreshPrompts}
          onMouseEnter={handleHover}
          className="text-white/60 hover:text-white transition-all duration-300 hover:scale-105"
        >
          <Sparkles className="h-4 w-4 mr-2 animate-pulse" />
          {t('chat.refresh')}
        </Button>
      </div>
      <div className="flex flex-wrap gap-2">
        {displayedPrompts.map((promptKey, index) => (
          <Button
            key={index}
            variant="secondary"
            size="sm"
            className="bg-white/5 hover:bg-white/10 text-white/80 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/5"
            onClick={() => handlePromptClick(promptKey)}
            onMouseEnter={handleHover}
          >
            {t(promptKey)}
          </Button>
        ))}
      </div>
    </div>
  );
};