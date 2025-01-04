import React from 'react';

interface ContainerProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  type: 'p' | 'span' | 'button' | 'a';
  fw?: number; // font-weight
  fz?: number; // font-size
  padding?: string;
  margin?: string;
  color?: string;
  classname?: string;
}

const Text: React.FC<ContainerProps> = ({
  children,
  type,
  fw,
  fz = 16,
  padding,
  margin,
  color = '#5C665F',
  classname,
  style,
  ...rest
}) => {
  const calcLineHeight = fz * 1.5;

  const combinedStyle = {
    fontWeight: fw,
    fontSize: `${fz}px`,
    lineHeight: `${calcLineHeight}px`,
    padding,
    margin,
    color: classname?.includes('text-') ? undefined : color,
    ...style,
  };

  const Element = type;

  return (
    <Element
      className={`text-[#191919] dark:text-darkMain ${classname || ''}`}
      style={combinedStyle}
      {...rest}
    >
      {children}
    </Element>
  );
};

export default Text;
