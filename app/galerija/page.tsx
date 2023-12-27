import React from 'react';
import NavWrapper from '@/app/components/NavWrapper';
import { NavEnum } from '@/app/components/Navigation';
import { H2, P } from '@/app/components/Typography';
import Gallery from '@/app/components/Gallery';

const Galerija = () => {
  return (
    <NavWrapper selected={NavEnum.GALERIJA}>
      <div className="p-14">
        <div className="flex">
          <H2 className="cursor-pointer">Galerija slika</H2>
          <H2 className="ml-8 cursor-pointer">Videozapisi</H2>
        </div>
        <P className="pb-12">
          Tijekom godina, preko 450 pasa je prošlo Snoopy školu, a ovo su
          fotografije i priče nekih od njih.
        </P>
        <Gallery
          images={[
            {
              src: '/galerija-1.png',
              alt: 'Gaia',
              title: 'Gaia',
              subtitle: 'Istarski gonič',
              description:
                'Istarski kratkodlaki gonič je stara autohtona lovačka pasmina koju kod nas i u okolnim zemljama uglavnom drže i iznimno cijene lovci. Ipak, u posljednje vrijeme polako postaju i cijenjeni ljubimci za aktivne vlasnike, zbog svoje dobroćudne, blage naravi ali i ljepote i atleticizma. Gaia je u školu došla s općima problemima s poslušnošću i sklonošću, tipičnom za goniče, da odjuri za plijenom i drugim psima. Pokazala se kao inteligentan učenik i odlično napreduje, pa je sad poslušna čak i u šumi i kad je s drugim psima.',
            },
            {
              src: '/galerija-2.png',
              alt: 'Kipo',
              title: 'Kipo',
              subtitle: 'Kavalirski španijel',
              description:
                'Kipo je malo na "svoju ruku". U redu, ima određenih problema sa zdravljem i jede samo svoju određenu suhu hranu no uz to je bio i strašno rastresen, loše pažnje i prilično neposlušan. Ispočetka situacija nije mnogo obećavala no uz vrijedan i savjestan rad vlasnika postao je mnogo koncentriraniji, vodljiv i, što mi je dosadašnje iskustvo s kavalircima i govorilo, odličan i entuzijastičan učenik!',
            },
            {
              src: '/galerija-3.png',
              alt: 'Maša',
              title: 'Maša',
              subtitle: 'Miješanac',
              description:
                'Maša je u školu došla s dosta problema. Uz opće probleme s poslušnošću tu je bio i određeni strah od ljudi ali i od drugih pasa. Strahovi su minuli i Maša je sad radoznao i vedar mladi pas. Usto, savladala je i program temeljne poslušnosti i predano i dalje napredovala. Prava odlikašica...',
            },
            {
              src: '/galerija-4.png',
              alt: 'Natty',
              title: 'Natty',
              subtitle: 'Križanka Russell terijera',
              description:
                'Jedna od temeljnih vježbi u našem programu je vježba “stani”. Psa se uči da mirno stane i stoji uz vodiča na opuštenom povocu čim se ovaj zaustavi. Nije bitno toliko u kojem je položaju koliko da je miran i da ne zateže povodnik. Može i zainteresirano promatrati oko sebe, samo da je smiren i uz gazdu. Mislim da je suvišno objašnjavati sve mogućnosti praktične primjene ove vježbe. Natty, sedmomjesečna križanka u tipu russell terijera uspješno ju je, kao što vidite, svladala i nakon škole je postala pravi obiteljski ljubimac.',
            },
            {
              alt: 'Maša',
              title: 'Maša',
              subtitle: 'miješanac, terijer',
              description:
                'Dugodlaki čivava Kofi na treninge je dolazio od dobi oko 5 mjeseci. Vlasnici je prvi pas, za uobičajene standarde razmišljanja neobične pasmine za treninge. Nažalost, naime, mnogi vlasnici smatraju da s malim psima ne treba posebno raditi no zaboravljaju da pas uvijek uči no pitanje je uči li ono što mi želimo i jesmo li osvijestili svoje ponašanje sa psom. ',
            },
            {
              alt: 'Dante',
              title: 'Dante',
              subtitle: 'Jack Russel terijer',
              description:
                'Dugodlaki čivava Kofi na treninge je dolazio od dobi oko 5 mjeseci. Vlasnici je prvi pas, za uobičajene standarde razmišljanja neobične pasmine za treninge. Nažalost, naime, mnogi vlasnici smatraju da s malim psima ne treba posebno raditi no zaboravljaju da pas uvijek uči no pitanje je uči li ono što mi želimo i jesmo li osvijestili svoje ponašanje sa psom. ',
            },
          ]}
        />
      </div>
    </NavWrapper>
  );
};

export default Galerija;
