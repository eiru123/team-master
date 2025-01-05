import Text from '@/components/ui/Text';
import React, { useState } from 'react';
import Lottie from 'react-lottie-player';

const GameSetting = ({ teamList }) => {
  // 구성할 화이트보드 데이터
  const [gamePlan, setGamePlan] = useState([
    {
      order: 1,
      home: '',
      away: '',
      homeScore: '',
      awayScore: '',
    },
  ]);
  const onClickAddTeam = (
    e: React.MouseEvent<HTMLButtonElement>,
    teamName: string,
  ) => {
    const teamGroup = e.currentTarget.dataset.teamGroup;

    setGamePlan((prevGamePlan) =>
      prevGamePlan.map((game) => {
        if (teamGroup === 'home') {
          return { ...game, home: teamName };
        } else if (teamGroup === 'away') {
          return { ...game, away: teamName };
        }
        return game;
      }),
    );
  };

  const isTeamDisabled = (
    teamName: string,
    teamGroup: 'home' | 'away',
  ): boolean => {
    const currentGame = gamePlan[0];
    if (teamGroup === 'home') {
      return (
        (currentGame.home !== '' && currentGame.home !== teamName) ||
        currentGame.away === teamName
      );
    }
    if (teamGroup === 'away') {
      return (
        (currentGame.away !== '' && currentGame.away !== teamName) ||
        currentGame.home === teamName
      );
    }
    return false;
  };
  /**
   * order: 경기 순서
   * home: 홈팀 이름
   * away: 어웨이팀 이름
   * homeScore: 홈팀 점수
   * awayScore: 어웨이팀 점수
   */

  return (
    <>
      <Text type="p" fz={24} className="font-moneygraphy text-center">
        1경기
      </Text>
      <div className="grid grid-cols-2 gap-2">
        {/* 왼쪽 버튼 그룹 */}
        <div className="grid grid-cols-1 gap-1">
          <Text type="p" className="text-center font-moneygraphy mt-1">
            HOME
          </Text>
          {teamList.map((team) => (
            <button
              data-team-group="home"
              key={`home-${team.name}`}
              onClick={(e) => onClickAddTeam(e, team.name)}
              disabled={isTeamDisabled(team.name, 'home')}
              className={`border rounded-sm p-2 w-full flex justify-between items-center h-[50px] bg-gray-300 text-[#191919]
              } ${isTeamDisabled(team.name, 'home') ? 'opacity-50 cursor-not-allowed' : ''}`}
              style={{
                backgroundColor:
                  gamePlan[0].home === team.name ? team.teamColor : '#D1D5DB',
                color:
                  gamePlan[0].home === ''
                    ? '#191919'
                    : gamePlan[0].home === team.name &&
                        team.teamColor === '#fff'
                      ? '#191919'
                      : '#fff',
              }}
            >
              {team.name}
              {gamePlan[0].home === team.name && (
                <div className="relative w-[30px] h-[30px] overflow-hidden">
                  <Lottie
                    loop={false}
                    path="/img/lottie/checkLottie.json"
                    play
                    style={{ width: 100, height: 100 }}
                    className="absolute -top-9 -left-9"
                  />
                </div>
              )}
            </button>
          ))}
        </div>

        {/* 오른쪽 버튼 그룹 */}
        <div className="grid grid-cols-1 gap-1">
          <Text type="p" className="text-center font-moneygraphy mt-1">
            AWAY
          </Text>
          {teamList.map((team) => (
            <button
              data-team-group="away"
              key={`away-${team.name}`}
              onClick={(e) => onClickAddTeam(e, team.name)}
              disabled={isTeamDisabled(team.name, 'away')}
              className={`border rounded-sm p-2 w-full flex justify-between items-center h-[50px] bg-gray-300 text-[#191919]
              } ${isTeamDisabled(team.name, 'away') ? 'opacity-50 cursor-not-allowed' : ''}`}
              style={{
                backgroundColor:
                  gamePlan[0].away === team.name ? team.teamColor : '#D1D5DB',
                color:
                  gamePlan[0].away === ''
                    ? '#191919'
                    : gamePlan[0].away === team.name &&
                        team.teamColor === '#fff'
                      ? '#191919'
                      : '#fff',
              }}
            >
              {team.name}
              {gamePlan[0].away === team.name && (
                <div className="relative w-[30px] h-[30px] overflow-hidden">
                  <Lottie
                    loop={false}
                    path="/img/lottie/checkLottie.json"
                    play
                    style={{ width: 100, height: 100 }}
                    className="absolute -top-9 -left-9"
                  />
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default GameSetting;
