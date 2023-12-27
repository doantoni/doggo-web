import React from 'react';
import SectionWrapper from '@/app/components/SectionWrapper';
import { H1, H5 } from '@/app/components/Typography';
import P from '@/app/components/Typography/P';

const ThirdSection = () => {
  return (
    <SectionWrapper>
      <H1>Metode dresure</H1>
      <H5 className='font-bold text-primary mb-32'>Početne i napredne metode</H5>
      <H5 className='font-bold'>POČETNE METODE</H5>
      <P>
        Treba raditi postepeno, bolje u kraćim intervalima i češće. Kroz našu
        školu vodit će vas voditelj, no da bi dresura pasa bila uspješna nužno
        je i vježbati kod kuće. Pas veoma brzo shvaća no da bi doista usvojio
        određene vježbe nužno ih je dovoljno i redovito ponavljati. Ponovno,
        dresura pasa ne treba biti kruta i gruba već kroz igru i s dovoljno
        hvaljenja a uočene greške valja ispravljati u trenutku kad se događaju.
      </P>
      <P>
        I psi imaju svoje dobre i loše dane pa ako našem pratitelju nije pravi
        dan, ne treba ga forsirati a nikako povisivati glas niti gubiti
        strpljenje. Bolje je načiniti pauzu. Radnje se uvježbavaju u etapama od
        jednostavnih prema onim složenijima, ako pas uspješno prolazi
        jednostavne vježbe, može se polako prelaziti na one teže. Osnovno je
        pravilo, ako negdje zapne, vratiti se na prethodnu etapu, pa kasnije
        pokušati ponovno. Time će pas postati sigurniji, i praktički nesvjestan
        da prolazi kroz zahtjevnu i napornu dresuru pasa.
      </P>
      <P className='mb-24'>
        Važno je i ovo za dresuru pasa: mnogi vlasnici imaju običaj svojim
        četveronožnim pratiocima davati poslastice tek tako, jer ih vole. Bolje
        je da pas nagradu nauči zaslužiti i da ne bude hvaljen bez pravog
        povoda. Tek tada nagrade i pohvale za njega poprimaju pravi smisao i vi
        ćete se bolje međusobno razumjeti. Kod te famozne dresure pasa važno je
        i ispočetka vježbati na istom terenu a tek kasnije mijenjati okoliš.
        Tada će on istu vježbu moći odraditi u bilo kojoj okolini jednako a mi
        ćemo biti sigurni da ju je dobro prihvatio.
      </P>
      <H5 className='font-bold'>NAPREDNE metode</H5>
      <P>Dresura pasa u naprednim metodama iziskuju velik broj ponavljanja vježbi i najčešće su dugotrajne. Radi o više usklađenih radnji koje pas odrađuje s jednom komandom. Također psa se ne smije prisiljavati da radi vježbe ako nema dovoljo interesa, puno bolje je odgoditi vježbe za drugi dan. Dresura pasa je zahtjevan posao no trebao bi predstavljati zadovoljstvo kako za psa, tako i za čovjeka
</P>
    </SectionWrapper>
  );
};

export default ThirdSection;
