import React from "react";
import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
}
const H1 = (props: Props) => {
  const mergedClassnames = cn("text-[50px] font-bold", props.className);
  return <h1 className={mergedClassnames}>{props.children}</h1>;
};

export default H1;
