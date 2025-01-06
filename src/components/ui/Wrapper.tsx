import React from 'react';

interface WrapperProps {
  children: React.ReactNode;
  classname?: string;
}

const Wrapper: React.FC<WrapperProps> = ({ children, classname }) => {
  return (
    <section className={`py-2 px-4 ${classname} bg-main dark:bg-darkMain`}>
      {children}
    </section>
  );
};

export default Wrapper;
