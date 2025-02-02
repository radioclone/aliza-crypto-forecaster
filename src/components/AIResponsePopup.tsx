import { useState, useEffect } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface AIResponsePopupProps {
  message: string;
  isOpen: boolean;
  onClose: () => void;
}

export const AIResponsePopup = ({ message, isOpen, onClose }: AIResponsePopupProps) => {
  const [truncatedMessage, setTruncatedMessage] = useState(message);

  useEffect(() => {
    // Truncate message to tweet-like length if needed
    if (message.length > 280) {
      setTruncatedMessage(message.substring(0, 277) + "...");
    } else {
      setTruncatedMessage(message);
    }
  }, [message]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-4 right-4 z-50"
        >
          <Card className="neo-blur w-full max-w-md p-4">
            <div className="flex justify-between items-start mb-2">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-white/80" />
                <span className="text-sm font-medium text-white/80">AI Response</span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="h-6 w-6"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-white/90 text-sm leading-relaxed">
              {truncatedMessage}
            </p>
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  );
};