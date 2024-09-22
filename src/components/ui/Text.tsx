import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  type: 'p' | 'span';
  classname?: string;
}

const Text: React.FC<ContainerProps> = ({ children, type, classname }) => {
  switch (type) {
    case 'p':
      return <p className={`text-darkMain dark:text-main ${classname}`}>{children}</p>;

    case 'span':
      return <span className={`text-darkMain dark:text-main ${classname}`}>{children}</span>;

    default:
      return <p>글자 타입을 설정해주세요</p>;
  }
};

export default Text;
