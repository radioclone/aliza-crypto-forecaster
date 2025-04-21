
import React, { useEffect, useState } from 'react';
import { cn } from "@/lib/utils";

interface TypingTextProps {
  text: string;
  className?: string;
}

export const TypingText = ({ text, className }: TypingTextProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Add a key counter to force re-render when text changes
  const [keyCounter, setKeyCounter] = useState(0);
  
  useEffect(() => {
    // Reset state when text changes
    setDisplayedText('');
    setCurrentIndex(0);
    setKeyCounter(prev => prev + 1);
    
    const typingInterval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      } else {
        clearInterval(typingInterval);
      }
    }, 100);
    
    return () => clearInterval(typingInterval);
  }, [text, keyCounter]);
  
  return (
    <div className="flex items-center">
      <div className={cn("typing-text", className)}>
        {displayedText}
      </div>
      <div className={cn("cursor animate-blink", currentIndex >= text.length ? "opacity-0" : "opacity-100")} />
    </div>
  );
};
