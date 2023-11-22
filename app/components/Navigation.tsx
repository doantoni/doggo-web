import React from 'react';
import NavigationElement from './NavigationElement';

const Navigation = () => {
  return (
    <div className="h-full w-1/2 flex align-middle justify-between">
      <NavigationElement isSelected>Naslovna</NavigationElement>
      <NavigationElement>Programi</NavigationElement>
      <NavigationElement>Savjeti</NavigationElement>
      <NavigationElement>Galerija</NavigationElement>
      <NavigationElement>Kontakt</NavigationElement>
    </div>
  );
};

export default Navigation;
