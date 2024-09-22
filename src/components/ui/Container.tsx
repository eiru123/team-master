import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  display: 'flex' | 'block' | null;
}

const Container: React.FC<ContainerProps> = ({ children, display }) => {
  switch (display) {
    case 'flex':
      return (
        <main className="bg-main dark:bg-darkMain w-full h-screen relative flex flex-col justify-center items-center">
          {children}
        </main>
      );

    case 'block':
      return (
        <main className="bg-main dark:bg-darkMain w-full h-full min-h-screen relative">
          {children}
        </main>
      );

    default:
      return <p>컨테이너 타입이 없습니다.</p>;
  }
};

export default Container;
