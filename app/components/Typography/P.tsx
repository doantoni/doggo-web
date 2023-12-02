import React from "react";

interface Props {
  children: React.ReactNode;
}
const P = (props: Props) => {
  return <p className="text-[24px] mt-[24px] pr-32">{props.children}</p>;
};

export default P;
