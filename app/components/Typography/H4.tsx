import React from "react";

interface Props {
  children: React.ReactNode;
}
const H4 = (props: Props) => {
  return <h4 className="font-bold mt-4 text-2xl">{props.children}</h4>;
};

export default H4;
