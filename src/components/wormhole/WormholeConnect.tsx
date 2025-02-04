import { WormholeConnectConfig } from "@wormhole-foundation/wormhole-connect";
import WormholeConnectWidget from "@wormhole-foundation/wormhole-connect";
import { Card } from "@/components/ui/card";

export const WormholeConnectWrapper = () => {
  const config: WormholeConnectConfig = {
    network: "Mainnet",
    theme: {
      mode: "dark",
      customTheme: {
        primary: {
          500: "hsl(var(--primary))",
          600: "hsl(var(--primary-foreground))",
        },
        secondary: {
          500: "hsl(var(--secondary))",
          600: "hsl(var(--secondary-foreground))",
        },
        background: {
          900: "rgba(13, 14, 25, 0.45)", // More transparent background
        },
        text: {
          400: "hsl(var(--foreground))",
          500: "hsl(var(--foreground))",
        },
        border: {
          500: "rgba(255, 255, 255, 0.1)",
        },
      },
      components: {
        button: {
          borderRadius: "9999px", // Pill shape
        },
        text: {
          fontFamily: "Inter, sans-serif",
        },
        modal: {
          background: "rgba(13, 14, 25, 0.75)",
          borderRadius: "32px",
        },
      },
    },
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