import React from 'react';

interface TypingTextProps {
  text: string;
}

export const TypingText = ({ text }: TypingTextProps) => {
  return (
    <div className="flex items-center">
      <div
        className="text-[#b4d7ff] font-bold text-2xl tracking-wider whitespace-nowrap overflow-hidden 
                   font-mono animate-typewriter transform scale-y-110"
      >
        {text}
      </div>
      <div className="w-1 h-8 bg-[#b4d7ff] animate-blink ml-1" />
    </div>
  );
};