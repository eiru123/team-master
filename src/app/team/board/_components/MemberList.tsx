import React from 'react';
import './memberList.css';
import Text from '@/components/ui/Text';
import Slider from 'react-slick';

const MemberList = () => {
  const members = [
    { src: '/test/test.png', name: '심상민', position: 'F', reward: 0 },
    { src: '/test/test.png', name: '조성은', position: 'G', reward: 1 },
    { src: '/test/test.png', name: '이상엽', position: 'C', reward: 2 },
  ];

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <>
      <Text type="p" fz={18} fw={700} classname=" text-center">
        = SIXERS MEMBERS =
      </Text>
      <div className="teams-container">
        <Slider {...settings}>
          {members.map((item) => (
            <div className="slide" key={item.name}>
              <div className="member">
                {/* 인물 사진 */}
                <div className="img-box">
                  <img src={item.src} alt="프로필사진" />
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
