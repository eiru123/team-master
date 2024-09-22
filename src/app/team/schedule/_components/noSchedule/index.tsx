'use client';

import Text from '@/components/ui/Text';
import Wrapper from '@/components/ui/Wrapper';
import CommonBtn from '@/components/ui/button/_Button';

interface MatchVoteProps {
  onClickLink: (url: string) => void;
}

const NoSchedule = ({ onClickLink }: MatchVoteProps) => {
  return (
    <Wrapper>
      <div className=" flex flex-col justify-center items-center mb-4">
        <Text type="p" classname=" text-xl">
          현재
        </Text>
        <Text type="p" classname=" text-xl">
          경기 일정이 없습니다.
        </Text>
      </div>

      <div className=" flex flex-col justify-center items-center ">
        <CommonBtn
          BgColor="fuchsia"
          classname=""
          onClick={() => onClickLink('/schedule/set/matchDate')}
        >
          경기일정 만들기
        </CommonBtn>
        <CommonBtn
          onClick={() => onClickLink('/team')}
          BgColor="home"
          classname="flex text-white w-fit pt-2 pb-2 mt-4"
        >
          홈으로
        </CommonBtn>
      </div>
    </Wrapper>
  );
};

export default NoSchedule;
