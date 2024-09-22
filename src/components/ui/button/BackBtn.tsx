import { useRouter } from 'next/navigation';
import React from 'react';
import BackSvg from '../svg/BackSvg';

const GoBackBtn = () => {
  const router = useRouter();

  const onClickBack = () => {
    router.back();
  };

  return (
    <button className=" pb-1" onClick={onClickBack}>
      <BackSvg />
    </button>
  );
};

export default GoBackBtn;
