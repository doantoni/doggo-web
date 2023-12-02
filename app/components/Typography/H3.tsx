import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}
const H3 = (props: Props) => {
  return <h3 className={props.className}>{props.children}</h3>;
};

export default H3;
