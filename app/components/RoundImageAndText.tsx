import React from "react";
import Image from "next/image";
import H3 from "./Typography/H3";
interface Props {
  src: string;
  text: string;
  alt: string;
}
const RoundImageAndText = (props: Props) => {
  return (
    <div className="flex flex-col gap-4 mt-10">
      <Image
        className="mx-auto rounded-full"
        width={300}
        height={300}
        alt={props.alt}
        src={props.src}
      />
      <H3 className="text-center font-bold text-2xl">{props.text}</H3>
    </div>
  );
};

export default RoundImageAndText;
