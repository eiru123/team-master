import React from 'react';
import HamburgerSvg from '../svg/HamburgerSvg';

const ToggleMenuBtn = () => {
  const onToggleMenu = () => {
    console.log('토글 메뉴 클릭');
  };

  return (
    <button className=" pb-1" onClick={onToggleMenu}>
      <HamburgerSvg />
    </button>
  );
};

export default ToggleMenuBtn;
