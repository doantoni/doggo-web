import React from 'react'
import P from "./Typography/P";

interface Props {
  num: number;
  bullets: string[];
}

const Bullets = (props: Props) => {
  return (
    <ul className="mt-5">
    {props.bullets.map((bullet, index) => {
      return (
        <li
          className="list-item list-disc"
          key={`${props.num}-vjezbe-${index}`}
        >
          <P className="mt-0">{bullet}</P>
        </li>
      );
    })}
  </ul>
  )
}

export default Bullets