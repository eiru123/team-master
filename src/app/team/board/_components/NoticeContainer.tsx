import Text from '@/components/ui/Text';
import Wrapper from '@/components/ui/Wrapper';
import Link from 'next/link';
import React from 'react';

const NoticeContainer = () => {
  return (
    <Wrapper>
      <div className="flex items-center justify-center gap-4 w-full h-full bg-gray-200 rounded-lg px-2 py-4">
        <Link
          href="/notice"
          className="flex justify-between items-center w-full px-2"
        >
          <Text type="p" fw={700} fz={16} className="w-[40px]">
            공지
          </Text>
          <div className="flex items-center w-full px-2 gap-1">
            <Text
              type="p"
              classname=" text-xs bg-sky-400 text-white rounded-sm py[1px] px-[3px]"
            >
              N
            </Text>
            <Text type="p" fz={13} fw={500}>
              식서스 공지사항입니다. 꼭 읽어주세요!
            </Text>
          </div>
        </Link>
      </div>
    </Wrapper>
  );
};

export default NoticeContainer;
