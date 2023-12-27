import React from 'react';
import SectionWrapper from '@/app/components/SectionWrapper';
import { H5, P } from '@/app/components/Typography';
import Bullets from '@/app/components/Bullets';
import Image from 'next/image';

const FourthSection = () => {
  return (
    <SectionWrapper>
      <div className="flex">
        <div>
          <Image
            width={568}
            height={786}
            src="/greske-vlasnika.png"
            alt="Greske vlasnika"
          />
        </div>

        <div>
          <H5 className="font-bold mb-14">GREŠKE VLASNIKA</H5>
          <P className="mb-14">
            Vlasnici pasa vrlo često rade male greške, a da nisu ni svjesni
            toga, pa evo neke od njih:
          </P>
          <Bullets
            num={1}
            bullets={[
              'nagrađivanje psa u krivom trenutku ili iz pogrešnih razloga',
              'kad jednom počnemo vježbati treba biti redovit, bez velikih prekida, ako se dresura pasa radi svaki drugi dan, onda se toga treba i pridržavati.',
              'motiviranost psa, ako vlasnik ne motivira svog psa, nemoguće je postići neki značajan uspjeh.',
              'vježbe se u početku ne provode na različitim lokacijama',
              'socijalizacija je nešto što ide ruku pod ruku s tom strašnom dresura pasa',
              'kad pas jednom nešto nauči, to treba održavati i kroz cio njegov život povremeno vježbati.',
            ]}
          />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default FourthSection;
