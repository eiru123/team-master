'use client';

import React, { useState } from 'react';
import { useDday } from '../../../../hooks/useDday';
import TopBar from '@/components/TopGnb';
import NameTag from '@/components/ui/NameTag';
import Text from '@/components/ui/Text';
import Image from 'next/image';
import MemberTag from './_components/MemberTag';
import { setLocalStorage } from '../../../../utils/handleLocalStorage';

/**
 ** 경기 일정이 없을 경우 화면에 보여질 데이터 ( admin / user 공통 )
 * [admin]
 * 1. 경기 상태 고르는 버튼
 * - 리그전(프리시즌 / 정규시즌) / 일반전 / 이벤트전
 * 2. 경기 날짜 고르는 버튼
 * 3. 리그전을 선택했을 경우, 기존에 저장해둔 팀이 있으면 그 버튼을 보여주고 없으면 신규 생성 버튼
 * 4. 확정 버튼 누르면 서버로 전송
 *
 * [user]
 * 1. 해당 페이지에 접속할 수 없음.
 *
 * 경기 일정이 있을 경우 화면에 보여질 데이터 ( admin / user 공통 )
 * [공통]
 * 1. 경기 날짜 (년, 월, 일, 요일)
 * 2. 경기 상태 (리그전[차수], 이벤트전, 일반전)
 *
 * [투표 전]
 * 1. 리그전인 경우
 * - 사용자가 속한 팀명
 *
 * 2. 일반 / 이벤트전인 경우
 * - 없음
 *
 * [투표 후]
 * 1. 리그전인 경우
 * - 사용자가 속한 팀명
 * - 본인 + 나머지 팀의 출석 인원 ( 참, 불참 전부 )
 * - 전체 팀 이름
 *
 * 2. 일반 / 이벤트전인 경우
 * - 본인 + 나머지 팀의 출석 인원 ( 참, 불참 전부 )
 */

const VotePage = () => {
  const { timeLeft, isEndVote } = useDday('2025-01-11', '2025-01-07');
  const [voteStatus, setVoteStatus] = useState('');
  const [isVote, setIsVote] = useState(false);
  // join or skip
  const onClickVote = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { vote } = e.currentTarget.dataset;
    setVoteStatus(vote);

    // 임시 localStorage 저장
    setLocalStorage('vote', vote);
  };

  const onClickSendVote = () => {
    if (voteStatus === '') return;

    setIsVote(true);
  };

  const onClickResetVote = () => {
    setIsVote(false);
  };

  return (
    <>
      <TopBar depth={1} title="투표하기" />

      {/* 경기 일정  */}
      <div className="flex flex-col justify-center items-center my-10">
        <NameTag type="l-ing" />
        <Text
          type="p"
          className="vote-text"
          style={{ fontSize: '24px', margin: '8px 0' }}
        >
          2025-01-11 (토)
        </Text>
        <Text type="p" className="vote-text">
          {String(timeLeft)}
        </Text>
      </div>

      {/* 투표 하는 곳 */}
      {/* 이미 투표를 했다면 사용자가 투표한 곳에 스탬프 / 다시하기 누르면 사라짐 */}
      {/* 투표 날짜가 끝났으면 만료 이미지 + 버튼 비활성화 */}
      <div className="flex flex-col justify-center items-center">
        <div className="grid grid-cols-2 w-[90%] mx-auto relative">
          <Text
            type="button"
            data-vote="join"
            onClick={onClickVote}
            className="border h-20 relative"
          >
            참
            {voteStatus === 'join' ? (
              <Image
                src={'/img/vote/stamp.png'}
                alt="투표 도장"
                width={40}
                height={40}
                className=" absolute bottom-5 right-5 animate-stamp"
              />
            ) : null}
          </Text>
          <Text
            type="button"
            data-vote="skip"
            onClick={onClickVote}
            className="border h-20 relative"
          >
            불참
            {voteStatus === 'skip' ? (
              <Image
                src={'/img/vote/stamp.png'}
                alt="투표 도장"
                width={40}
                height={40}
                className=" absolute bottom-5 right-5 animate-stamp"
              />
            ) : null}
          </Text>

          {isVote ? (
            <>
              <div className="w-full max-w-96 h-[80px] bg-black opacity-10 z-10 absolute top-0"></div>
              <Image
                src={'/img/vote/vote-finish.png'}
                alt="투표 완료 표시"
                width={200}
                height={50}
                className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              />
            </>
          ) : isEndVote ? (
            <>
              <div className="w-full max-w-96 h-[80px] bg-black opacity-10 z-10 absolute top-0"></div>
              <Image
                src={'/img/vote/vote-closed.png'}
                alt="투표 만료 표시"
                width={200}
                height={50}
                className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              />
            </>
          ) : null}
        </div>

        {!isVote ? (
          // {/* 투표를 완료 할 때 버튼 */}
          <Text
            type="button"
            onClick={onClickSendVote}
            color="#fff"
            className="border my-5 px-4 py-1 rounded-full bg-[#9966cc] active:shadow-inner-button"
          >
            제출
          </Text>
        ) : (
          // {/* 투표를 했는데 바꾸고 싶을 때 버튼 */}
          <Text
            type="button"
            onClick={onClickResetVote}
            color="#fff"
            className="border my-5 px-4 py-1 rounded-full bg-[#385f9b] active:shadow-inner-button"
          >
            다시 투표하기
          </Text>
        )}
      </div>

      {/* [리그전] 참여 인원 정보 ( 팀 이름<grid-cols-${num}> / 해당 팀의 참여 인원 목록) */}
      <div className="flex flex-col justify-center items-center">
        <Text type="p" fw={700} classname="border-y w-full text-center mb-4">
          참여 인원
        </Text>
        <div className="grid grid-cols-3 w-full">
          <div className="flex flex-col items-center justify-start border-x">
            <Text type="p" fz={20} fw={700}>
              런앤건
            </Text>
            <MemberTag status="join" name="김남권" />
            <MemberTag status="join" name="이승" />
            <MemberTag status="join" name="조성은" />
          </div>

          <div className="flex flex-col items-center justify-start border-x">
            <Text type="p" fz={20} fw={700}>
              출석체크
            </Text>
            <MemberTag status="join" name="기세면" />
            <MemberTag status="join" name="이상엽" />
          </div>

          <div className="flex flex-col items-center justify-start border-x">
            <Text type="p" fz={20} fw={700}>
              캐치! 감마핑
            </Text>
            <MemberTag status="join" name="심상민" />
            <MemberTag status="join" name="권문영" />
          </div>
        </div>
      </div>

      {/* [일반전 / 이벤트전] */}
      {/* <div className="flex flex-col justify-center items-center">
        <Text type="p" fw={700} classname="border-y w-full text-center mb-4">
          참여 인원
        </Text>
        <div className="grid grid-cols-3 w-full justify-items-center">
          <MemberTag status="join" name="김남권" />
          <MemberTag status="join" name="이승" />
          <MemberTag status="join" name="조성은" />
          <MemberTag status="join" name="기세면" />
          <MemberTag status="join" name="이상엽" />
          <MemberTag status="join" name="심상민" />
          <MemberTag status="join" name="권문영" />
        </div>
      </div> */}

      {/* 불참 리스트 - 전체 경기 상태 동일한 ui */}
      <div className="flex flex-col justify-center items-center my-5">
        <Text type="p" fw={700} classname="border-y w-full text-center mb-4">
          불참 인원
        </Text>
        <div className="grid grid-cols-4 w-full">
          <MemberTag status="skip" name="강동구" />
        </div>
      </div>
    </>
  );
};

export default VotePage;
