import React from 'react';

const Header = () => {
  return (
    <header className="absolute top-4 left-0 w-full z-20 px-6 py-4 bg-gradient-to-b from-black/70 to-transparent flex items-center">
      <img
        src="/netflix_logo-new.png"
        alt="Netflix Logo"
        className="w-56 h-auto drop-shadow-[0_0_5px_black] mr-4"
      />
      
    </header>
  );
};

export default Header;
