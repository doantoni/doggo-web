import React from "react";
import H5 from "./Typography/H5";
import Bullets from "./Bullets";
interface Props {
  num: number;
  bullets: string[];
}

const ExcercisesInfo = (props: Props) => {
  return (
    <div className="p-8">
      <H5 className="font-bold">VJEŽBE</H5>
    <Bullets num={props.num} bullets={props.bullets} />
    </div>
  );
};

export default ExcercisesInfo;
