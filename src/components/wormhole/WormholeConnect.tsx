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
          600: "hsl(var(--primary))",
        },
        secondary: {
          500: "hsl(var(--secondary))",
          600: "hsl(var(--secondary))",
        },
        background: {
          900: "hsl(var(--background))",
        },
        text: {
          400: "hsl(var(--foreground))",
          500: "hsl(var(--foreground))",
        },
        border: {
          500: "hsl(var(--border))",
        },
      },
      components: {
        button: {
          borderRadius: "var(--radius)",
        },
        text: {
          fontFamily: "var(--font-sans)",
        },
        modal: {
          background: "hsl(var(--background))",
          borderRadius: "var(--radius)",
        },
      },
    },
  };

  return (
    <div className="space-y-4">
      <Card className="p-6 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-border/50">
        <WormholeConnectWidget config={config} />
      </Card>
    </div>
  );
};