'use client';

import TopBar from '@/components/TopGnb';
import Text from '@/components/ui/Text';
import { useDday } from '../../../../hooks/useDday';
import MemberList from './_components/MemberList';
import LeagueInfo from './_components/LeagueInfo';
import { useEffect, useState } from 'react';
import VoteContainer from './_components/VoteContainer';
import NoticeContainer from './_components/NoticeContainer';
import Wrapper from '@/components/ui/Wrapper';
import Container from '@/components/ui/Container';

type Teams = {
  name: string;
  score: string;
  rate: number;
  src: string;
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

  const { timePercent, timeLeft, timeYear, isEndVote } = useDday('2025-01-18');
  const [season, setSeason] = useState<string>('1');
  const [teamList, setTeamList] = useState<Teams[]>([]);

  // 시즌 데이터 (임시)
  useEffect(() => {
    setSeason('4');
    setTeamList([
      {
        name: '런앤건',
        score: '4승',
        rate: 1,
        src: '/img/test/test-team3.png',
      },
      {
        name: '캐치! 감마핑',
        score: '2승 2패',
        rate: 3,
        src: '/img/test/test-team2.png',
      },
      {
        name: '출석체크',
        score: '3승 1패',
        rate: 2,
        src: '/img/test/test-team1.png',
      },
    ]);
  }, []);

  return (
    <>
      <Container display="block">
        <TopBar depth={0} title="SIXERS" />
        {/* <!-- 상단 공지사항 --> */}
        <NoticeContainer />

        {/* 투표하기 */}
        <Text type="a" href="/team/vote">
          <VoteContainer
            timePercent={timePercent}
            timeLeft={timeLeft}
            isEndVote={isEndVote}
          />
        </Text>

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
