
import { Button } from "./ui/button";
import { Sparkles } from "lucide-react";
import { aiPrompts } from "@/config/market/marketData";
import { useState } from "react";
import { soundManager } from "@/utils/sounds";
import { useTranslation } from "react-i18next";
import { GoatService } from "@/services/goat/GoatService";

interface AIPromptSuggestionsProps {
  setChatHistory: (history: any) => void;
}

export const AIPromptSuggestions = ({ setChatHistory }: AIPromptSuggestionsProps) => {
  const { t } = useTranslation();
  const [displayedPrompts, setDisplayedPrompts] = useState<string[]>(() => {
    const aifiPrompt = aiPrompts[aiPrompts.length - 1];
    const otherPrompts = [...aiPrompts.slice(0, -1)].sort(() => 0.5 - Math.random()).slice(0, 2);
    return [...otherPrompts, aifiPrompt];
  });

  const [isLoadingPrompt, setIsLoadingPrompt] = useState(false);
  const goatService = GoatService.getInstance();

  const refreshPrompts = () => {
    soundManager.playSound('click');
    const aifiPrompt = aiPrompts[aiPrompts.length - 1];
    const otherPrompts = [...aiPrompts.slice(0, -1)].sort(() => 0.5 - Math.random()).slice(0, 2);
    setDisplayedPrompts([...otherPrompts, aifiPrompt]);
  };

  const handlePromptClick = async (promptKey: string) => {
    soundManager.playSound('click');
    const translatedPrompt = t(promptKey);
    setChatHistory((prev: any) => [...prev, { message: translatedPrompt, isUser: true }]);
    setIsLoadingPrompt(true);

    try {
      const response = await goatService.processUserRequest(translatedPrompt);
      if (response) {
        setChatHistory((prev: any) => [...prev, { message: response, isUser: false }]);
        soundManager.playSound('receive');
      }
    } catch (error) {
      console.error("Error processing prompt:", error);
      soundManager.playSound('error');
    } finally {
      setIsLoadingPrompt(false);
    }
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
            disabled={isLoadingPrompt}
          >
            {t(promptKey)}
          </Button>
        ))}
      </div>
    </div>
  );
};
