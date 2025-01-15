'use client';

import { useDimmed } from '@/store/dimmedStore';
import React, { useEffect } from 'react';
import Dimmed from './ui/Dimmed';

const DimmedWrapper = () => {
  const { dimmed } = useDimmed();
  useEffect(() => {
    if (dimmed) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'scroll';
    }
  }, [dimmed]);
  return <>{dimmed ? <Dimmed /> : null}</>;
};

export default DimmedWrapper;
