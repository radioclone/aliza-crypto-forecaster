
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { soundManager } from "@/utils/sounds";
import { useIsMobile, useIsTablet, useIsPortrait } from "@/hooks/use-mobile";

export const Attribution = () => {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const isPortrait = useIsPortrait();
  
  const getPositionClasses = () => {
    if (isMobile) return 'left-4 right-4 text-center';
    if (isTablet && isPortrait) return 'right-4 bottom-8';
    return 'right-4';
  };
  
  return (
    <div className={`fixed bottom-4 ${getPositionClasses()} text-xs text-white/60`}>
      <HoverCard>
        <HoverCardTrigger asChild>
          <a 
            href="https://www.elizaos.ai/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-white/80 transition-colors"
            onClick={() => soundManager.playSound('click')}
          >
            * {isMobile ? "Eliza OS Attribution" : "Attribution: Inspired by the open-source project Eliza OS"}
          </a>
        </HoverCardTrigger>
        <HoverCardContent className="w-80 bg-black/90 border-white/10 text-white p-4">
          <div className="space-y-2">
            <h4 className="text-sm font-semibold">Eliza OS</h4>
            <p className="text-xs text-white/80">
              This project draws inspiration from the kickass open source movement Eliza OS. 
              Click to visit the original project.
            </p>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
};
