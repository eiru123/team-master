import React from 'react';
import Text from './Text';

type Props = {
  type: 'l-free' | 'l-ing' | 'normal' | 'event';
  useYn?: boolean;
};

const NameTag: React.FC<Props> = ({ type, useYn = true }) => {
  const backgroundColors = {
    'l-free': '#7e7639',
    'l-ing': '#FFD700',
    normal: '#3C0800',
    event: '#7661FB',
  };

  const backgroundColor = useYn ? backgroundColors[type] : '#f4f4f4';
  const textColor = useYn && type !== 'l-ing' ? '#fff' : '#191919';

  const labels = {
    'l-free': '리그 프리시즌',
    'l-ing': '리그 시즌 ing',
    normal: '일반경기',
    event: '이벤트전',
  };

  return (
    <div
      className="w-fit px-2 py-1 rounded-md mb-1"
      style={{ backgroundColor }}
    >
      <Text type="p" fz={12} color={textColor}>
        {labels[type]}
      </Text>
    </div>
  );
};

export default NameTag;
