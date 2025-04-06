
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { soundManager } from "@/utils/sounds";
import { BirthDataCard } from './BirthDataCard';
import { useToast } from "@/components/ui/use-toast";
import { BirthData } from '@/types/birth';
import { useIsMobile, useIsTablet, useIsPortrait } from "@/hooks/use-mobile";

export const AlizaBranding = () => {
  const [showBirthCard, setShowBirthCard] = useState(false);
  const { toast } = useToast();
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const isPortrait = useIsPortrait();
  
  const getPositionClasses = () => {
    if (isMobile) return 'bottom-2 left-2';
    if (isTablet && isPortrait) return 'bottom-2 left-3';
    return 'bottom-3 left-3';
  };

  const handleBirthDataSubmit = (data: BirthData) => {
    console.log('Birth data submitted:', data);
    toast({
      title: "Processing Your Birth Data",
      description: "Analyzing your astrological profile and market compatibility...",
    });
    setShowBirthCard(false);
  };

  return (
    <>
      <Button
        variant="ghost"
        className={`fixed ${getPositionClasses()} z-[60] p-0 h-auto w-auto hover:bg-transparent`}
        onClick={() => {
          setShowBirthCard(true);
          soundManager.playSound('click');
        }}
        onMouseEnter={() => soundManager.playSound('hover')}
      >
        <div className="relative flex flex-col items-center">
          <img 
            src="https://nifrnbzdjizwmbgatyfr.supabase.co/storage/v1/object/public/assets_brand//Ask%20Aliza%20Branding..gif"
            alt="Ask Aliza Branding"
            className={`${isMobile ? 'w-20' : 'w-24'} h-auto opacity-70 hover:opacity-100 transition-opacity`}
          />
        </div>
      </Button>

      {showBirthCard && (
        <BirthDataCard
          onClose={() => setShowBirthCard(false)}
          onSubmit={handleBirthDataSubmit}
        />
      )}
    </>
  );
};
