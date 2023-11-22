import React from 'react';
import NavigationElementBottomLine from './NavigationElementBottomLine';

interface Props {
  children: React.ReactNode;
  isSelected?: boolean;
}

const NavigationElement = (props: Props) => {
  return (
    <div className="my-auto flex flex-col gap-1 text-2xl font-bold cursor-pointer ">
      {props.children}
      {props.isSelected && <NavigationElementBottomLine />}
    </div>
  );
};

export default NavigationElement;
