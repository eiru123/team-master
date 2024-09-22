import Text from '@/components/ui/Text';
import Wrapper from '@/components/ui/Wrapper';
import React, { useEffect, useState } from 'react';

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

const PageOptionTwo = () => {
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
  const [checked, setChecked] = useState(false);
  const onToggleScreen = () => {
    setChecked(!checked);
  };
  useEffect(() => {
    checked ? (document.body.style.overflowY = 'hidden') : (document.body.style.overflowY = 'auto');
  }, [checked]);

  // 편성할 팀 동적 추가
  const [teams, setTeams] = useState<Player[][]>([]);
  useEffect(() => {
    const storedTeamCount = sessionStorage.getItem('teamCount');
    if (storedTeamCount) {
      setTeamCount(parseInt(storedTeamCount, 10));
    }
  }, [teamCount]);

  return (
    <>
      {/* 편성할 팀 수 */}
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

        {/* 화면 전환 토글 */}
        <div className="w-full flex justify-end">
          <button
            className="text-sm font-medium text-gray-300 dark:text-gray-900 bg-gray-900 dark:bg-gray-300 rounded-md p-2 m-1"
            onClick={() => onToggleScreen()}
          >
            팀보기
          </button>
        </div>
      </Wrapper>

      <Wrapper>
        {players.map((player) => {
          return (
            <div key={player.id} className=" flex w-full items-center justify-between border-b-2">
              <div className=" flex py-2">
                <Text type="p" classname="mr-2 text-sm w-4">
                  {player.position}
                </Text>
                <Text type="p" classname="mr-2 w-20 text-sm">
                  {player.name}
                </Text>
              </div>

              <div className={`flex flex-wrap justify-end w-fit ${player.engName}`}></div>
            </div>
          );
        })}
      </Wrapper>

      {/* 모달 창 뜸 */}
      {checked ? (
        <>
          <div className=" z-40 bg-gray-600 w-screen h-full absolute position-center top-1/2 opacity-80"></div>
          <Wrapper classname=" absolute position-center top-1/2 w-11/12 height-600 shadow-md z-50 overflow-y-scroll">
            {/* 화면 전환 토글 */}
            <div className="w-full flex justify-end py-2 z-0">
              <button
                className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"
                onClick={() => onToggleScreen()}
              >
                닫기
              </button>
            </div>

            <div id="teams" className=" w-full p-2">
              {Array.from({ length: teamCount }).map((_, index) => (
                <div key={index} className=" p-1 m-1 bg-slate-200 rounded-md flex flex-col">
                  <Text type="p" classname=" w-full text-center font-semibold">
                    Team {index + 1}
                  </Text>

                  <div className=" grid grid-cols-3">
                    {/* 선수 */}
                    <div className=" flex p-1 justify-center text-sm">
                      <Text type="p">G</Text>
                      <Text type="p" classname="ml-2">
                        조성은
                      </Text>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Wrapper>
        </>
      ) : null}
    </>
  );
};

export default PageOptionTwo;
