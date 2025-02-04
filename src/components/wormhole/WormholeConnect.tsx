import { WormholeConnectConfig } from "@wormhole-foundation/wormhole-connect";
import WormholeConnectWidget from "@wormhole-foundation/wormhole-connect";
import { Card } from "@/components/ui/card";

export const WormholeConnectWrapper = () => {
  const config: WormholeConnectConfig = {
    network: "Mainnet",
    customTheme: {
      colors: {
        background: "rgba(13, 14, 25, 0.85)",
        foreground: "#FFFFFF",
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
        }
      },
      typography: {
        family: "Inter, sans-serif"
      },
      radii: {
        medium: "9999px", // Pill shape
        large: "9999px"
      }
    }
  };

  return (
    <div className="space-y-4">
      <Card className="p-6 relative overflow-hidden backdrop-blur-xl bg-background/40 border border-white/10 rounded-[32px] shadow-[0_0_25px_rgba(255,255,255,0.1)]">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-background/5 pointer-events-none" />
        <WormholeConnectWidget config={config} />
      </Card>
    </div>
  );
};