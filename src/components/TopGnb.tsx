import React from 'react';
import GoBackBtn from './ui/button/BackBtn';
import CloseBtn from './ui/button/CloseBtn';
import Wrapper from './ui/Wrapper';
import Title from './ui/Title';

type Props = {
  depth: 0 | 1 | 2 | 3;
  title: string;
};

const TopBar = ({ depth, title }: Props) => {
  switch (depth) {
    case 0:
      return (
        <Wrapper classname="bg-main dark:bg-darkMain flex justify-between items-center">
          <Title type="main" classnames="font-jua">
            {title}
          </Title>
          <div className="w-[32px] h-[32px]"></div>
        </Wrapper>
      );

    case 1:
      return (
        <Wrapper classname="bg-main dark:bg-darkMain flex justify-between items-center">
          {/* 뒤로가기 */}
          <GoBackBtn />

          <Title type="sub">{title}</Title>
          <div className="w-[32px] h-[32px]"></div>
        </Wrapper>
      );

    case 2:
      return (
        <Wrapper classname="bg-main dark:bg-darkMain flex justify-between items-center">
          <Title type="mini">{title}</Title>

          {/* 닫기 (뒤로가기) */}
          <CloseBtn />
        </Wrapper>
      );

    // 특수한 경우임(닫기를 누르면 comfirm 켜짐)
    case 3:
      return (
        <Wrapper classname="bg-main dark:bg-darkMain flex justify-between items-center">
          <Title type="mini">{title}</Title>

          {/* 닫기 (뒤로가기) */}
          <CloseBtn isConfirm={true} />
        </Wrapper>
      );

    default:
      return (
        <Wrapper classname="bg-main dark:bg-darkMain">
          알맞는 depth가 설정되지 않았습니다.
        </Wrapper>
      );
  }
};

export default TopBar;
