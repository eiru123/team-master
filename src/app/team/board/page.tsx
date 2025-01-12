'use client';

import Link from 'next/link';
import TopBar from '@/components/TopGnb';
import Container from '@/components/ui/Container';
import Wrapper from '@/components/ui/Wrapper';
import Text from '@/components/ui/Text';
import Loading from '@/components/Loading';
import { useDday } from '../../../../hooks/useDday';
import MemberList from './_components/MemberList';
import LeagueInfo from './_components/LeagueInfo';
import { useEffect, useState } from 'react';
import VoteContainer from './_components/VoteContainer';

type Teams = {
  name: string;
  score: string;
  rate: number;
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
  const isLoading = false;

  // const router = useRouter();

  // const onClickLink = (url: string) => {
  //   router.push(url);
  // };

  const { timePercent, timeLeft, timeYear, isEndVote } = useDday(
    '2025-01-10',
    '2025-01-05',
  );
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
      },
      {
        name: '캐치! 감마핑',
        score: '3승 1패',
        rate: 2,
      },
      {
        name: '출석체크',
        score: '2승 2패',
        rate: 3,
      },
    ]);
  }, []);

  return isLoading ? (
    <Loading type="img" />
  ) : (
    <>
      <Container display="block">
        <TopBar depth={0} title="SIXERS" />
        {/* <!-- 상단 공지사항 --> */}
        <Wrapper>
          <Link href="/notice" className="flex justify-between items-center">
            <div className=" text-center flex flex-wrap">
              <Text type="span" fz={12}>
                공지
              </Text>
              <Text type="span" fz={12}>
                사항
              </Text>
            </div>
            <div className=" flex items-center">
              {/* 글을 올린 날짜 === 현재 날짜 시에만 표시 */}
              <Text
                type="p"
                classname=" text-xs bg-sky-400 text-white rounded-sm p-0.5 pl-1"
              >
                N
              </Text>

              {/* 가장 최신글 1개 노출 */}
              <Text
                type="p"
                fz={14}
                fw={700}
                classname=" text-start ml-1 mr-1 text-ellipsis line-clamp-1"
              >
                식서스의 공지사항입니다. 꼭 읽어주세요
              </Text>
            </div>
            <div className="text-center">
              <Text type="span" fz={12}>
                2024{' '}
              </Text>
              <Text type="span" fz={12}>
                03.08
              </Text>
            </div>
          </Link>
        </Wrapper>

        {/* 투표하기 */}
        <Text type="a" href="/team/vote">
          <VoteContainer
            timePercent={timePercent}
            timeLeft={timeLeft}
            isEndVote={isEndVote}
          />
        </Text>

        {/* 멤버리스트 */}
        <MemberList />

        {/* 리그전 기록 */}
        <LeagueInfo year={timeYear} season={season} teamList={teamList} />

        {/* 광고 */}
        {/* <div className="adfit" style={{ margin: '10px 0' }}></div> */}
      </Container>

      {/* 토글 메뉴 */}
    </>
  );
};

export default TeamMainPage;
