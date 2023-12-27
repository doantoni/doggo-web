import React from 'react';
import Image from 'next/image';
import { P, H5 } from '@/app/components/Typography';

export interface GalleryItemProps {
  src?: string;
  alt: string;
  title: string;
  subtitle: string;
  description: string;
}

const GalleryItem = (props: GalleryItemProps) => {
  return (
    <div className="w-[355px] mt-12">
      <Image
        className="rounded-xl w-full"
        width={355}
        height={355}
        alt={props.alt}
        src={props.src ?? '/galerija-blank.png'}
      />
      <H5 className='font-bold mt-4'>{props.title}</H5>
      <H5 className='font-light'>{props.subtitle}</H5>
      <P className="p-0">{props.description}</P>
    </div>
  );
};

export default GalleryItem;
