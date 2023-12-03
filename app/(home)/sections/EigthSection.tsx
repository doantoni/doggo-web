import React from "react";
import SectionWrapper from "@/app/components/SectionWrapper";
import H1 from "@/app/components/Typography/H1";
import P from "@/app/components/Typography/P";
import Card from "@/app/components/Card";
import ProgramInfo from "@/app/components/ProgramInfo";
import ExcercisesInfo from "@/app/components/ExcercisesInfo";

const EigthSection = () => {
  return (
    <SectionWrapper className="h-[778px]">
      <H1>Programi škole</H1>
      <P>Opis programa i pristupa treninzima</P>
      <div className="mt-[87px] h-full flex gap-[43px]">
        <Card>
          <ProgramInfo
            title="PROGRAM 1"
            boldText="Štenci do 6 mjeseci"
            description="10 treninga x 30 min"
            additionalInfo="uvodni sat + 5 termina"
          />
          <ExcercisesInfo
            num={1}
            bullets={[
              "koncentracija na znak",
              "zabrana “NE”",
              "pravilno hodanje na povodniku",
              "dolazak na poziv",
              "“STANI” na mjestu i u hodu",
              "“SJEDI” sa čekanjem",
            ]}
          />
        </Card>
        <Card>
          <ProgramInfo
            title="PROGRAM 2"
            boldText="Psi stariji od 6 mjeseci"
            description={
              <>
                prvi dio termina x 30 min
                <br /> drugi dio termina x 60 min
              </>
            }
            additionalInfo="uvodni sat + 10 termina"
          />
          <ExcercisesInfo
            num={2}
            bullets={[
              "koncentracija na znak",
              "zabrana “NE”",
              "pravilno hodanje na povodniku",
              "dolazak na poziv",
              "“STANI” na mjestu i u hodu",
              "“SJEDI” sa čekanjem",
              "“LEZI” sa čekanjem",
            ]}
          />
        </Card>
      </div>
    </SectionWrapper>
  );
};

export default EigthSection;
