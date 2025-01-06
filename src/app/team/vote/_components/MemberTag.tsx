import Text from '@/components/ui/Text';
import Image from 'next/image';
import React from 'react';

type Props = {
  name: string;
  status: 'join' | 'skip';
};

const MemberTag = ({ name, status = 'join' }: Props) => {
  switch (status) {
    case 'join':
      return (
        <div className=" relative w-full max-w-[100px]">
          <Image
            src={'/img/vote/nameTag.png'}
            alt="이름표"
            width={100}
            height={40}
          />
          <Text
            type="p"
            fz={14}
            classname=" absolute top-[6px] right-[14px] w-fit max-w-[42px] line-clamp-1"
          >
            {name}
          </Text>
        </div>
      );
    case 'skip':
      return (
        <div className=" relative w-full max-w-[100px] text-center">
          <Text type="p" fz={14} classname="">
            {name}
          </Text>
        </div>
      );
    default:
      return <p>상태를 설정하세요</p>;
      break;
  }
};

export default MemberTag;
