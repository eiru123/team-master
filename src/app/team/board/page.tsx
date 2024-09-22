'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import TopBar from '@/components/TopGnb';
import Container from '@/components/ui/Container';
import Wrapper from '@/components/ui/Wrapper';
import Text from '@/components/ui/Text';
import CommonBtn from '@/components/ui/button/_Button';
import Loading from '@/components/Loading';

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

  const [isLoading, setIsLoading] = useState<boolean | null>(null);

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const router = useRouter();

  const onClickLink = (url: string) => {
    router.push(url);
  };

  return isLoading ? (
    <Loading type="img" />
  ) : (
    <>
      <Container display="block">
        <TopBar depth={0} title="SIXERS" />
        {/* <!-- 상단 공지사항 --> */}
        <Wrapper>
          <Link href="/notice" className="flex justify-between items-center">
            <Text type="p" classname=" text-center flex flex-wrap">
              <Text type="span" classname=" text-xs">
                공지
              </Text>
              <Text type="span" classname=" text-xs">
                사항
              </Text>
            </Text>
            <div className=" flex items-center">
              {/* 글을 올린 날짜 === 현재 날짜 시에만 표시 */}
              <Text type="p" classname=" text-xs bg-sky-400 text-white rounded-sm p-0.5 pl-1">
                N
              </Text>

              {/* 가장 최신글 1개 노출 */}
              <Text type="p" classname=" text-start text-sm ml-1 mr-1 text-ellipsis line-clamp-1">
                식서스의 공지사항입니다. 꼭 읽어주세요
              </Text>
            </div>
            <Text type="p" classname=" text-center text-xs">
              <Text type="span" classname=" text-xs">
                2024{' '}
              </Text>
              <Text type="span" classname=" text-xs">
                03.08
              </Text>
            </Text>
          </Link>
        </Wrapper>

        {/* <!-- 배너 --> */}
        <Wrapper classname=" bg-pink-400 w-full h-32 ">배너</Wrapper>

        {/* <!-- 경기 일정 --> */}
        <Wrapper>
          <Link href="team/schedule" className="">
            <Text
              type="p"
              classname="bg-slate-500 text-white text-base rounded-tl-lg rounded-tr-lg pt-1 pb-1 pl-3"
            >
              경기일정
            </Text>

            <div className="w-full h-full bg-white dark:bg-gray-900 p-2 rounded-br-lg rounded-bl-lg flex flex-col items-center justufy-center shadow-sm">
              <Text type="p" classname=" text-sm font-bold w-full text-center">
                SIXERS 리그전
              </Text>
              <Text type="p" classname=" text-lg">
                2024.06.22 (토)
              </Text>
            </div>
          </Link>
        </Wrapper>

        {/* <!-- 지난 경기 --> */}
        <Wrapper classname="flex flex-col items-center justify-center">
          <Text
            type="p"
            classname="flex flex-wrap items-center justify-start bg-rose-200 dark:bg-rose-900 rounded-tl-lg rounded-tr-lg w-full pt-1 pb-1 pl-3"
          >
            <Text type="span" classname=" text-base ">
              지난경기
            </Text>
            <Text type="span" classname=" text-base">
              현황
            </Text>
            <Text type="span" classname=" text-xs pl-2">
              {' '}
              (2024.06.15 기준)
            </Text>
          </Text>
          <div className="text-sm flex flex-col w-full text-center pt-2 pb-2 bg-white dark:bg-gray-900 shadow-sm rounded-br-lg rounded-bl-lg">
            <Text type="p" classname=" flex flex-col">
              <Text type="span" classname="">
                WF 승리 (03승 01패)
              </Text>
              <Text type="span" classname=" title-font">
                MVP 이 민 재
              </Text>
            </Text>
          </div>
        </Wrapper>

        {/* <!-- 메뉴 버튼 --> */}
        <Wrapper classname=" flex gap-2">
          <Link
            href="/info"
            className=" flex-1 text-center bg-infoCentre pt-6 pb-6 rounded-md flex flex-col items-center justify-center relative h-40  overflow-hidden"
          >
            <Text type="p" classname=" text-xl font-bold p-2">
              정보센터
            </Text>
            <Image
              className=" absolute position-center top-1/2 opacity-30 z-0"
              src={'/img/infoCentre.png'}
              alt="정보센터"
              width={180}
              height={180}
              unoptimized
            />
          </Link>

          <CommonBtn
            BgColor="red"
            classname="flex-3 text-center pt-6 pb-6 rounded-md relative"
            onClick={() => onClickLink('/')}
          >
            <Text type="p" classname=" text-xl font-bold p-2">
              인게임모드
            </Text>
            <Image
              className=" absolute position-center top-1/2 opacity-30 z-0"
              src={'/img/court.png'}
              alt="정보센터"
              width={200}
              height={200}
              unoptimized
            />
          </CommonBtn>
        </Wrapper>

        {/* 광고 */}
        {/* <div className="adfit" style={{ margin: '10px 0' }}></div> */}
      </Container>

      {/* 토글 메뉴 */}
    </>
  );
};

export default TeamMainPage;
