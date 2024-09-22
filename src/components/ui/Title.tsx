import React from 'react';

interface TitleProps {
  children: React.ReactNode;
  type: 'main' | 'sub' | 'mini' | null;
  classnames?: string;
}

const Title: React.FC<TitleProps> = ({ children, type, classnames = null }) => {
  switch (type) {
    case 'main':
      return (
        <h1
          className={`title-font text-darkMain w-fit text-center dark:text-main font-bold text-3xl ${classnames}`}
        >
          {children}
        </h1>
      );

    case 'sub':
      return (
        <h2
          className={`title-font text-darkMain w-fit min-w-28 text-center dark:text-main font-bold text-2xl ${classnames}`}
        >
          {children}
        </h2>
      );

    case 'mini':
      return (
        <h3
          className={`miniTitle-font text-darkMain w-fit  min-w-28 text-center dark:text-main font-bold text-xl pt-2 ${classnames}`}
        >
          {children}
        </h3>
      );

    default:
      return (
        <p
          className={`title-font text-darkMain w-fit  min-w-28 text-center dark:text-main font-bold text-xs ${classnames}`}
        >
          타이틀 크기 설정 바랍니다.
        </p>
      );
  }
};

export default Title;
