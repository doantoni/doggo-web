import React from "react";
import H5 from "./Typography/H5";
import P from "./Typography/P";
import Image from "next/image";

interface Props {
  title: string;
  boldText: string;
  description: React.ReactNode;
  additionalInfo: string;
}

const ProgramInfo = (props: Props) => {
  return (
    <div className="p-8 flex flex-col gap-6">
      <H5 className=" text-primary font-bold">{props.title}</H5>
      <H5>{props.boldText}</H5>
      <P className="mt-0 font-light p-0">{props.description}</P>
      <div className="flex gap-3">
        <Image width={30} height={30} src={"/clock.svg"} alt="clock" />
        <P className="mt-0 whitespace-nowrap font-light">
          {props.additionalInfo}
        </P>
      </div>
    </div>
  );
};

export default ProgramInfo;
