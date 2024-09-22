'use client';

import React, { useEffect, useState } from 'react';
import Wrapper from '@/components/ui/Wrapper';
import Swal from 'sweetalert2';
import Text from '@/components/ui/Text';

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
}

const PageOptionOne = () => {
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

  // 팀 정보
  const [teamName, setTeamName] = useState<string | null>(null);

  // 편성할 팀 수
  const [teamCount, setTeamCount] = useState<number>(0);

  // 편성할 팀 동적 추가
  useEffect(() => {
    const $teams = document.getElementById('teams');
    if ($teams) {
      $teams.innerHTML = '';
      for (let i = 0; i < teamCount; i++) {
        const div = document.createElement('div');
        div.textContent = `Team ${i + 1}`;
        div.id = `Team-${i + 1}`;
        div.className =
          'bg-slate-300 w-full h-44 overflow-y-scroll p-1 rounded-md text-center flex flex-col';
        div.addEventListener('click', () => onClickMakeTeams(`Team-${i + 1}`));
        $teams.appendChild(div);
      }

      const newTeams = Array.from({ length: teamCount }, () => []);
      setTeams(newTeams);
    }
  }, [teamCount]);

  // 선수 클릭시 css + 로직
  const [clickedPlayers, setClickedPlayers] = useState<string[]>([]);

  console.log('player', clickedPlayers);
  const onClickPlayer = (player: string) => {
    if (teamCount <= 0) {
      Swal.fire({
        icon: 'error',
        text: '팀 수를 먼저 설정해주세요.',
      });
      return;
    }

    setClickedPlayers((prev) =>
      prev.includes(player) ? prev.filter((p) => p !== player) : [...prev, player],
    );
  };

  // 팀에 선수 추가
  // 0. 원하는 팀 수를 선택한다.(그 수만큼 []이 생긴다. => 이차원배열)
  // 1. 하단 선수를 클릭한다. (clickedPlayers 배열에 값이 추가된다.)
  // 2. 원하는 팀을 클릭한다.
  // 3. 해당 팀에 선수들의 명단이 추가된다.
  // 4. 하단 선수리스트의 이름이 사라진다.
  // 팀을 옮길때도 마찬가지로 팀 안에 있는 선수를 누르고 원하는 팀을 누르면 옮겨진다.
  // 팀 박스에 있는 선수 더블탭시 명단에서 빠지고 아래 선수 리스트로 돌아간다.

  const [teams, setTeams] = useState<Player[][]>([]);

  const onClickMakeTeams = (id: string) => {
    console.log('팀 추가', id);

    console.log(teams);
  };

  return (
    <div>
      {/* 팀 수 */}
      <Wrapper classname="pt-0 pb-0">
        <form className="max-w-sm mx-auto grid grid-cols-4 items-center place-items-center">
          <label
            htmlFor="countries"
            className="block text-sm font-medium text-gray-900 dark:text-white"
          >
            <Text type="span">필요</Text>
            <Text type="span">팀수</Text>
          </label>
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 col-span-3"
            onChange={(e) => setTeamCount(Number(e.target.value))}
            value={teamCount}
          >
            <option value={0}>편성할 팀 수</option>
            <option value={2} onChange={() => setTeamCount(2)}>
              2 TEAM
            </option>
            <option value={3} onChange={() => setTeamCount(3)}>
              3 TEAM
            </option>
            <option value={4} onChange={() => setTeamCount(4)}>
              4 TEAM
            </option>
          </select>
        </form>
      </Wrapper>

      {/* 팀 편선 리스트 */}
      <Wrapper classname="flex flex-col h-full relative">
        {/* 팀 리스트 */}
        <div className=" bg-slate-400 h-64 overflow-y-scroll shadow-md rounded-md flex flex-col items-center p-2">
          <Text type="p" classname=" font-semibold text-center p-2">
            팀 리스트
          </Text>

          <div id="teams" className="flex justify-center gap-1 w-full"></div>
        </div>

        {/* 선수 리스트 */}
        <div className=" bg-red-200 h-60 overflow-y-scroll mt-4 shadow-md rounded-md relative ">
          <Text type="p" classname=" font-semibold text-center p-2 pt-4">
            선수 리스트
          </Text>

          <div className=" grid grid-cols-3 gap-3 place-items-center">
            {/* 선수 */}
            {players.map((player) => (
              <button
                key={player.name}
                onClick={() => onClickPlayer(player.name)}
                className={`player flex justify-center bg-white py-2 px-1 text-sm w-20 rounded-md ${
                  clickedPlayers.includes(player.name) ? 'shadow-inner-custom' : ''
                }`}
              >
                <Text type="p" classname="pr-3">
                  {player.position}
                </Text>
                <Text type="p">{player.name}</Text>
              </button>
            ))}
            {/* 선수------------------ */}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default PageOptionOne;
