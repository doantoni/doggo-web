import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}
const SectionWrapper = (props: Props) => {
  return (
    <div className={`w-screen ${props.className} p-[76px]`}>
      {props.children}
    </div>
  );
};

export default SectionWrapper;
