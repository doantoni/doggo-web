import React from "react";
import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
}
const H6 = (props: Props) => {
  const mergedClassnames = cn("text-[20px] font-semibold", props.className);
  return <h6 className={mergedClassnames}>{props.children}</h6>;
};

export default H6;
