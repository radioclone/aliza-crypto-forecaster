import { WormholeConnectConfig } from "@wormhole-foundation/wormhole-connect";
import WormholeConnectWidget from "@wormhole-foundation/wormhole-connect";
import { Card } from "@/components/ui/card";

export const WormholeConnectWrapper = () => {
  const config: WormholeConnectConfig = {
    network: "Mainnet",
    customTheme: {
      colors: {
        background: "rgba(13, 14, 25, 0.45)", // Keeping transparent background
        foreground: "hsl(var(--foreground))",
        primary: {
          base: "hsl(var(--primary))",
          hover: "hsl(var(--primary-foreground))"
        },
        secondary: {
          base: "hsl(var(--secondary))",
          hover: "hsl(var(--secondary-foreground))"
        },
        error: {
          base: "hsl(var(--destructive))",
          hover: "hsl(var(--destructive-foreground))"
        },
        border: "rgba(255, 255, 255, 0.1)"
      },
      typography: {
        family: "Inter, sans-serif"
      },
      radii: {
        medium: "9999px", // Pill shape
        large: "32px"
      }
    }
  };

  return (
    <div className="space-y-4">
      <Card className="p-6 relative overflow-hidden backdrop-blur-2xl bg-background/20 border border-white/10 rounded-[32px] shadow-[0_0_35px_rgba(255,255,255,0.05)]">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-background/5 pointer-events-none" />
        <div className="relative z-10"> {/* Wrapper to ensure content stays above gradient */}
          <WormholeConnectWidget config={config} />
        </div>
      </Card>
    </div>
  );
};