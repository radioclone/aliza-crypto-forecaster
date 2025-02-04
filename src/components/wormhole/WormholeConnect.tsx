import { WormholeConnectConfig } from "@wormhole-foundation/wormhole-connect";
import WormholeConnectWidget from "@wormhole-foundation/wormhole-connect";
import { Card } from "@/components/ui/card";

export const WormholeConnectWrapper = () => {
  const config: WormholeConnectConfig = {
    network: "Mainnet",
    networks: ["ethereum", "mode"],
    tokens: ["ETH", "USDC", "USDT"],
    theme: {
      mode: "dark",
      customTheme: {
        primary: {
          500: "hsl(var(--primary))",
        },
        background: {
          900: "hsl(var(--background))",
        },
      },
    },
  };

  return (
    <div className="space-y-4">
      <Card className="p-6 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <WormholeConnectWidget config={config} />
      </Card>
    </div>
  );
};