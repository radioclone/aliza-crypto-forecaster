import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

export const BrandButton = () => {
  const { toast } = useToast();

  const handleClick = () => {
    toast({
      title: "Redirecting to Mode Network",
      description: "Opening Mode AI Terminal in a new tab.",
    });
  };

  return (
    <Button
      variant="ghost"
      className="fixed bottom-8 right-4 z-[200] p-0 h-auto w-auto hover:bg-transparent"
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
          className="h-8 w-auto"
        />
      </a>
    </Button>
  );
};