'use client';

import React, { useEffect, useRef } from 'react';

import TopBar from '@/components/TopGnb';
import Title from '@/components/ui/Title';
import Container from '@/components/ui/Container';
import Wrapper from '@/components/ui/Wrapper';
import Text from '@/components/ui/Text';

const PageOne = () => {
  // 경기 시작 날짜 (임의로 로컬스토리지)
  const matchDate = sessionStorage.getItem('matchDate');

  // 드래그앤 드롭

  return (
    <Container display="block">
      <TopBar depth={2} title="경기 참여자 선택" />

      {/* 경기 날짜 표시 */}
      <Wrapper classname=" ">
        <Text classname="" type="p">
          경기 진행일: {matchDate}
        </Text>
      </Wrapper>

      {/* 참여 인원 선택 */}
      <Wrapper classname=" grid grid-cols-2">
        {/* 참여자 리스트 */}
        <div className=" list bg-violet-300 overflow-y-scroll flex flex-col items-center rounded-l-md h-96 relative">
          <Title classnames=" border-b-2 sticky top-0 bg-violet-300 w-full mb-4" type="mini">
            참여자
          </Title>

          {/* 플레이어: 포지션 / 이름 */}
          {/* 가드: bg-pink-300 */}
          {/* 포워드: bg-yellow-200 */}
          {/* 센터: bg-indigo-300 */}

          {/* 플레이어 */}
          <div className="player pb-4 flex justify-evenly w-full" draggable="true">
            <Text classname=" bg-pink-300 rounded-full font-semibold w-6 h-6 text-center" type="p">
              G
            </Text>
            <Text classname="" type="p">
              조성은
            </Text>
          </div>

          {/* 플레이어 */}
          <div className="player pb-4 flex justify-evenly w-full" draggable="true">
            <Text
              classname=" bg-yellow-200 rounded-full font-semibold w-6 h-6 text-center"
              type="p"
            >
              F
            </Text>
            <Text classname="" type="p">
              강동구
            </Text>
          </div>
        </div>

        {/* 미참여자 리스트 */}

        <div className=" list bg-slate-300 overflow-y-scroll flex flex-col items-center rounded-r-md  h-96 relative">
          <Title classnames=" border-b-2 sticky top-0 bg-slate-300 w-full mb-4" type="mini">
            미참여자
          </Title>

          {/* 플레이어 */}
          <div className="player pb-4 flex justify-evenly w-full" draggable="true">
            <Text
              classname=" bg-indigo-300 rounded-full font-semibold w-6 h-6 text-center"
              type="p"
            >
              C
            </Text>
            <Text classname="" type="p">
              이상엽
            </Text>
          </div>
        </div>
      </Wrapper>
    </Container>
  );
};

export default PageOne;
