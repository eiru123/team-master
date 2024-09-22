import Image from 'next/image';
import React from 'react';
import Title from './ui/Title';

interface LoadingContentsProps {
  type: 'img' | 'default';
}

const Loading = ({ type }: LoadingContentsProps) => {
  switch (type) {
    case 'img':
      return (
        <div className=" w-full h-dvh relative">
          {/* 임시 식서스 로고 사용 */}
          {/* 추후 해당 경로를 각 팀에 맞게 서버에서 받아올 예정 */}
          <Image
            className=" absolute position-center top-1/2"
            src={'/img/sixers-white.png'}
            width={300}
            height={120}
            alt="식서스 팀로고"
          />
        </div>
      );

    default:
      return (
        <div className=" w-full h-full">
          <Title type="mini">로딩중...</Title>
        </div>
      );
  }
};

export default Loading;
