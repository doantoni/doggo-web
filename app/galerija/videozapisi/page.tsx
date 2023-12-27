import React from 'react';
import NavWrapper from '@/app/components/NavWrapper';
import { NavEnum } from '@/app/components/Navigation';
const GalerijaVideozapisi = () => {
  return (
    <NavWrapper selected={NavEnum.GALERIJA_VIDEOZAPISI}>
      GalerijaVideozapisi
    </NavWrapper>
  );
};

export default GalerijaVideozapisi;
