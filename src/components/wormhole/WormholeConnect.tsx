import { WormholeConnectConfig } from "@wormhole-foundation/wormhole-connect";
import WormholeConnectWidget from "@wormhole-foundation/wormhole-connect";
import { Card } from "@/components/ui/card";

export const WormholeConnectWrapper = () => {
  const config: WormholeConnectConfig = {
    network: "Mainnet",
    networks: ["ethereum", "solana", "polygon", "avalanche", "fantom", "celo", "moonbeam", "sui", "aptos"],
    tokens: ["ETH", "WETH", "USDC", "USDT", "WBTC", "DAI"],
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
          <h2 className="text-2xl font-bold mb-6 gradient-text">Cross-Chain Bridge</h2>
          <p className="text-sm text-muted-foreground mb-8">
            Securely transfer your assets across different blockchain networks with our intuitive bridge interface.
          </p>
          <WormholeConnectWidget config={config} />
        </div>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        <Card className="p-4 neo-blur hover:bg-white/5 transition-all">
          <h3 className="font-semibold mb-2">Security First</h3>
          <p className="text-sm text-muted-foreground">
            Built on Wormhole's battle-tested infrastructure for secure cross-chain transfers.
          </p>
        </Card>
        
        <Card className="p-4 neo-blur hover:bg-white/5 transition-all">
          <h3 className="font-semibold mb-2">Multi-Chain Support</h3>
          <p className="text-sm text-muted-foreground">
            Bridge assets across major networks including Ethereum, Solana, and more.
          </p>
        </Card>
        
        <Card className="p-4 neo-blur hover:bg-white/5 transition-all">
          <h3 className="font-semibold mb-2">User-Friendly</h3>
          <p className="text-sm text-muted-foreground">
            Simple interface designed for both beginners and experienced users.
          </p>
        </Card>
      </div>
    </div>
  );
};