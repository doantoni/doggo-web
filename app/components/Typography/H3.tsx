import React from 'react';
import { cn } from '@/lib/utils';

interface Props {
  children: React.ReactNode;
  className?: string;
}
const H3 = (props: Props) => {
  const mergedClassnames = cn('text-[30px] font-bold', props.className);
  return <h3 className={mergedClassnames}>{props.children}</h3>;
};

export default H3;
