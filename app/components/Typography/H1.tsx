import React from "react";

interface Props {
  children: React.ReactNode;
}
const H1 = (props: Props) => {
  return <h1 className="text-[50px] font-bold">{props.children}</h1>;
};

export default H1;
