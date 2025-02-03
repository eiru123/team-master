'use client';

import DimmedWrapper from '@/components/DimmedWrapper';
import Navigation from '@/components/Navigation/Navigation';
import React, { useEffect, useState } from 'react';

type Props = {
  children: React.ReactNode;
};

type ScrollType = 'up' | 'down' | null;

const Layout = ({ children }: Props) => {
  const [scrollDirection, setScrollDirection] = useState<ScrollType>(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setScrollDirection('down');
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection('up');
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <DimmedWrapper />
      {children}
      <div className={scrollDirection === 'down' ? 'hidden' : ''}>
        <Navigation />
      </div>
    </>
  );
};

export default Layout;
