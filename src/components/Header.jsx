import React from 'react';

const Header = () => {
  return (
    <div className="relative h-36 w-full bg-gradient-to-b from-black to-transparent">
    
      <img
        src="/netflix_logo-new.png" 
        alt="Netflix Logo"
        className="absolute top-4 left-2 w-50 h-auto z-10 mr-3 [filter:drop-shadow(0_0_5px_black)_drop-shadow(0_0_5px_black)]"
      />
    </div>
  );
};

export default Header;
