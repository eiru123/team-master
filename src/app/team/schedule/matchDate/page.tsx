'use client';

import React, { useState } from 'react';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useRouter } from 'next/navigation';

import Swal from 'sweetalert2';
import Container from '@/components/ui/Container';
import TopBar from '@/components/TopGnb';
import Wrapper from '@/components/ui/Wrapper';
import Text from '@/components/ui/Text';
import CommonBtn from '@/components/ui/button/_Button';

interface LeagueData {
  // 임시로 code만 전달함
  code: 0 | 1;
}

const MakeMatch = () => {
  const router = useRouter();
  // 경기 종류 선택
  const [checked, setChecked] = useState<string | null>(null);

  const handleToggle = (type: string) => {
    setChecked(type);
  };

  // 리그전 팀 불러오기
  const [isData, setIsData] = useState<LeagueData | null>(null);
  const [btnName, setBtnName] = useState('리그전 팀 불러오기');
  const onLoadLeagueData = () => {
    // 리그전 데이터를 서버에서 찾는다
    // 있으면 값을 받아서 리스트로 뿌리고
    // 없으면 팀 짜는 화면으로 간다.
    // 1. 리그전팀 데이터가 있을 경우
    //  - 버튼 하단부에 팀 데이터가 간단하게 뿌려지고 날짜 확정을 누를 수 있음
    // 2. 리그전 데이턱 없을 경우
    //  - 데이터가 없습니다 라는 문구 출력 후 날짜 확정 버튼이 팀 결성 버튼으로 바뀜
    // 임시로 값이 있음, 없음 랜덤하게 출력 후 로직 진행

    if (isData?.code === 0) {
      console.log('이미 데이터 있음');
      return;
    }

    if (isData?.code === 1) {
      router.replace('/schedule/set/team');
      return;
    }

    // 임시랜덤 값 출력
    // 0: 리그전 팀 데이터 있음
    // 1: 리그전 팀 데이터 없음.
    const randomData = Math.random() < 0.5 ? 0 : 1;
    console.log('randomData', { code: randomData });

    setIsData({ code: randomData });
    if (randomData === 0) {
      Swal.fire({
        icon: 'success',
        text: '리그전 데이터를 불러옵니다.',
      });

      return;
    }

    if (randomData === 1) {
      Swal.fire({
        icon: 'info',
        text: '리그전 데이터가 없습니다',
      });
      setBtnName('리그전 팀 만들기');
      return;
    }
  };

  // 경기 날짜
  const [matchDate, setMatchDate] = useState<Date | null>(new Date());
  // 투표 마감 날짜
  const [voteDate, setVoteDate] = useState<Date | null>(new Date());

  const onClickNextStep = () => {
    if (!matchDate) {
      Swal.fire({
        icon: 'error',
        text: '경기 날짜를 지정해주세요',
      });
      return;
    }

    if (!voteDate) {
      Swal.fire({
        icon: 'error',
        text: '투표 종류 날짜를 지정해주세요',
      });
      return;
    }

    if (!checked) {
      Swal.fire({
        icon: 'error',
        text: '경기 종류를 지정해주세요',
      });
      return;
    }

    const voteDateTime = new Date(voteDate).getTime();
    const matchDateTime = new Date(matchDate).getTime();

    if (voteDateTime >= matchDateTime) {
      Swal.fire({
        icon: 'error',
        text: '투표 마감일이 잘못 지정되었습니다.',
      });
      return;
    }

    if (checked === 'league') {
      if (isData === null) {
        Swal.fire({
          icon: 'error',
          text: '리그전 데이터를 불러와주세요.',
        });
        return;
      }

      if (isData?.code === 1) {
        Swal.fire({
          icon: 'error',
          text: '팀 편성을 해주세요.',
        });
        return;
      }
    }

    // 오류가 없을 경우
    sessionStorage.setItem('matchDate', String(formatDate(matchDate)));
    sessionStorage.setItem('voteDate', String(formatDate(voteDate)));
    router.push('/schedule');
  };

  return (
    <Container display="block">
      <TopBar depth={2} title="경기 일정 잡기" />
      {/* 날짜 선택 */}
      <Wrapper classname=" grid grid-cols-3 items-center justify-between flex-wrap pb-0 overflow-hidden">
        <Text classname="text-base p-2 font-semibold rounded-l" type="p">
          경기 날짜
        </Text>
        <DatePicker
          placeholderText="경기 날짜를 지정해주세요"
          className=" placeholder:text-xs"
          value={formatDate(matchDate)}
          selected={matchDate}
          onChange={(date: Date | null) => setMatchDate(date)}
          minDate={new Date()}
        />
      </Wrapper>

      {/*  마감 시간 설정 */}
      <Wrapper classname="pt-0 pb-2 grid grid-cols-3 items-center justify-between overflow-hidden">
        <Text classname="text-base p-2 font-semibold rounded-l flex flex-wrap" type="p">
          <span>투표</span>
          <span>종료</span>
          <span>날짜</span>
        </Text>
        <DatePicker
          placeholderText="투표 종료 날짜를 지정해주세요"
          className=" placeholder:text-xs"
          value={formatDate(voteDate)}
          selected={voteDate}
          onChange={(date: Date | null) => setVoteDate(date)}
          minDate={new Date()}
        />
      </Wrapper>

      {/* 경기 종류 */}
      {/* [TODO]: radio 버튼으로 변경 */}
      <Wrapper classname="flex justify-center">
        <label className="inline-flex items-center me-5 cursor-pointer">
          <input
            type="checkbox"
            value=""
            className="sr-only peer"
            checked={checked === 'league'}
            onChange={() => handleToggle('league')}
          />
          <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-red-300 dark:peer-focus:ring-red-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-red-600"></div>
          <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">리그전</span>
        </label>

        <label className="inline-flex items-center me-5 cursor-pointer">
          <input
            type="checkbox"
            value=""
            className="sr-only peer"
            checked={checked === 'non-league'}
            onChange={() => handleToggle('non-league')}
          />
          <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-yellow-300 dark:peer-focus:ring-yellow-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-yellow-400"></div>
          <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            비리그전
          </span>
        </label>
      </Wrapper>

      {/* 확정 버튼 */}
      <Wrapper classname="pb-1 flex w-full justify-center">
        <CommonBtn BgColor="select" onClick={() => onClickNextStep()}>
          <Text classname=" text-white" type="p">
            날짜 확정
          </Text>
        </CommonBtn>
      </Wrapper>

      {/* 리그전일 경우 팀 데이터 불러오기(데이터 유무 확인) */}
      <Wrapper
        classname={`pt-1 pb-1 flex w-full justify-center none
          ${checked === 'league' ? 'animate-fadeIn' : 'animate-fadeOut'}
          `}
      >
        <CommonBtn classname=" pt-2 pb-2" BgColor="orange" onClick={() => onLoadLeagueData()}>
          <Text classname=" text-white" type="p">
            {btnName}
          </Text>
        </CommonBtn>
      </Wrapper>

      {/* 리그전 팀 데이터가 있을 경우 */}
      {isData?.code === 0 ? (
        <Wrapper classname=" grid grid-cols-3">
          <div className=" bg-cyan-400">WF</div>
          <div className=" bg-lime-300">WS</div>
          <div className=" bg-amber-600">EN</div>
        </Wrapper>
      ) : null}
    </Container>
  );
};

export default MakeMatch;

// 옮길 함수
export const formatDate = (value: Date | null) => {
  if (!value) return;

  value.setUTCHours(value.getUTCHours());
  const year = value.getFullYear();
  const month = String(value.getMonth() + 1).padStart(2, '0');
  const day = String(value.getDate()).padStart(2, '0');

  return `${year}년 ${month}월 ${day}일`;
};
