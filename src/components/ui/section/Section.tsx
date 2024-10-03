import React from 'react';

type Props = {
  children: React.ReactNode;
  classnames?: string;
};

const Section = ({ children, classnames }: Props) => {
  return (
    <section
      className={` text-2xl font-bold bg-[#1A1F28] text-white py-2 px-4 rounded-md ${classnames}`}
    >
      {children}
    </section>
  );
};

export default Section;
