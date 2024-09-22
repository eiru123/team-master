'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import XSvg from '../svg/XSvg';

const CloseBtn = ({ isConfirm = false }) => {
  const router = useRouter();

  const onClickClose = () => {
    if (isConfirm) {
      const userConfirmed = confirm('내용은 저장되지 않습니다.');
      if (!userConfirmed) {
        return;
      }
    }
    router.back();
  };

  return (
    <button onClick={onClickClose}>
      <XSvg />
    </button>
  );
};

export default CloseBtn;
