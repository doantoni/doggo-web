import React from 'react';
import GalleryItem, { GalleryItemProps } from './GalleryItem';

interface Props {
  images: GalleryItemProps[];
}
const Gallery = (props: Props) => {
  return (
    <div className="flex flex-wrap gap-x-28">
      {props.images.map((img, i) => (
        <GalleryItem
          key={`img-${i}-${img.alt}`}
          src={img.src}
          alt={img.alt}
          description={img.description}
          title={img.title}
          subtitle={img.subtitle}
        />
      ))}
    </div>
  );
};

export default Gallery;
