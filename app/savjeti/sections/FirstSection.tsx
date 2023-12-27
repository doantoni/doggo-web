import React from 'react';
import { DEFAULT_SECTION_HEIGHT } from '@/app/constants';
import Image from 'next/image';
import { H1, P } from '@/app/components/Typography';
const FirstSection = () => {
  return (
    <div
      className={`relative w-screen ${DEFAULT_SECTION_HEIGHT} overflow-hidden bg-cover bg-[50%] bg-no-repeat`}
    >
      <Image
        className="h-full w-full object-cover text-left"
        width={1440}
        height={681}
        src={'/savjeti-header.png'}
        alt="asdsa"
      />
      <H1 className="text-black absolute bottom-10 left-1/2 transform -translate-x-20">
        O dresuri...
      </H1>
    </div>
  );
};

export default FirstSection;
