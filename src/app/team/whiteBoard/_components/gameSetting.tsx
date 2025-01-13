import Text from '@/components/ui/Text';
import React, { useState } from 'react';
import Lottie from 'react-lottie-player';

/**
 * 서버에서 받는 값
 * [2파전]: 블랙 vs 화이트
 * [3파전]: 블랙 vs 화이트 vs 퍼플
 * - 3파전의 경우 팀이름까지
 *
 * 저장할 값
 *
 */

const GameSetting = ({ teamList }) => {
  // 구성할 화이트보드 데이터
  const [gamePlan, setGamePlan] = useState([]);
  const [teamCount, setTeamCount] = useState(0);
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
   * quarter: 쿼터
   * home: 홈팀 이름
   * away: 어웨이팀 이름
   * homeScore: 홈팀 점수
   * awayScore: 어웨이팀 점수
   */

  // 설정할 팀 수
  const handleTeamSetting = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { teamcount } = e.currentTarget.dataset;
    setTeamCount(Number(teamcount));
  };

  return (
    <>
      <Text type="p">경기 기본 설정</Text>

      <div>
        <Text type="p">경기 팀 수</Text>

        <label>
          <Text type="span">2파전</Text>
          <input
            type="radio"
            name="teamCount"
            data-teamcount={2}
            onChange={handleTeamSetting}
          />
        </label>
        <label>
          <Text type="span">3파전</Text>
          <input
            type="radio"
            name="teamCount"
            data-teamcount={3}
            onChange={handleTeamSetting}
          />
        </label>
      </div>

      {Number(teamCount) === 2 ? <p>2파전 용</p> : null}
      {Number(teamCount) === 3 ? <p>3파전 용</p> : null}
    </>
  );
};

export default GameSetting;
