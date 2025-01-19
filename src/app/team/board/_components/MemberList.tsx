import React from 'react';
import './memberList.css';
import Text from '@/components/ui/Text';
import Slider from 'react-slick';
import Image from 'next/image';
import mainSliderSettings from '@/config/reactSlick-settings';
import Link from 'next/link';

const MemberList = () => {
  const members = [
    {
      src: '/img/test/test-member.jpg',
      name: '박보영',
      position: '가드',
      nickname: 'bo-young',
      backnumber: 24,
      reward: 0,
      mvp: 0,
    },
    {
      src: '/img/test/test-profile.jpg',
      name: '보영씨',
      position: '가드',
      nickname: 'boo-young',
      backnumber: 24,
      reward: 1,
      mvp: 1,
    },
    {
      src: '/img/test/test-member4.jpg',
      name: '보영님',
      position: '가드',
      nickname: 'boo-boo',
      backnumber: 10,
      reward: 2,
      mvp: 2,
    },
    {
      src: '/img/test/test-member2.jpg',
      name: '안유진',
      position: '포워드',
      nickname: 'u-jin',
      backnumber: 10,
      reward: 3,
      mvp: 3,
    },
    {
      src: '/img/test/test-profile2.jpg',
      name: '유진',
      position: '포워드',
      nickname: 'u-jiiin',
      backnumber: 10,
      reward: 4,
      mvp: 4,
    },
    {
      src: '/img/test/test-member3.jpg',
      profile: '/img/test/test-profile.jpg',
      name: '요키치',
      position: '센터',
      nickname: 'Jokic',
      backnumber: 15,
      reward: 5,
      mvp: 5,
    },
  ];

  return (
    <>
      <div className="flex items-center justify-between">
        <Text type="p" fz={18} fw={700} classname="">
          우리 팀을 소개합니다.
        </Text>
        <Link href="/team/member-list">더보기</Link>
      </div>
      <div className="teams-container">
        <Slider {...mainSliderSettings}>
          {members.map((item) => (
            <div
              className="slide shadow-sm h-[150px] relative rounded-md overflow-hidden"
              key={item.name}
            >
              <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
              <Image
                src={item.src}
                alt="배경프로필사진"
                fill
                unoptimized
                className=" object-cover z-0"
                style={{ objectPosition: '10% 40%' }}
              />

              <div className="flex flex-col justify-center items-center absolute top-2 left-4 z-20">
                <Text
                  fz={32}
                  type="p"
                  color="white"
                  className=" font-DNFBitBitv2"
                >
                  {item.name}
                </Text>
                <div className="w-2/3 h-1 bg-white"></div>
              </div>

              <div className="flex items-center gap-2 absolute bottom-2 right-4 z-20">
                <Text type="span" fz={12} color="white">
                  #{item.position}
                </Text>
                <Text type="span" fz={12} color="white">
                  #{item.nickname}
                </Text>
                <Text type="span" fz={12} color="white">
                  #No.{item.backnumber}
                </Text>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default MemberList;
