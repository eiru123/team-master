import React from 'react';
import Section from './ui/section/Section';
import Link from 'next/link';

const Header = () => {
  return (
    <div className='wrapper'>
      {/* 팀이름 / 로고 */}
      <Section classnames="w-fit">
        <Link href="/">
          <h1>SIXERS</h1>
        </Link>
      </Section>
      {/* 모바일용 햄버거 메뉴 */}
    </div>
  );
};

export default Header;
