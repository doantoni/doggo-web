import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}
const H5 = (props: Props) => {
  return <h5 className={props.className}>{props.children}</h5>;
};

export default H5;
