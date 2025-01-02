'use client';
import Catchphrase from '@/components/CatchPhrase/CatchPhrase';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';

const LoginPage = () => {
  const mainRef = useRef<HTMLElement>();
  useEffect(() => {
    // [question]: $ 붙이는 경우?
    const mainDiv: HTMLElement = mainRef.current;
    mainDiv.classList.add('visible');

    // const $fade: HTMLElement = document.querySelector('.fade') as HTMLElement;
    // $fade.classList.add('visible');

    return () => {
      mainDiv.classList.add('visible');
    };
  }, []);

  const handleKakaoLogin = () => {
    // 카카오 로그인 구현
  };

  return (
    <main className="login-container fade responsive" ref={mainRef}>
      <Catchphrase />

      <div className="login__btn-box">
        <Link
          href="/select"
          className="login__kakao-btn"
          onClick={handleKakaoLogin}
        >
          카카오 로그인
        </Link>
      </div>
    </main>
  );
};

export default LoginPage;
