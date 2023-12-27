import React from 'react';
import { cn } from '@/lib/utils';

interface Props {
  children: React.ReactNode;
  className?: string;
}
const H4 = (props: Props) => {
  const mergedClassnames = cn('font-bold mt-4 text-2xl', props.className);
  return <h4 className={mergedClassnames}>{props.children}</h4>;
};

export default H4;
