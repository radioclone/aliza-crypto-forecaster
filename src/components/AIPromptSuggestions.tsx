import { Button } from "./ui/button";
import { Sparkles } from "lucide-react";
import { aiPrompts } from "@/config/marketData";
import { useState } from "react";

interface AIPromptSuggestionsProps {
  onPromptSelect: (prompt: string) => void;
}

export const AIPromptSuggestions = ({ onPromptSelect }: AIPromptSuggestionsProps) => {
  const [displayedPrompts, setDisplayedPrompts] = useState<string[]>(() => {
    // Randomly select 3 prompts initially
    const shuffled = [...aiPrompts].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  });

  const refreshPrompts = () => {
    const shuffled = [...aiPrompts].sort(() => 0.5 - Math.random());
    setDisplayedPrompts(shuffled.slice(0, 3));
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-white/60">Suggested Questions</h3>
        <Button
          variant="ghost"
          size="sm"
          onClick={refreshPrompts}
          className="text-white/60 hover:text-white"
        >
          <Sparkles className="h-4 w-4 mr-2" />
          Refresh
        </Button>
      </div>
      <div className="flex flex-wrap gap-2">
        {displayedPrompts.map((prompt, index) => (
          <Button
            key={index}
            variant="secondary"
            size="sm"
            className="bg-white/5 hover:bg-white/10 text-white/80"
            onClick={() => onPromptSelect(prompt)}
          >
            {prompt}
          </Button>
        ))}
      </div>
    </div>
  );
};