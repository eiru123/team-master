'use client';

import React, { useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';
import MatchVote from './_components/vote';
import NoSchedule from './_components/noSchedule';
import Container from '@/components/ui/Container';
import TopBar from '@/components/TopGnb';

const ScheduleMainPage = () => {
  const router = useRouter();

  const onClickLink = (url: string) => {
    router.replace(url);
  };

  const [voteResult, setVoteResult] = useState<string | null>(null);
  const onClickVote = (state: string) => {
    if (isVoted) return;
    if (voteResult === state) return;

    setVoteResult(state);
  };

  const onClickVoteComfirm = () => {
    if (!voteResult) return;

    if (isVoted && voteResult) {
      setIsVoted(false);
      return;
    }

    // 투표 확정이므로 서버에 투표값 전달하고 진행해야함
    // 임의로 로컬 스토리지에 저장 후 진행 하겠음
    alert(`[${voteResult}] 투표완료!`);
    sessionStorage.setItem('vote', voteResult);
    router.back();
  };

  const [isVoted, setIsVoted] = useState<boolean | null>(null);
  useEffect(() => {
    const getVoteValue = () => {
      const voteValue = sessionStorage.getItem('vote');

      if (voteValue) {
        setVoteResult(voteValue);
        setIsVoted(true);
      } else {
        setIsVoted(false);
        return;
      }
    };

    getVoteValue();
  }, []);

  // 임시: 관리자가 경기 일정을 잡은 경우
  const [isMatch, setIsMatch] = useState<boolean | null>(null);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const t = sessionStorage.getItem('matchDate');
      t ? setIsMatch(true) : setIsMatch(false);
    }
  }, []);

  return (
    <Container display="block">
      <TopBar depth={1} title="경기일정" />

      {isMatch ? (
        // 경기 일정이 있을 경우
        <MatchVote
          isVoted={isVoted}
          voteResult={voteResult}
          onClickVote={onClickVote}
          onClickVoteComfirm={onClickVoteComfirm}
          onClickLink={onClickLink}
        />
      ) : (
        // 경기 일정이 없을 경우
        <NoSchedule onClickLink={onClickLink} />
      )}
    </Container>
  );
};

export default ScheduleMainPage;
