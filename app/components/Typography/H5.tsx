import React from "react";
import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
}
const H5 = (props: Props) => {
  const mergeClassnames = cn("text-[25px] font-semibold", props.className);
  return <h5 className={mergeClassnames}>{props.children}</h5>;
};

export default H5;
