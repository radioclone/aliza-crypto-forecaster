import React from 'react';
import { Button } from "@/components/ui/button";
import { soundManager } from "@/utils/sounds";

export const AlizaBranding = () => {
  return (
    <Button
      variant="ghost"
      className="fixed bottom-32 left-4 z-[200] p-0 h-auto w-auto hover:bg-transparent"
      onClick={() => window.open('https://elizaos.ai', '_blank')}
      onMouseEnter={() => soundManager.playSound('hover')}
    >
      <div className="relative flex flex-col items-center">
        <img 
          src="https://nifrnbzdjizwmbgatyfr.supabase.co/storage/v1/object/public/assets_brand//AskAliza%20Branding.gif"
          alt="Ask Aliza Branding"
          className="w-32 h-auto opacity-90 hover:opacity-100 transition-opacity"
        />
      </div>
    </Button>
  );
};