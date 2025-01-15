import React from 'react';

interface ContainerProps extends React.ComponentProps<'div'> {
  children: React.ReactNode;
  display: 'flex' | 'block' | null;
}

const Container: React.FC<ContainerProps> = ({
  children,
  display,
  ...rest
}) => {
  switch (display) {
    case 'flex':
      return (
        <main
          className={`bg-main dark:bg-darkMain w-full h-screen relative pb-5 flex flex-col justify-center items-center ${rest.className}`}
        >
          {children}
        </main>
      );

    case 'block':
      return (
        <main
          className={`bg-main dark:bg-darkMain w-full h-full min-h-screen relative pb-5 ${rest.className}`}
        >
          {children}
        </main>
      );

    default:
      return <p>컨테이너 타입이 없습니다.</p>;
  }
};

export default Container;
