import React from "react";

interface Props {
  children: React.ReactNode;
}
const SectionWrapper = (props: Props) => {
  return <div className="w-screen h-[467px] p-[76px]">{props.children}</div>;
};

export default SectionWrapper;
