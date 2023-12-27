import React from "react";
import FirstSection from "./sections/FirstSection";
import SecondSection from "./sections/SecondSection/SecondSection";
import NavWrapper from "@/app/components/NavWrapper";
import { NavEnum } from "@/app/components/Navigation";
import Video from "@/app/components/Video";
import ThirdSection from "./sections/ThirdSection";
import FourthSection from "./sections/FourthSection";
import FifthSection from "./sections/FifthSection";
import Footer from "@/app/components/Footer";

const Savjeti = () => {
  return (
    <NavWrapper selected={NavEnum.SAVJETI}>
      <FirstSection />
      <SecondSection />
      <Video img="/video-placeholder-2.png" src="video.mp4" />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <Footer />
    </NavWrapper>
  );
};

export default Savjeti;
