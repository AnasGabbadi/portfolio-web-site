'use client';

import { useTypingEffect } from '@/hooks/useTypingEffect';

interface TypingEffectProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenWords?: number;
  className?: string;
}

const TypingEffect: React.FC<TypingEffectProps> = ({
  words,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenWords = 2000,
  className = '',
}) => {
  const text = useTypingEffect(words, typingSpeed, deletingSpeed, delayBetweenWords);

  return (
    <span className={className}>
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypingEffect;