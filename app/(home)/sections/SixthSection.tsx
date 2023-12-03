import React from "react";
import SectionWrapper from "@/app/components/SectionWrapper";
import H1 from "@/app/components/Typography/H1";
import RoundImageAndText from "@/app/components/RoundImageAndText";
const SixthSection = () => {
  return (
    <SectionWrapper className="pt-0">
      <H1>Zašto Snoopy?</H1>
      <div className="flex justify-between">
        <RoundImageAndText
          src="/round-image-dog-1.png"
          alt="poslušan pas 1"
          text="Individualni pristup"
        />
        <RoundImageAndText
          src="/round-image-dog-2.png"
          alt="poslušan pas 2"
          text="Primjena u stvarnim situacijama"
        />
        <RoundImageAndText
          src="/round-image-dog-3.png"
          alt="poslušan pas 3"
          text="Poboljšana povezanost"
        />
      </div>
    </SectionWrapper>
  );
};

export default SixthSection;
