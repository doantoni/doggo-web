import React from "react";
import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
}
const P = (props: Props) => {
  const mergedClasses = cn(
    "text-[24px] mt-[24px] pr-32",
    props.className ?? ""
  );
  return <p className={mergedClasses}>{props.children}</p>;
};

export default P;
