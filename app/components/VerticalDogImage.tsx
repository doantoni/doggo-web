import React from 'react';
import { cn } from '@/lib/utils';

interface Props {
  src: string;
}

const VerticalDogImage = (props: Props) => {
  const bg = props.src;
  const classNames = cn(bg, 'h-full w-1/5 bg-cover');

  return <div className={classNames} />;
};

export default VerticalDogImage;
