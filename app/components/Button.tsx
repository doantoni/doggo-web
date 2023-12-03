import React from "react";
import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Button = (props: Props) => {
  const mergedClassNames = cn(
    "rounded-full bg-primary w-fit py-1.5 px-10 text-white text-[25px] font-light",
    props.className
  );
  return <button className={mergedClassNames}>{props.children}</button>;
};

export default Button;
