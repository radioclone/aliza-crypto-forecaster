import { WormholeConnectConfig } from "@wormhole-foundation/wormhole-connect";
import WormholeConnectWidget from "@wormhole-foundation/wormhole-connect";
import { Card } from "@/components/ui/card";

export const WormholeConnectWrapper = () => {
  const config: WormholeConnectConfig = {
    network: "Testnet",
    env: {
      network: "TESTNET"
    },
    bridgeDefaults: {
      fromNetwork: "goerli",
      toNetwork: "mumbai",
      token: "WETH"
    },
    theme: {
      palette: {
        background: {
          default: "rgba(13, 14, 25, 0.45)",
        },
        primary: {
          main: "hsl(var(--primary))",
        },
        secondary: {
          main: "hsl(var(--secondary))",
        },
        text: {
          primary: "hsl(var(--foreground))",
          secondary: "hsl(var(--muted-foreground))",
        },
      },
      typography: {
        fontFamily: "Inter, sans-serif",
      },
      shape: {
        borderRadius: 16,
      },
    },
  };

  return (
    <div className="space-y-4 animate-fade-in">
      <Card className="p-6 relative overflow-hidden backdrop-blur-2xl bg-background/20 border border-white/10 rounded-[32px] shadow-[0_0_35px_rgba(255,255,255,0.05)]">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-background/5 pointer-events-none" />
        <div className="relative z-10">
          <h2 className="text-2xl font-bold mb-6 gradient-text">Test Network Bridge</h2>
          <p className="text-sm text-muted-foreground mb-8">
            Practice cross-chain transfers safely using test networks. Perfect for learning without risking real assets.
          </p>
          <WormholeConnectWidget config={config} />
        </div>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        <Card className="p-4 neo-blur hover:bg-white/5 transition-all">
          <h3 className="font-semibold mb-2">Educational Environment</h3>
          <p className="text-sm text-muted-foreground">
            Learn and practice cross-chain transfers using test networks with no real financial risk.
          </p>
        </Card>
        
        <Card className="p-4 neo-blur hover:bg-white/5 transition-all">
          <h3 className="font-semibold mb-2">Test Networks</h3>
          <p className="text-sm text-muted-foreground">
            Uses Goerli (Ethereum) and Mumbai (Polygon) test networks for safe experimentation.
          </p>
        </Card>
        
        <Card className="p-4 neo-blur hover:bg-white/5 transition-all">
          <h3 className="font-semibold mb-2">Getting Test Tokens</h3>
          <p className="text-sm text-muted-foreground">
            Use network faucets to get test tokens for practicing transfers and transactions.
          </p>
        </Card>
      </div>
    </div>
  );
};