'use client';

import TopBar from '@/components/TopGnb';
import { useDday } from '../../../../hooks/useDday';
import MemberList from './_components/MemberList';
import LeagueInfo from './_components/LeagueInfo';
import { useEffect, useState } from 'react';
import VoteContainer from './_components/VoteContainer';
import NoticeContainer from './_components/NoticeContainer';
import Wrapper from '@/components/ui/Wrapper';
import Container from '@/components/ui/Container';

import teamList from '../../../../public/data/leagueTeam.json';
import Link from 'next/link';
import { useSetGameDatas } from '@/store/settingGameData';

type GameData = {
  gameDate: string;
  teamNum: string;
  gameType: string;
  adminMemo: string;
};

const TeamMainPage = () => {
  // 카카오 AD-fit
  // 광고 아직 안걸어놔서 오류로 동작함 주석처리
  // useEffect(() => {
  //   let ins = document.createElement('ins');
  //   let scr = document.createElement('script');
  //   ins.className = 'kakao_ad_area';
  //   ins.style = 'display:none; width:100%;';
  //   scr.async = 'true';
  //   scr.type = 'text/javascript';
  //   scr.src = '//t1.daumcdn.net/kas/static/ba.min.js';
  //   ins.setAttribute('data-ad-width', '320');
  //   ins.setAttribute('data-ad-height', '100');
  //   ins.setAttribute('data-ad-unit', 'DAN-l5MI0YbhcmtXuxH2');
  //   document.querySelector('.adfit').appendChild(ins);
  //   document.querySelector('.adfit').appendChild(scr);
  // }, []);

  // 로딩 임시 주석처리
  // const [isLoading, setIsLoading] = useState<boolean | null>(null);

  // useEffect(() => {
  //   setIsLoading(true);

  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 1000);
  // }, []);

  // const router = useRouter();

  // const onClickLink = (url: string) => {
  //   router.push(url);
  // };

  const { gameDatas } = useSetGameDatas();
  const [season, setSeason] = useState<string>('1');
  const [gameData, setGameData] = useState<GameData | null>(null);
  const { timePercent, timeLeft, timeYear, isEndVote } = useDday(
    gameData?.gameDate,
  );

  const onValidatorLink = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (gameData === null) e.preventDefault();
  };

  // (임시) 시즌 데이터
  useEffect(() => {
    setSeason('4');
  }, []);

  // (임시) 경기 일정 데이터
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const onLoadGameData = () => {
        const resData = localStorage.getItem('gamePlan');
        if (resData) {
          setGameData(JSON.parse(resData));
        }
      };

      onLoadGameData();
    }
  }, [gameDatas]);

  return (
    <>
      <Container display="block">
        <TopBar depth={0} title="SIXERS" />
        {/* <!-- 상단 공지사항 --> */}
        <NoticeContainer />

        {/* 투표하기 */}
        <Link href="/team/vote" onClick={onValidatorLink}>
          <VoteContainer
            timePercent={timePercent}
            timeLeft={timeLeft}
            isEndVote={isEndVote}
          />
        </Link>

        {/* 멤버리스트 */}
        <Wrapper>
          <MemberList />
        </Wrapper>

        {/* 리그전 기록 */}
        <LeagueInfo year={timeYear} season={season} teamList={teamList} />

        {/* 광고 */}
        {/* <div className="adfit" style={{ margin: '10px 0' }}></div> */}
      </Container>
    </>
  );
};

export default TeamMainPage;
