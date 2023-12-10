import React from "react";
import SectionWrapper from "@/app/components/SectionWrapper";
import P from "@/app/components/Typography/P";
import texts from "./text.json";

const SecondSection = () => {
  return (
    <SectionWrapper className={"h-fit"}>
      <P>{texts["paragraph-one"]}</P>
      <P>{texts["paragraph-two"]}</P>
      <P>{texts["paragraph-three"]}</P>
    </SectionWrapper>
  );
};

export default SecondSection;
