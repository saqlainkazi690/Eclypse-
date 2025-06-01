import React from 'react';
import logoImage from '../assets/videos/logo_eclypse.jpg';

interface LogoProps {
  width?: number;
  height?: number;
}

const Logo: React.FC<LogoProps> = ({ width = 40, height = 40 }) => {
  return (
    <img 
      src={logoImage} 
      alt="Eclypse Logo" 
      width={width} 
      height={height}
      className="object-contain"
    />
  );
};

export default Logo; 