import React from "react";
import FirstSection from "./sections/FirstSection";
import SecondSection from "./sections/SecondSection/SecondSection";
import NavWrapper from "../components/NavWrapper";
import { NavEnum } from "../components/Navigation";

const Savjeti = () => {
  return (
    <NavWrapper selected={NavEnum.SAVJETI}>
      <FirstSection />
      <SecondSection />
    </NavWrapper>
  );
};

export default Savjeti;
