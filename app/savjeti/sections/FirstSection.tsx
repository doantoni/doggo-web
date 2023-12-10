import React from "react";
import { DEFAULT_SECTION_HEIGHT } from "@/app/constants";
import Image from "next/image";
import { H1, P } from "@/app/components/Typography";
const FirstSection = () => {
  return (
    <div
      className={`relative w-screen ${DEFAULT_SECTION_HEIGHT} overflow-hidden bg-cover bg-[50%] bg-no-repeat`}
    >
      <Image
        className="w-screen h-full object-cover"
        width={1440}
        height={681}
        src={"/main-img.png"}
        alt="video"
      />
      <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden opacity-80 bg-gradient-to-l from-black"></div>
      <H1 className="text-white absolute top-20 left-1/2 transform -translate-x-20">
        Dobrodošli!
      </H1>
      <P className="text-white absolute top-52 left-1/2 transform -translate-x-20 pr-9">
        Ovdje ćete moći pročitati ponešto o pristupu treninzima i vrijednostima
        koje zastupamo u radu i druženju s našim i Vašim četveronožnim
        prijateljima.
      </P>
    </div>
  );
};

export default FirstSection;
