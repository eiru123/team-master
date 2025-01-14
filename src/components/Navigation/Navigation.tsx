import Image from 'next/image';
import React from 'react';

const Navigation = () => {
  return (
    <div className="overflow-hidden w-screen h-[54px] fixed bottom-0">
      <Image
        src={'/img/navigation.png'}
        alt="네비게이션 프레임"
        width={1200}
        height={60}
      />
    </div>
  );
};

export default Navigation;
