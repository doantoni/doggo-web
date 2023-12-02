import React from "react";

interface Props {
  children: React.ReactNode;
}
const H2 = (props: Props) => {
  return <h2>{props.children}</h2>;
};

export default H2;
