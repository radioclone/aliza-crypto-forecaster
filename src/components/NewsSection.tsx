import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

interface NewsItem {
  title: string;
  description: string;
  date: string;
  link: string;
}

const newsItems: NewsItem[] = [
  {
    title: "Bitcoin ETF Approval Impact",
    description: "Analysis of how the Bitcoin ETF approval affects the crypto market",
    date: "2024-02-01",
    link: "#"
  },
  {
    title: "Ethereum Network Updates",
    description: "Latest developments in the Ethereum ecosystem and upcoming changes",
    date: "2024-02-01",
    link: "#"
  },
  {
    title: "DeFi Market Analysis",
    description: "Current state of decentralized finance and market opportunities",
    date: "2024-02-01",
    link: "#"
  }
];

export const NewsSection = () => {
  return (
    <div className="space-y-4">
      {newsItems.map((item, index) => (
        <Card key={index} className="p-4 neo-blur hover:bg-white/5 transition-all">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-white/60 text-sm mb-2">{item.description}</p>
              <span className="text-xs text-white/40">{item.date}</span>
            </div>
            <a href={item.link} className="text-white/60 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-5 w-5" />
            </a>
          </div>
        </Card>
      ))}
    </div>
  );
};