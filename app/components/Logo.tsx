import React from 'react';
import Image from 'next/image';

const Logo = () => {
  return (
    <div className="flex">
      <Image
        width={80}
        height={80}
        alt="Škola za pse logo"
        src="Snoopy logo.svg"
      />
      <div className="my-auto ml-8 flex flex-col align-middle justify-center gap-px">
        <Image
          width={140}
          height={100}
          alt="Škola za pse naslov"
          src="SNOOPY-text.svg"
        />
        <h3 className="text-center text-[26px] text-primary font-[400]">
          škola za pse
        </h3>
      </div>
    </div>
  );
};

export default Logo;
