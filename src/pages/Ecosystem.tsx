import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ArrowLeft, Bot, Brain, ChartLineUp, Coins, Rocket } from "lucide-react";

const Ecosystem = () => {
  const { t } = useTranslation();

  const ecosystemApps = [
    {
      title: "Market Analysis",
      description: "Advanced crypto market analysis with AI-powered insights",
      icon: <ChartLineUp className="w-8 h-8" />,
      status: "Live",
      link: "/"
    },
    {
      title: "AI Trading Assistant",
      description: "Intelligent trading suggestions and portfolio management",
      icon: <Bot className="w-8 h-8" />,
      status: "Coming Soon",
      link: "#"
    },
    {
      title: "Mode Network Explorer",
      description: "Explore Mode Network ecosystem and opportunities",
      icon: <Coins className="w-8 h-8" />,
      status: "Coming Soon",
      link: "#"
    },
    {
      title: "AI Research Hub",
      description: "Deep dive into crypto market research and analysis",
      icon: <Brain className="w-8 h-8" />,
      status: "In Development",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link to="/">
            <Button variant="ghost" className="text-white/80 hover:text-white">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Dashboard
            </Button>
          </Link>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <Rocket className="w-10 h-10 text-white/80" />
            <h1 className="text-4xl font-bold">Ecosystem</h1>
          </div>
          
          <p className="text-lg text-white/80 max-w-2xl">
            Explore our suite of AI-powered crypto tools and applications designed to enhance your trading experience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {ecosystemApps.map((app, index) => (
              <Link 
                key={index} 
                to={app.link}
                className={app.status !== "Live" ? "pointer-events-none" : ""}
              >
                <Card className="p-6 bg-white/5 hover:bg-white/10 transition-all duration-300 border-white/10 group relative overflow-hidden">
                  <div className="absolute top-3 right-3">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      app.status === "Live" 
                        ? "bg-green-500/20 text-green-400"
                        : app.status === "Coming Soon"
                        ? "bg-blue-500/20 text-blue-400"
                        : "bg-orange-500/20 text-orange-400"
                    }`}>
                      {app.status}
                    </span>
                  </div>
                  
                  <div className="mb-4 text-white/80 group-hover:text-white transition-colors">
                    {app.icon}
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-white transition-colors">
                    {app.title}
                  </h3>
                  
                  <p className="text-white/60 group-hover:text-white/80 transition-colors">
                    {app.description}
                  </p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecosystem;