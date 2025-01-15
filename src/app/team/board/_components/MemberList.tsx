import React from 'react';
import './memberList.css';
import Text from '@/components/ui/Text';
import Slider from 'react-slick';
import Image from 'next/image';

const MemberList = () => {
  const members = [
    { src: '/img/test-people.png', name: '심상민', position: 'F', reward: 0 },
    { src: '/img/test-people.png', name: '조성은', position: 'G', reward: 1 },
    { src: '/img/test-people.png', name: '이상엽', position: 'C', reward: 2 },
  ];

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: '20px',
  };

  return (
    <>
      <Text type="p" fz={18} fw={700} classname=" text-center">
        = SIXERS MEMBERS =
      </Text>
      <div className="teams-container">
        <Slider {...settings}>
          {members.map((item) => (
            <div className="slide px-1" key={item.name}>
              <div className="member rounded-lg bg-[#eae8ff] px-4 py-2">
                {/* 인물 사진 */}
                <div className="img-box max-w-[120px] max-h-[130px]">
                  <Image
                    src={item.src}
                    alt="프로필사진"
                    width={150}
                    height={150}
                  />
                </div>
                {/* 인물 정보 */}
                <div className="member-info">
                  <Text type="p">이름: {item.name}</Text>
                  <Text type="p">포지션: {item.position}</Text>
                  <Text type="p">{item.reward}</Text>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default MemberList;
