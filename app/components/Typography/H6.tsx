import React from "react";

interface Props {
  children: React.ReactNode;
}
const H6 = (props: Props) => {
  return <h6>{props.children}</h6>;
};

export default H6;
