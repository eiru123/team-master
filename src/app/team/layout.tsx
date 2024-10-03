import Gnb from '@/components/Gnb';
import Header from '@/components/Header';
import React from 'react';

const layout = ({ children }) => {
  return (
    <div className="relative">
      <Header />
      {children}
      <div className=" invisible h-20">padding</div>
      <Gnb />
    </div>
  );
};

export default layout;
