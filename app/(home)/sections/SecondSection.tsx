import React from "react";
import SectionWrapper from "@/app/components/SectionWrapper";
import H1 from "@/app/components/Typography/H1";
import P from "@/app/components/Typography/P";

const SecondSection = () => {
  return (
    <SectionWrapper>
      <H1>Škola za pse</H1>
      <P>
        Škola za pse Snoopy zapravo je projekt jedne osobe, savjetnika i
        instruktora Karla Nikolića, a od drugih se sličnih škola razlikuje
        ponajprije po tome što njeguje primarno individualni pristup radu sa
        psima i njihovim vlasnicima/skrbnicima s naglaskom na tehnici,
        komunikaciji ali i boljoj povezanosti pasa i vodiča.{" "}
      </P>
    </SectionWrapper>
  );
};

export default SecondSection;
