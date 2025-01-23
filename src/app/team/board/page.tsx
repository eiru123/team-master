'use client';

import TopBar from '@/components/TopGnb';
import MemberList from './_components/MemberList';
import LeagueInfo from './_components/LeagueInfo';
import VoteContainer from './_components/VoteContainer';
import NoticeContainer from './_components/NoticeContainer';
import Container from '@/components/ui/Container';

import Link from 'next/link';
import { useSetGameDatas } from '@/store/settingGameData';
import { useEffect, useState } from 'react';

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
  const [voteData, setVoteData] = useState(null);
  const onValidatorLink = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!gameDatas) e.preventDefault();
  };

  useEffect(() => {
    const storedGameplan = localStorage.getItem('gamePlan');
    if (storedGameplan) {
      try {
        const data = JSON.parse(storedGameplan);
        setVoteData(data);
      } catch (error) {
        console.error('Invalid JSON in localStorage:', error);
        setVoteData(null);
      }
    }
  }, [gameDatas, setVoteData]);

  return (
    <>
      <Container display="block">
        <TopBar depth={0} title="SIXERS" />
        {/* <!-- 상단 공지사항 --> */}
        <NoticeContainer />

        {/* 투표하기 */}
        <Link href="/team/vote" onClick={onValidatorLink}>
          <VoteContainer voteData={voteData} />
        </Link>

        {/* 멤버리스트 */}
        <MemberList />

        {/* 리그전 기록 */}
        <LeagueInfo />

        {/* 광고 */}
        {/* <div className="adfit" style={{ margin: '10px 0' }}></div> */}
      </Container>
    </>
  );
};

export default TeamMainPage;
