import { Button } from "@/components/ui/button";
import { soundManager } from "@/utils/sounds";

export const BrandButton = () => {
  return (
    <Button
      variant="ghost"
      className="fixed bottom-8 right-4 z-[200] p-0 h-auto w-auto hover:bg-transparent"
      onClick={() => {
        window.open('https://www.modefi.io/', '_blank');
        soundManager.playSound('click');
      }}
      onMouseEnter={() => soundManager.playSound('hover')}
    >
      <div className="relative flex flex-col items-center">
        <img 
          src="/mode-logo.png"
          alt="Mode Network"
          className="w-32 h-auto opacity-90 hover:opacity-100 transition-opacity"
        />
      </div>
    </Button>
  );
};