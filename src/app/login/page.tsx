'use client';
import Catchphrase from '@/components/CatchPhrase/CatchPhrase';
import Link from 'next/link';
import React, { useEffect } from 'react';

const LoginPage = () => {
  useEffect(() => {
    // [question]: $ 붙이는 경우?
    const $fade: HTMLElement = document.querySelector('.fade') as HTMLElement;
    $fade.classList.add('visible');

    return () => {
      $fade.classList.remove('visible');
    };
  }, []);

  const handleKakaoLogin = () => {
    // 카카오 로그인 구현
  };

  return (
    <main className="login-container fade responsive">
      <Catchphrase />

      <div className="login__btn-box">
        <Link href="/select" className="login__kakao-btn" onClick={handleKakaoLogin}>
          카카오 로그인
        </Link>
      </div>
    </main>
  );
};

export default LoginPage;
