import React from "react";
import H5 from "./Typography/H5";
import P from "./Typography/P";

interface Props {
  num: number;
  bullets: string[];
}

const ExcercisesInfo = (props: Props) => {
  return (
    <div className="p-8">
      <H5 className="font-bold">VJEŽBE</H5>
      <ul className="mt-5">
        {props.bullets.map((bullet, index) => {
          return (
            <li
              className="list-item list-disc"
              key={`${props.num}-vjezbe-${index}`}
            >
              <P className="font-light mt-0">{bullet}</P>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ExcercisesInfo;
