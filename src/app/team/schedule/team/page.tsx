'use client';

import React, { useEffect, useState } from 'react';
import PageOptionOne from './option-one';
import TopBar from '@/components/TopGnb';
import Container from '@/components/ui/Container';

interface Player {
  id: string;
  position: string;
  name: string;
  age: number;
  nickname: string;
  winRate: number;
  attRate: number;
  style: string;
  imgSrc: string;
  winAwards: number;
  mvpAwards: number;
  engName: string;
}

const MakeTeam = () => {
  // 임시 선수 명단
  const [players, setPlayers] = useState<Player[]>([]);

  // axios로 바꾸기
  useEffect(() => {
    const fetchPlayers = async () => {
      const response = await fetch('/data/player/index.json');
      const data = await response.json();
      setPlayers(data);
    };

    fetchPlayers();
  }, []);

  // 편성할 팀 수
  const [teamCount, setTeamCount] = useState<number>(0);

  // 선택한 팀 수 만큼 선수 팀 선택 버튼 추가
  useEffect(() => {
    players.forEach((prev) => {
      const $teams = document.querySelector(`.${prev.engName}`);

      if ($teams) {
        $teams.innerHTML = ''; // 팀 목록 초기화

        for (let i = 0; i < teamCount; i++) {
          const div = document.createElement('div');
          div.className = 'flex items-center p-2 bg-slate-300 rounded-full m-1';

          const input = document.createElement('input');
          input.type = 'radio';
          input.id = `${prev.engName}-team-a-${i + 1}`;
          input.name = `${prev.engName}`;
          input.className =
            'w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600';

          const label = document.createElement('label');
          label.htmlFor = `${prev.engName}-team-a-${i + 1}`;
          label.className = 'ms-2 text-xs font-medium text-gray-900 dark:text-gray-300';
          label.textContent = `Team ${i + 1}`;

          div.appendChild(input);
          div.appendChild(label);

          $teams.appendChild(div);
        }
      }

      sessionStorage.setItem('teamCount', String(teamCount));
    });
  }, [players, teamCount]);

  // 팀보기 화면으로 전환
  // const [checked, setChecked] = useState(false);
  // const onToggleScreen = () => {
  //   setChecked(!checked);
  // };
  // useEffect(() => {
  //   checked ? (document.body.style.overflowY = 'hidden') : (document.body.style.overflowY = 'auto');
  // }, [checked]);

  // 편성할 팀 동적 추가
  // const [teams, setTeams] = useState<Player[][]>([]);
  useEffect(() => {
    const storedTeamCount = sessionStorage.getItem('teamCount');
    if (storedTeamCount) {
      setTeamCount(parseInt(storedTeamCount, 10));
    }
  }, [teamCount]);

  return (
    <Container display="block">
      <div className=" sticky top-0">
        <TopBar depth={3} title="팀 편성" />
      </div>

      {/* 1안 */}
      {/* 1안은 선수리스트에서 선수를 클릭하고, 팀리스트에 있는 팀을 클릭해 만드는 방식 */}
      <PageOptionOne />

      {/* 2안 */}
      {/* 2안은 페이지를 분리해서 보여주는 방식 (페이지 + 모달) */}
      {/* <PageOptionTwo /> */}
    </Container>
  );
};

export default MakeTeam;
