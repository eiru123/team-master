'use client';

import StampIcon from '@/components/icon/StampIcon';
import Section from '@/components/ui/section/Section';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const VotePage = () => {
  const route = useRouter();
  const [joinYN, setJoinYN] = useState<string>('');
  const [stampPosition, setStampPosition] = useState<string>('');

  // data 초기화
  const resetVote = () => {
    setJoinYN('');
    setStampPosition('');
    route.push('/team/main');
  };

  const onClickVote = (id: string) => {
    switch (id) {
      case 'join':
        setStampPosition('left-[120px]');
        setJoinYN('참석');
        break;
      case 'no-join':
        setStampPosition('right-[24px]');
        setJoinYN('미참석');
        break;
      case 'yes':
        console.log('참석 여부 전달: ', joinYN);
        resetVote();
        break;
      case 'no':
        resetVote();
        break;
      default:
        break;
    }
  };

  return (
    <>
      {/* 투표 해야함 */}
      <Section classnames=" flex flex-col justify-center items-center py-10">
        <p className=" text-2xl text-[#F6F9F3] date-text">
          2024년 10월 5일 (토)
        </p>

        {/* 테마  1. 리그 경기  2. 일반 경기  3. 이벤트 경기 */}
        <p className="text-lg py-4">리그 경기 0주차</p>
        {/* <p className="text-lg py-4">일반 경기</p> */}
        {/* <p className="text-lg py-4">이벤트</p> */}

        <div className=" w-full grid grid-cols-2 gap-4 px-4 relative">
          <button
            type="button"
            onClick={() => onClickVote('join')}
            className="bg-[#2E3440] text-[#A3BE8C] py-4 rounded-lg"
          >
            참여
          </button>
          <button
            type="button"
            onClick={() => onClickVote('no-join')}
            className="bg-[#2E3440] text-[#BF616A] py-4 rounded-lg"
          >
            미참여
          </button>

          {/* 누른 버튼 표시 */}
          {stampPosition !== '' ? (
            <div className={`absolute top-0 ${stampPosition}`}>
              <StampIcon />
            </div>
          ) : null}
        </div>
      </Section>

      {/* 참석 여부 재확인 모달 */}
      {/* TODO: 모달 전역관리 필요? */}
      {joinYN ? (
        <>
          <div className="dimmed w-screen h-screen z-40 absolute top-0 overflow-hidden bg-slate-900 opacity-50"></div>
          <div className=" w-3/4 h-[300px] bg-[#4C566A] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 flex flex-col justify-center items-center">
            <p className="text-[#F6F9F3] text-xl font-semibold">
              2024년 10월 5일 (토)
            </p>
            <p className="text-[#F6F9F3] text-lg">{joinYN} 하시겠습니까?</p>
            <div className="mt-10 grid grid-cols-2 gap-5">
              <button
                onClick={() => onClickVote('yes')}
                className="text-[#F6F9F3] text-base"
              >
                예
              </button>
              <button
                onClick={() => onClickVote('no')}
                className="text-[#F6F9F3] text-base"
              >
                아니오
              </button>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default VotePage;
