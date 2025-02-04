import { WormholeConnectConfig } from "@wormhole-foundation/wormhole-connect";
import WormholeConnectWidget from "@wormhole-foundation/wormhole-connect";
import { Card } from "@/components/ui/card";

export const WormholeConnectWrapper = () => {
  const config: WormholeConnectConfig = {
    network: "Mainnet",
    mode: "dark",
    customStyles: {
      button: {
        borderRadius: "9999px",
      },
      modal: {
        background: "rgba(13, 14, 25, 0.45)",
        borderRadius: "32px",
        backdropFilter: "blur(12px)",
      },
      text: {
        color: "hsl(var(--foreground))",
        fontFamily: "Inter, sans-serif",
      },
      backgroundColor: "rgba(13, 14, 25, 0.45)",
      secondaryButtonBg: "hsl(var(--secondary))",
      primaryButtonBg: "hsl(var(--primary))",
      borderRadius: "32px",
    }
  };

  return (
    <div className="space-y-4">
      <Card className="p-6 relative overflow-hidden backdrop-blur-2xl bg-background/20 border border-white/10 rounded-[32px] shadow-[0_0_35px_rgba(255,255,255,0.05)]">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-background/5 pointer-events-none" />
        <div className="relative z-10">
          <WormholeConnectWidget config={config} />
        </div>
      </Card>
    </div>
  );
};