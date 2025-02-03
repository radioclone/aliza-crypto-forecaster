import React from 'react';

interface TypingTextProps {
  text: string;
}

export const TypingText = ({ text }: TypingTextProps) => {
  return (
    <div className="flex items-center">
      <div className="typing-text animate-typewriter">
        {text}
      </div>
      <div className="cursor animate-blink" />
    </div>
  );
};