import { Button } from "@/components/ui/button";
import { LanguageSelector } from "@/components/LanguageSelector";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Rocket } from "lucide-react";

export const MarketHeader = () => {
  const { t } = useTranslation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 relative overflow-hidden rounded-lg">
              <img 
                src="https://nifrnbzdjizwmbgatyfr.supabase.co/storage/v1/object/public/assets_brand//Retroverse%20Logo%20Animation.gif"
                alt="Retroverse Logo"
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback to a default tech-related image if the GIF fails to load
                  e.currentTarget.src = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=32&h=32";
                }}
              />
            </div>
          </Link>
          
          <div className="flex items-center gap-4">
            <Link to="/ecosystem">
              <Button variant="ghost" className="text-white/80 hover:text-white">
                <Rocket className="mr-2 h-4 w-4" />
                Ecosystem
              </Button>
            </Link>
            <LanguageSelector />
          </div>
        </div>
      </div>
    </header>
  );
};