'use client';

import React, { useState } from 'react';
import Text from '@/components/ui/Text';
import ShootSvg from '@/components/ui/svg/ShootSvg';
import Image from 'next/image';
import Wrapper from '@/components/ui/Wrapper';
import {
  getDaysInMonth,
  monthList,
  weekList,
} from '../../../../../utils/handleCalendar';
import VoteBasketballSvg from '@/components/ui/svg/VoteBasketballSvg';
import NameTag from '@/components/ui/NameTag';
import teamData from '../../../../../public/data/leagueTeam.json';
import { colorSequence } from '@/config/teamColor-seq';
import { useRouter } from 'next/navigation';
import { useSetGameDatas } from '@/store/settingGameData';

/**
 * [화면 구성시 필요한 값]
 * - 지난 경기 날짜
 * - 지난 투표 시작/마감 날짜
 *
 * [경기 일정 설정시 필요한 값]
 * - (필수) 경기 날짜
 * - (필수) 경기 종류 ( 리그전-프리 / 리그전-정규 / 일반 / 이벤트 )
 * - (필수) 유니폼 종류
 * - 리그전] 팀명 - 팀컬러 선택
 * - 일반/이벤트전] x
 * - (선택) 메모사항
 *
 * ** 만약 이미 경기 일정이 있다면, 경기 일정 수정 가능
 * ** 경기 날짜를 선택하면 해당 일 기준 2일 전이 마감날짜로 선택되도록 - 기본값 (달력에서 수정 가능 )
 */

type GameType = 'l-free' | 'l-ing' | 'normal' | 'event';

// TODO: useDday hooks 날짜 관련 hooks로 변경 후 값 수정하ㅣ
const AdminVoteSetting = () => {
  const router = useRouter();
  const { setGameDatas } = useSetGameDatas();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(0);
  const [selectedTeamNum, setSelectedTeamNum] = useState(0);
  const [selectedGameType, setSelectedGameType] = useState('');
  const [adminMemo, setAdminMemo] = useState('');
  const { days, startDay } = getDaysInMonth(
    currentDate.getFullYear(),
    currentDate.getMonth(),
  );

  const changeMonth = (count: number) => {
    const newDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + count,
      1,
    );
    setCurrentDate(newDate);
    setSelectedDate(0);
  };

  const onClickSelectDate = (day: number) => {
    setSelectedDate((prev) => {
      if (prev === day) {
        return 0;
      }

      setCurrentDate(
        new Date(currentDate.getFullYear(), currentDate.getMonth(), day),
      );
      return day;
    });
    scrollTo({
      top: 200,
      behavior: 'smooth',
    });
  };
  const handleSelectTeamNum = (count: number) => {
    setSelectedTeamNum(count);
  };

  const onClickSelectGameType = (id: GameType) => {
    setSelectedGameType(id);
  };

  // TODO: 임시로 로컬 스토리지 저장
  const onClickRegisterGame = () => {
    if (
      selectedDate === 0 &&
      selectedTeamNum === 0 &&
      selectedGameType === ''
    ) {
      console.log('selectedDate: ', selectedDate);
      console.log('selectedTeamNum: ', selectedTeamNum);
      console.log('selectedGameType: ', selectedGameType);
      console.log('저장할 값 오류');
      return;
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const selectedFullDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      selectedDate,
    );

    if (selectedFullDate < today) {
      console.log('날짜 선택 오류');
      return;
    }

    const sendData = {
      gameDate: currentDate,
      teamNum: selectedTeamNum,
      gameType: selectedGameType,
      adminMemo: adminMemo,
    };

    console.log('sendData', sendData);

    localStorage.setItem('gamePlan', JSON.stringify(sendData));
    setGameDatas(true);
    router.push('/team/board');
  };

  return (
    <div className="h-[900px] relative">
      <Wrapper>
        <div className="flex items-center justify-center gap-4 mb-5">
          <button onClick={() => changeMonth(-1)}>
            <Image
              src={'/img/icon/icon-arrow_back.svg'}
              alt="이전"
              width={25}
              height={25}
            />
          </button>
          <Text type="p" fw={700} fz={32} className="font-jua">
            {currentDate.getFullYear()} {monthList[currentDate.getMonth()]}
          </Text>
          <button onClick={() => changeMonth(1)}>
            <Image
              src={'/img/icon/icon-arrow_forward.svg'}
              alt="다음"
              width={25}
              height={25}
            />
          </button>
        </div>
        <div className="grid grid-cols-7 text-center">
          {weekList.map((day) => (
            <Text
              type="p"
              fw={700}
              key={day}
              color={day === '일' ? '#FB2722' : null}
            >
              {day}
            </Text>
          ))}

          {Array.from({ length: startDay }).map((_, index) => (
            <div key={`empty-${index}`} className="m-1"></div>
          ))}

          {days.map((day) => (
            <div key={day} className="m-1">
              <button
                onClick={() => onClickSelectDate(day)}
                className="border rounded-full w-[40px] h-[30px] overflow-hidden flex justify-end items-end"
                style={
                  selectedDate === day
                    ? { backgroundColor: '#0E2240' }
                    : { backgroundColor: '#fff' }
                }
              >
                {selectedDate === day ? (
                  <ShootSvg width={35} height={35} useYn={true} />
                ) : (
                  <div className="w-full h-full rounded-full bg-[#f4f4f4]"></div>
                )}
              </button>
              <Text type="p" fz={12}>
                {day}
              </Text>
            </div>
          ))}
        </div>
      </Wrapper>

      <Wrapper>
        <Text type="p" fz={14}>
          * 경기 날짜를 선택해주세요.
        </Text>
        <Text type="p" fz={14}>
          * 투표 마감 날짜는 선택한 날짜의 2일 전입니다.
        </Text>
      </Wrapper>

      <Wrapper classname="w-full">
        <div
          style={
            selectedTeamNum
              ? {
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 8,
                }
              : {}
          }
        >
          <div
            className="flex items-center justify-center"
            style={
              selectedTeamNum
                ? {
                    width: 100,
                    flexDirection: 'column',
                    gap: 2,
                  }
                : {
                    flexDirection: 'row',
                    gap: 4,
                  }
            }
          >
            {[2, 3].map((teamNum) => (
              <label
                key={teamNum}
                className="flex items-center gap-2 border px-4 py-2 rounded-full"
                style={
                  selectedTeamNum
                    ? selectedTeamNum === teamNum
                      ? {
                          backgroundColor: '#FEC524',
                          borderRadius: 0,
                          padding: '4px 8px',
                        }
                      : {
                          backgroundColor: '#fff',
                          borderRadius: 0,
                          padding: '4px 8px',
                        }
                    : { backgroundColor: '#fff' }
                }
              >
                <input
                  type="radio"
                  name="type"
                  onChange={() => handleSelectTeamNum(teamNum)}
                  className="hidden"
                />
                <VoteBasketballSvg
                  width={24}
                  height={24}
                  useYn={selectedTeamNum === teamNum}
                />
                <Text type="p">{`${teamNum}파전`}</Text>
              </label>
            ))}
          </div>
          {selectedTeamNum !== 0 ? (
            selectedTeamNum === 2 ? (
              <div className="grid grid-cols-2 gap-1 w-[180px]">
                {['normal', 'event'].map((gameType) => (
                  <label key={gameType} className="relative">
                    <NameTag
                      type={gameType as GameType}
                      useYn={selectedGameType === gameType}
                    />
                    <input
                      type="radio"
                      name="game-type"
                      className="hidden"
                      onChange={() =>
                        onClickSelectGameType(gameType as GameType)
                      }
                    />
                  </label>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-1 w-[180px]">
                {['normal', 'event', 'l-free', 'l-ing'].map((gameType) => (
                  <label key={gameType} className="relative">
                    <NameTag
                      type={gameType as GameType}
                      useYn={selectedGameType === gameType}
                    />
                    <input
                      type="radio"
                      name="game-type"
                      className="hidden"
                      onChange={() =>
                        onClickSelectGameType(gameType as GameType)
                      }
                    />
                  </label>
                ))}
              </div>
            )
          ) : null}
        </div>
      </Wrapper>

      {/* 리그전일 경우 해당 팀의 이전 컬러값이 저장되었으면 함.
          최초 리그전 팀 입력시 팀 컬러 순서를 저장하면 각 팀의 이전 컬러값의 다음 컬러코드를 불러오는 형식으로
      */}
      {selectedTeamNum === 3 && selectedGameType.includes('l-') ? (
        <Wrapper classname="flex flex-col items-center gap-2 justify-center">
          {teamData.map((team) => (
            <div
              key={team.name}
              className="flex items-center gap-4 w-full justify-between"
            >
              <Text type="p" className="mr-4">
                {team.name}
              </Text>
              <div className="grid grid-cols-3 gap-4 w-[200px] h-[20px]">
                {colorSequence.map((color) => (
                  <div
                    key={`${team.name}-${color}`}
                    className="w-full h-full border"
                    style={{
                      backgroundColor:
                        team.prevColor === color ? color : 'transparent',
                    }}
                  ></div>
                ))}
              </div>
            </div>
          ))}
        </Wrapper>
      ) : null}

      <Wrapper>
        <textarea
          className="w-full h-[100px] flex justify-center items-center p-2 border rounded-lg"
          placeholder="(선택) 팀원에게 남길 메모"
          onChange={(e) => setAdminMemo(e.target.value)}
        />
      </Wrapper>

      <Wrapper classname=" pt-2 flex justify-center">
        <button
          onClick={onClickRegisterGame}
          className="w-[60px] h-[30px] bg-white"
        >
          등록
        </button>
      </Wrapper>
    </div>
  );
};

export default AdminVoteSetting;
