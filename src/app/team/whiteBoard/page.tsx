'use client';

import TopBar from '@/components/TopGnb';
import Text from '@/components/ui/Text';
import GameSetting from './_components/gameSetting';
/**
 * 필요한 데이터
 * 1. 경기 시작때 팀 수
 * 2. 경기 날짜에 페이지 접속시 화이트보드 클리어
 * 3. 경기 날짜 아닐때 페이지 접속시 화이트보드는 이전 경기 스코어
 */
const WhiteBoard = () => {
  // 경기 날짜
  const gamePlan = '2025.01.05';

  // 경기 type : 리그전, 이벤트전, 일반전
  const gameType = '리그전';

  // 경기하는 팀들
  const teamList = [
    {
      name: '캐치! 감마핑',
      teamColor: '#191919',
    },
    {
      name: '런앤건',
      teamColor: '#fff',
    },
    {
      name: '출석체크',
      teamColor: '#371F4A',
    },
  ];
  return (
    <>
      <TopBar depth={1} title="화이트보드" />
      <div className="w-screen h-screen bg-gray-50 border-8 border-gray-900 rounded-lg p-4 relative">
        <div className=" w-4 h-4 bg-slate-500 absolute top-0 left-0 rounded-br-md"></div>
        <div className=" w-4 h-4 bg-slate-500 absolute top-0 right-0 rounded-bl-md"></div>
        <div className=" w-4 h-4 bg-slate-500 absolute bottom-0 left-0 rounded-tr-md"></div>
        <div className=" w-4 h-4 bg-slate-500 absolute bottom-0 right-0 rounded-tl-md"></div>

        {/* 32px */}
        <Text
          type="p"
          fz={32}
          className="font-moneygraphy border-b border-[#191919]"
        >
          {gamePlan} {gameType}
        </Text>

        {/* 1. 경기 설정 */}
        <div id="gameList">
          <GameSetting teamList={teamList} />
        </div>
      </div>
    </>
  );
};

export default WhiteBoard;
