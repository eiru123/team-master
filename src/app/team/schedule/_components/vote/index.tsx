'use client';

import Container from '@/components/ui/Container';
import Text from '@/components/ui/Text';
import CommonBtn from '@/components/ui/button/_Button';

interface MatchVoteProps {
  isVoted: boolean | null;
  voteResult: string | null;
  onClickVote: (state: string) => void;
  onClickVoteComfirm: () => void;
  onClickLink: (url: string) => void;
}

const MatchVote = ({
  isVoted,
  voteResult,
  onClickVote,
  onClickVoteComfirm,
  onClickLink,
}: MatchVoteProps) => {
  return (
    <Container display="flex">
      {/* 날짜 */}
      <div className=" flex flex-col justify-center items-center mt-2 mb-2">
        {/* 경기가 진행되는 날짜 */}
        <Text type="p" classname=" text-2xl">
          2024.06.24 (토)
        </Text>

        {/* 투표 종료까지 남은 시간 */}
        <Text type="p" classname=" text-xl">
          00:00:00
        </Text>
      </div>
      {/* 투표 상태 */}
      <div className=" text-lg font-semibold mt-2 mb-2 w-full bg-cyan-200 text-center pt-2 pb-2 ">
        {isVoted ? (
          <Text type="p" classname=" text-3xl">
            {voteResult}
          </Text>
        ) : (
          <Text type="p">투표를 진행해주세요</Text>
        )}
      </div>
      {/* 투표 */}
      {/* 투표를 했을 경우 해당 칸은 비활성화 처리를 한다. */}
      {/* 투표를 수정하기 위해서는 다음과 같은 단계를 거친다. */}
      {/* 1. 최하단 수정하기 버튼을 클릭한다. (누르면 '투표 확정' 이라는 글자로 바뀐다) */}
      {/* 2. 원하는 영역을 클릭한다. */}
      {/* 3. 투표 확정으로 바뀐 최하단 버튼을 클릭한다. */}
      {/* 4. 투표를 한번 확정하면 1분동안 바꿀 수 없다. */}

      <div className=" grid grid-cols-3">
        <CommonBtn
          classname={`text-white`}
          BgColor={`${voteResult === '미참여' ? 'disabled' : 'red'}`}
          onClick={() => onClickVote('미참여')}
        >
          미참여
        </CommonBtn>
        <CommonBtn
          classname={`text-white`}
          BgColor={`${voteResult === '참여' ? 'disabled' : 'purple'}`}
          onClick={() => onClickVote('참여')}
        >
          참여
        </CommonBtn>
        <CommonBtn
          classname={`text-white`}
          BgColor={`${voteResult === '보류' ? 'disabled' : 'zinc'}`}
          onClick={() => onClickVote('보류')}
        >
          보류
        </CommonBtn>
      </div>
      {/* 확정/수정 */}
      <CommonBtn
        onClick={() => onClickVoteComfirm()}
        BgColor="select"
        classname=" text-white text-bold text-base mt-8 pt-2 pb-2"
      >
        {isVoted ? '투표 수정' : '투표 확정'}
      </CommonBtn>

      {/* 투표 결과 보기 */}
      <CommonBtn
        onClick={() => onClickLink('/schedule/voteResult')}
        BgColor="fuchsia"
        classname=" text-bold text-base pt-2 pb-2 absolute bottom-0"
      >
        투표 현황 보기
      </CommonBtn>
    </Container>
  );
};

export default MatchVote;
