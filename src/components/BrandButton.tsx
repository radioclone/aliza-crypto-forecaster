import React from 'react';
import { Button } from "@/components/ui/button";

export const BrandButton = () => {
  return (
    <Button
      variant="ghost"
      className="fixed bottom-4 left-4 z-50 p-0 h-auto w-auto hover:bg-transparent"
      onClick={() => window.open('https://mode.network', '_blank')}
    >
      <div className="flex flex-col items-center">
        <img 
          src="/lovable-uploads/d7ea9b1b-6571-4d32-966d-5bef2fd611dd.png"
          alt="Mode Network Brand"
          className="w-24 h-24 opacity-70 hover:opacity-100 transition-opacity"
        />
        <span className="text-xs text-white/70 mt-1">Forecast</span>
      </div>
    </Button>
  );
};