import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if page is scrolled more than 50px
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
      isScrolled ? 'bg-black/50 backdrop-blur-md' : 'bg-black'
    }`}>
      <nav className="px-4 py-6 flex justify-between items-center">
        <Link to="/" className="ml-4" aria-label="Eclypse Home">
          <Logo width={48} height={48} />
        </Link>
        
        <div className="flex items-center gap-12 mr-4">
          <Link to="/about" className="text-white text-[18px] font-[300]">
            About Us
          </Link>
          <Link to="/waitlist" className="text-white text-[18px] font-[300]">
            Waitlist
          </Link>
          <Link to="/cart" className="text-white text-[18px] font-[300]">
            Cart
          </Link>
          <Link 
            to="/collections" 
            className="bg-white text-black px-8 py-2 rounded-sm text-[18px] font-[300]"
          >
            Buy
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
