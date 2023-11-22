import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
const Navbar = () => {
  return (
    <div className="flex align-middle justify-between w-full h-28 bg-white px-10">
      <Logo />
      <Navigation />
    </div>
  );
};

export default Navbar;
