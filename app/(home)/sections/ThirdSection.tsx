import React from 'react';
import VerticalDogImage from '@/app/components/VerticalDogImage';

const ThirdSection = () => {
  return (
    <div className="w-screen h-[467px] flex">
      <VerticalDogImage src="bg-[url('/first-dog.png')]" />
      <VerticalDogImage src="bg-[url('/second-dog.png')]" />
      <VerticalDogImage src="bg-[url('/third-dog.png')]" />
      <VerticalDogImage src="bg-[url('/fourth-dog.png')]" />
      <VerticalDogImage src="bg-[url('/fifth-dog.png')]" />
    </div>
  );
};

export default ThirdSection;
