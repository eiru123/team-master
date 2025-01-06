import React from 'react';
import Text from './Text';

type Props = {
  type: 'l-free' | 'l-ing' | 'normal' | 'event';
};

const NameTag: React.FC<Props> = ({ type }) => {
  switch (type) {
    case 'l-free':
      return (
        <div className="w-fit px-2 py-1 rounded-md mb-1 bg-[#7e7639]">
          <Text type="p" fz={12} color="#fff">
            리그 프리시즌
          </Text>
        </div>
      );

    case 'l-ing':
      return (
        <div className="w-fit px-2 py-1 rounded-md mb-1 bg-yellow-400">
          <Text type="p" fz={12} color="#191919">
            리그 시즌 ing
          </Text>
        </div>
      );

    case 'normal':
      return (
        <div className="w-fit px-2 py-1 rounded-md mb-1 bg-[#3C0800]">
          <Text type="p" fz={12} color="#fff">
            일반경기
          </Text>
        </div>
      );

    case 'event':
      return (
        <div className="w-fit px-2 py-1 rounded-md mb-1 bg-[#7661FB]">
          <Text type="p" fz={12} color="#fff">
            이벤트전
          </Text>
        </div>
      );

    default:
      return <p>설정필요</p>;
  }
};

export default NameTag;
