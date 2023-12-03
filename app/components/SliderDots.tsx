import React from "react";
import { cn } from "@/lib/utils";

interface SliderDotProps {
  className?: string;
}

export const SliderDot = (props: SliderDotProps) => {
  const mergedClassnames = cn(
    "w-[15px] h-[15px] bg-white rounded-full cursor-pointer",
    props.className
  );
  return <div className={mergedClassnames} />;
};

interface Props {
  className?: string;
}
const SliderDots = (props: Props) => {
  const mergedClassnames = cn("flex gap-2 align-middle", props.className);
  return (
    <div className={mergedClassnames}>
      <SliderDot className="bg-primary" />
      <SliderDot />
      <SliderDot />
    </div>
  );
};

export default SliderDots;
