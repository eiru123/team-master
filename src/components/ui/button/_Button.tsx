import React from 'react';

interface CommonBtnProps {
  children: React.ReactNode;
  classname?: string;
  onClick: () => void;
  BgColor:
    | 'select'
    | 'disabled'
    | 'white'
    | 'red'
    | 'orange'
    | 'kakao'
    | 'home'
    | 'fuchsia'
    | 'purple'
    | 'zinc';
}

const CommonBtn: React.FC<CommonBtnProps> = ({ children, classname, onClick, BgColor }) => {
  const colors: { [key: string]: string } = {
    white: 'bg-white',
    red: 'bg-red-500',
    orange: 'bg-orange-500',
    kakao: 'bg-yellow-500',
    home: 'bg-slate-500',
    fuchsia: 'bg-fuchsia-200',
    purple: 'bg-purple-500',
    zinc: 'bg-zinc-500',
    // 선택버튼
    select: 'bg-sky-400',
    // 비활성화
    disabled: 'bg-gray-300',
  };

  return (
    <button
      className={` ${colors[BgColor]} rounded-md shadow-lg m-2 p-4 ${classname}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default CommonBtn;
