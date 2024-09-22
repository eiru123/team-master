'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import TopBar from '@/components/TopGnb';
import Container from '@/components/ui/Container';
import Wrapper from '@/components/ui/Wrapper';
import Text from '@/components/ui/Text';

const NoticeDetailPage = () => {
  const param = useParams();

  return (
    <Container display="block">
      <TopBar depth={2} title={`공지사항 제목 제한은 여기까지`} />

      <Wrapper classname="mt-4 p-8">
        <Text type="p" classname=" text-lg">
          공지사항 내용입니다.공지사항 내용입니다.공지사항 내용입니다.공지사항 내용입니다.공지사항
          내용입니다.공지사항 내용입니다.공지사항 내용입니다.공지사항 내용입니다.공지사항
          내용입니다.공지사항 내용입니다.공지사항 내용입니다. <br />이 게시물은 {param.noticeId}의
          글 입니다.
        </Text>
      </Wrapper>
    </Container>
  );
};

export default NoticeDetailPage;

// 받은 param.noticeId를 가지고 getStaticProps 사용해서 서버에 먼저 검색 후
// 게시글을 띄워야 할 듯?
