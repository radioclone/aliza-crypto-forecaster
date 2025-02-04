import WormholeConnect from "@wormhole-foundation/wormhole-connect";
import { Card } from "@/components/ui/card";

export const WormholeConnectWrapper = () => {
  return (
    <div className="space-y-4">
      <Card className="p-6 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <WormholeConnect 
          config={{
            env: "mainnet",
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
          }}
        />
      </Card>
    </div>
  );
};