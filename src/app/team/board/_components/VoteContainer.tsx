import React from 'react';
import './voteContainer.css';
import NameTag from '@/components/ui/NameTag';
import Image from 'next/image';

interface Props {
  timePercent: number;
  timeLeft: string;
}

const VoteContainer = ({ timePercent, timeLeft }: Props) => {
  const percent = Math.floor(timePercent);

  // 사용자 팀 컬러 설정
  /**
   * team-w : 화이트팀
   * team-b : 블랙팀
   * team-p : 퍼플팀
   * no-team : white
   */

  {
    /* 경기 타입(NameTag) 1.리그전 1-1. 리그 프리시즌 1-2. 리그 시즌 ing 2.이벤트전 3. 일반경기 */
  }
  {
    /* 투표 디스플레이
            1. 경기일정 o, 투표 o, 팀배정 o : 팀 컬러 유니폼
            2. 경기일정 o, 투표 o, 팀배정 x : 점선 유니폼
            3. 경기일정 o, 투표 x, 투표 종료 x : 투표 유니폼
            4. 경기일정 o, 투표 o, 경기 불참 : 불참 유니폼
            5. 경기일정 o, 투표 x, 투표 종료 o : 불참 유니폼
            6. 경기일정 x : 경기 일정 없음 문구
        */
  }
  const userTeamInfo = {
    team: 'no-team',
  };

  return (
    <div
      className="vote-container"
      style={{ '--percent': percent } as React.CSSProperties}
    >
      <div className={`inner-container relative ${userTeamInfo.team}`}>
        {/* 경기 일정이 없습니다. */}
        <NameTag type="l-ing" />

        <div className="w-full grid grid-cols-3">
          <div className="col-span-2">
            <p
              className="vote-text text-center"
              style={{ fontSize: '24px', margin: '8px 0' }}
            >
              2025.01.11 (토)
            </p>
            <p className="vote-text text-center">{String(timeLeft)}</p>
          </div>
          <div
            className="flex justify-center items-center absolute right-0 top-1/2 transform translate-x-[-5%] translate-y-[-50%] w-[100px] h-[100px] rounded-full "
            style={
              userTeamInfo.team === 'team-w'
                ? { backgroundColor: '#5c5c5c' }
                : { backgroundColor: '#fff' }
            }
          >
            <Image
              src={'/img/vote/need-vote.png'}
              alt="유니폼"
              width={50}
              height={80}
              className="block object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoteContainer;
