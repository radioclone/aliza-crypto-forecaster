import { WormholeConnect } from "@wormhole-foundation/wormhole-connect";
import { Card } from "@/components/ui/card";

export const WormholeConnectWrapper = () => {
  return (
    <Card className="p-4 neo-blur">
      <WormholeConnect />
    </Card>
  );
};