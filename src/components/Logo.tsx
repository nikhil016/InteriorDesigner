import React from 'react';
import RJLogo from './images/RJLogo.png';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span> <img src='/src/images/RJLogo1.png' alt="rjlogo" className="image-transparent image-transparent-50"  /></span>
    </div>
  );
};

export default Logo;