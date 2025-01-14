import Navigation from '@/components/Navigation/Navigation';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

const layout = ({ children }: Props) => {
  return (
    <>
      {children}
      <Navigation />
    </>
  );
};

export default layout;
