import React from "react";
import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
}
const H2 = (props: Props) => {
  const mergedClassnames = cn("text-[40px] font-bold", props.className);
  return <h2 className={mergedClassnames}>{props.children}</h2>;
};

export default H2;
