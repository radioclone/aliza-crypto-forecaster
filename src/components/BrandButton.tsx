import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { ExternalLink } from "lucide-react";

export const BrandButton = () => {
  const { toast } = useToast();

  const handleClick = () => {
    toast({
      title: "Redirecting to Mode Network",
      description: "Opening Mode Network documentation in a new tab.",
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
        href="https://www.mode.network/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-sm text-white/60 hover:text-white/80 transition-colors"
      >
        Powered by Mode Network
        <ExternalLink className="h-4 w-4" />
      </a>
    </Button>
  );
};