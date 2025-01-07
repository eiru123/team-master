import React from 'react';

type ElementTypes = 'p' | 'span' | 'button' | 'a';

interface BaseProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  type: ElementTypes;
  fw?: number; // font-weight
  fz?: number; // font-size
  padding?: string;
  margin?: string;
  color?: string;
  classname?: string;
}

// 타입별 추가 속성 정의
interface AnchorProps extends BaseProps {
  type: 'a';
  href: string;
}

interface ButtonProps extends BaseProps {
  type: 'button';
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

// 나머지 요소에 대한 타입
interface OtherProps extends BaseProps {
  type: 'p' | 'span';
}

// 전체 타입
type ContainerProps = AnchorProps | ButtonProps | OtherProps;

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
  const calcLineHeight = fz * 1.5; // line-height 계산
  const hasFontSize = classname?.includes('text-');

  const combinedStyle = {
    fontWeight: fw,
    fontSize: hasFontSize ? undefined : `${fz}px`,
    lineHeight: hasFontSize ? undefined : `${calcLineHeight}px`,
    padding,
    margin,
    color: classname?.includes('text-') ? undefined : color,
    ...style,
  };

  // 요소 렌더링
  switch (type) {
    case 'a':
      return (
        <a
          className={`text-[#191919] dark:text-darkMain ${classname || ''}`}
          style={combinedStyle}
          {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </a>
      );

    case 'button':
      return (
        <button
          className={`text-[#191919] dark:text-darkMain ${classname || ''}`}
          style={combinedStyle}
          {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
        >
          {children}
        </button>
      );

    case 'p':
      return (
        <p
          className={`text-[#191919] dark:text-darkMain ${classname || ''}`}
          style={combinedStyle}
          {...(rest as React.HTMLAttributes<HTMLParagraphElement>)}
        >
          {children}
        </p>
      );

    case 'span':
      return (
        <span
          className={`text-[#191919] dark:text-darkMain ${classname || ''}`}
          style={combinedStyle}
          {...(rest as React.HTMLAttributes<HTMLSpanElement>)}
        >
          {children}
        </span>
      );

    default:
      return null;
  }
};

export default Text;
