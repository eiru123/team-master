'use client';
import React from 'react';

import Link from 'next/link';
import TopBar from '@/components/TopGnb';
import Container from '@/components/ui/Container';
import Text from '@/components/ui/Text';

const NoticeMainPage = () => {
  return (
    <Container display="block">
      <TopBar depth={1} title="공지사항" />

      {/* 필수 공지글 */}
      {/* 해당 공지글을 항상 최상단에 위치한다. */}
      <div className="p-8 pb-4 w-full">
        {/* list-item */}
        <div className=" border-b-2 pt-2 pb-2">
          <Link className=" w-full flex items-center justify-between" href={`/notice/detail/${0}`}>
            <Text type="p" classname=" text-base text-ellipsis line-clamp-1">
              <Text type="span" classname=" text-red-500 pr-1">
                [필독]
              </Text>
              공지사항 게시글 0
            </Text>
            <Text type="p" classname=" text-sm">
              20xx.xx.xx
            </Text>
          </Link>
        </div>
      </div>

      {/* 일반 공지글 */}
      {/* 해당 공지글을 항상 최근글을 위에 */}
      <div className="p-8 pt-2 w-full">
        {/* list-item */}
        <div className=" border-b-2 pt-2 pb-2">
          <Link className=" w-full flex items-center justify-between" href={`/notice/detail/${1}`}>
            <Text type="p" classname=" text-base text-ellipsis line-clamp-1">
              공지사항 게시글 1
            </Text>
            <Text type="p" classname=" text-sm">
              20xx.xx.xx
            </Text>
          </Link>
        </div>

        {/* list-item */}
        <div className=" border-b-2 pt-2 pb-2">
          <Link className=" w-full flex items-center justify-between" href={`/notice/detail/${2}`}>
            <Text type="p" classname=" text-base text-ellipsis line-clamp-1">
              공지사항 게시글 2
            </Text>
            <Text type="p" classname=" text-sm">
              20xx.xx.xx
            </Text>
          </Link>
        </div>

        {/* list-item */}
        <div className=" border-b-2 pt-2 pb-2">
          <Link className=" w-full flex items-center justify-between" href={`/notice/detail/${3}`}>
            <Text type="p" classname=" text-base text-ellipsis line-clamp-1">
              공지사항 게시글 3
            </Text>
            <Text type="p" classname=" text-sm">
              20xx.xx.xx
            </Text>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default NoticeMainPage;
