import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface CryptoSearchProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
}

export const CryptoSearch = ({ searchQuery, onSearchChange }: CryptoSearchProps) => {
  return (
    <div className="relative w-full sm:w-64 md:w-72">
      <Input
        type="text"
        placeholder="Search cryptocurrencies..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-white/40"
      />
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
    </div>
  );
};