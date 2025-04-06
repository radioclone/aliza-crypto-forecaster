
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useIsMobile, useIsTablet, useIsPortrait } from "@/hooks/use-mobile";

export const BrandButton = () => {
  const { toast } = useToast();
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const isPortrait = useIsPortrait();
  
  const getPositionClasses = () => {
    if (isMobile) return 'bottom-8 right-2';
    if (isTablet && isPortrait) return 'bottom-28 right-4';
    return 'bottom-16 right-4';
  };

  const handleClick = () => {
    toast({
      title: "Redirecting to Mode Network",
      description: "Opening Mode AI Terminal in a new tab.",
    });
  };

  return (
    <Button
      variant="ghost"
      className={`fixed ${getPositionClasses()} z-[200] p-0 h-auto w-auto hover:bg-transparent`}
      onClick={handleClick}
      asChild
    >
      <a
        href="https://app.mode.network/ai-terminal/chat/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2"
      >
        <img 
          src="https://nifrnbzdjizwmbgatyfr.supabase.co/storage/v1/object/public/assets_brand/Mode%20wordmark%20primary.png"
          alt="Mode Network"
          className={`${isMobile ? 'h-6' : (isTablet && isPortrait ? 'h-7' : 'h-8')} w-auto opacity-80 hover:opacity-100 transition-opacity`}
        />
      </a>
    </Button>
  );
};
