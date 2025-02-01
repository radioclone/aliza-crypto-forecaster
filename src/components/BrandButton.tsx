import React from 'react';
import { Button } from "@/components/ui/button";
import { soundManager } from "@/utils/sounds";

export const BrandButton = () => {
  return (
    <Button
      variant="ghost"
      className="fixed bottom-32 right-4 z-[200] p-0 h-auto w-auto hover:bg-transparent"
      onClick={() => window.open('https://app.mode.network/ai-terminal/chat/', '_blank')}
      onMouseEnter={() => soundManager.playSound('hover')}
    >
      <div className="relative flex flex-col items-center">
        <img 
          src="https://nifrnbzdjizwmbgatyfr.supabase.co/storage/v1/object/public/assets_brand//Mode%20wordmark%20primary.png"
          alt="Mode Network Brand"
          className="w-32 h-auto opacity-70 hover:opacity-100 transition-opacity"
        />
      </div>
    </Button>
  );
};