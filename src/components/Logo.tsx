import React from 'react';
import { Star } from 'lucide-react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Star className="w-6 h-6 text-gold" strokeWidth={1.5} />
      <span className="text-2xl font-playfair font-bold text-charcoal">RJ STAR INTERIORS</span>
    </div>
  );
};

export default Logo;