'use client';

import Section from '@/components/ui/section/Section';
import React from 'react';

const TeamMainPage = () => {
  return (
    <main className="wrapper">
      {/* 팀명 / 로고 */}
      {/* 팀 메인화면에서 누르면 아무 일 X, 다른 페이지에서 누르면 팀 메인으로 */}

      {/* 리그 정보 */}
      <Section classnames=" flex flex-col justify-center items-center">
        <p className=" text-2xl text-[#F6F9F3] date-text">2024년 10월 5일</p>

        {/* 리그전이 있을 경우 리그전 순위정보 */}
        <div className="my-2">
          <p className="text-sm">
            현재 우승팀: <span className="text-base">1팀</span>{' '}
            <span>[ 3승 1무 0패 ]</span>
          </p>
        </div>
      </Section>

      {/* 투표 화면 */}
      {/* 금주 경기 날짜를 보여줌 + 투표 진행 */}
      <Section classnames=" my-8 w-full flex flex-col justify-center items-center">
        {/* 날짜 표시 */}
        <p className=" text-xl text-[#F6F9F3] date-text">
          2024년 10월 12일 (토)
        </p>

        {/* 투표 마감까지 남은 시간 */}
        <p className="text-base text-[#D08770] miniTitle-font text-center font-light my-2">
          DD:HH:MM:SS
        </p>

        <p className="text-base text-[#A3BE8C] miniTitle-font text-center font-light my-2">
          00:00:00:00
        </p>

        {/* 사용자가 투표를 했다면 '투표 하라는 문구' 투표 페이지로 넘어감 */}
        <button
          type="button"
          className="text-sm text-[#F6F9F3] miniTitle-font text-center font-light my-2"
        >
          투표 하러가기 ➡️
        </button>

        {/* 사용자가 투표를 했다면 '투표 결과 보러가기' 투표 페이지로 넘어감 */}
        <button
          type="button"
          className="text-sm text-[#F6F9F3] miniTitle-font text-center font-light my-2"
        >
          투표 결과 보러가기 ➡️
        </button>
      </Section>
    </main>
  );
};

export default TeamMainPage;
