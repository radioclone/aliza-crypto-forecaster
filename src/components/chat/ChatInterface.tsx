import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader, ArrowRightIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import { ChatMessage } from '@/components/ChatMessage';
import { AIPromptSuggestions } from '@/components/AIPromptSuggestions';
import { soundManager } from "@/utils/sounds";
import { GoatService } from '@/services/goat/GoatService';
import { useToast } from "@/components/ui/use-toast";
import { AIResponsePopup } from '@/components/AIResponsePopup';

export const ChatInterface = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<Array<{ message: string; isUser: boolean }>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const goatService = GoatService.getInstance();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const userMessage = message.trim();
    setChatHistory(prev => [...prev, { message: userMessage, isUser: true }]);
    setMessage('');
    setIsLoading(true);
    soundManager.playSound('send');

    try {
      const response = await goatService.processUserRequest(userMessage);
      
      if (response) {
        setChatHistory(prev => [...prev, { message: response, isUser: false }]);
        setPopupMessage(response);
        setIsPopupOpen(true);
        soundManager.playSound('receive');
      } else {
        throw new Error("No response received from GoatService");
      }
    } catch (error) {
      console.error("Error in chat:", error);
      soundManager.playSound('error');
      toast({
        title: t('toast.error'),
        description: t('toast.errorDescription'),
        variant: "destructive"
      });
      setChatHistory(prev => [...prev, { 
        message: "I apologize, but I'm having trouble processing your request at the moment. Please try again.", 
        isUser: false 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePromptSelect = (prompt: string) => {
    setMessage(prompt);
    soundManager.playSound('click');
  };

  return (
    <div className="mt-8">
      <div className="space-y-4 mb-8">
        {chatHistory.map((chat, index) => (
          <ChatMessage key={index} message={chat.message} isUser={chat.isUser} />
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white/5 rounded-lg p-4 animate-pulse flex items-center gap-2">
              <Loader className="h-4 w-4 animate-spin" />
              <span className="text-white/60">{t('chat.analyzing')}</span>
            </div>
          </div>
        )}
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-black/80 backdrop-blur-sm border-t border-white/10">
        <div className="container mx-auto max-w-4xl space-y-4">
          <AIPromptSuggestions 
            onPromptSelect={handlePromptSelect} 
            setChatHistory={setChatHistory}
          />
          <form onSubmit={handleSubmit} className="relative">
            <Input
              type="text"
              placeholder={t('chat.placeholder')}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="pr-12 bg-white/5 border-white/10 text-white placeholder:text-white/40"
              disabled={isLoading}
              onClick={() => soundManager.playSound('click')}
            />
            <Button 
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 text-white hover:bg-white/10"
              size="icon"
              variant="ghost"
              disabled={isLoading}
              onMouseEnter={() => soundManager.playSound('click')}
            >
              {isLoading ? (
                <Loader className="h-4 w-4 animate-spin" />
              ) : (
                <ArrowRightIcon className="h-4 w-4" />
              )}
            </Button>
          </form>
          <p className="text-xs text-center text-white/40">
            {t('chat.disclaimer')}
          </p>
        </div>
      </div>

      <AIResponsePopup
        message={popupMessage}
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </div>
  );
};