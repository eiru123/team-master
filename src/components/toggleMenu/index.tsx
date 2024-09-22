import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const ToggleMenu: React.FC = () => {
  const router = useRouter();
  const [isPage, setIsPage] = useState<string | null>(null);

  const handleSelectTeam = () => {
    onCloseMenu();
  };

  const handleLogout = () => {
    onCloseMenu();
  };

  const onCloseMenu = () => {
    document.querySelector('.dimmed')?.classList.remove('active');
    document.querySelector('.menu')?.classList.remove('active');

    router.back();
  };

  useEffect(() => {
    const disabledBtn = () => {
      if (!router.pathname.includes('main')) return;

      if (router.pathname.includes('team')) {
        setIsPage('team');
        return;
      }

      if (router.pathname.includes('schedule')) {
        setIsPage('schedule');
        return;
      }

      if (router.pathname.includes('notice')) {
        setIsPage('notice');
        return;
      }
    };

    disabledBtn();
  }, [router.pathname]);

  useEffect(() => {
    const menuParam = router.query.menu;
    if (menuParam === 'ok') {
      document.querySelector('.dimmed')?.classList.add('active');
      document.querySelector('.menu')?.classList.add('active');
    }
  }, [router.query]);
  // [TODO]: 페이지 구조 업데이트 해야함
  return (
    <>
      {/* <!-- 토글 메뉴 --> */}
      {/* dimmed */}
      <div className=" bg-slate-400 opacity-40 z-0"></div>
      <div className="menu">
        <div className="menu__close">{/* <CloseBtn closeEvent={onCloseMenu} /> */}</div>
        <div className="menu__links">
          <Link href="/team">
            <a className={`menu__links-btn ${isPage === 'team' ? 'disabled' : ''}`}>메인</a>
          </Link>
          <button className={`menu__links-btn ${isPage === 'weeklyNews' ? 'disabled' : ''}`}>
            주간 스포츠
          </button>
          <Link href="team/schedule">
            <a className={`menu__links-btn ${isPage === 'schedule' ? 'disabled' : ''}`}>
              경기 일정
            </a>
          </Link>
          <button className={`menu__links-btn ${isPage === 'info' ? 'disabled' : ''}`}>
            정보 센터
          </button>
          <Link href="/notice">
            <a className={`menu__links-btn ${isPage === 'notice' ? 'disabled' : ''}`}>공지사항</a>
          </Link>
        </div>
        <div className="menu__gnb">
          <Link href="/select">
            <a className="menu__gnb-selectTeam" onClick={handleSelectTeam}>
              팀 선택
            </a>
          </Link>
          <Link href="/">
            <a className="menu__gnb-logout" onClick={handleLogout}>
              로그아웃
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ToggleMenu;
