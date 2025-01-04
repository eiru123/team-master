import React from 'react';
import './voteContainer.css';
import NameTag from '@/components/ui/NameTag';

interface Props {
  timePercent: number;
  timeLeft: string;
}

const VoteContainer = ({ timePercent, timeLeft }: Props) => {
  const percent = Math.floor(timePercent);

  return (
    <div
      className="vote-container"
      style={{ '--percent': percent } as React.CSSProperties}
    >
      <div className="inner-container team-w">
        {/* 경기 타입 1.리그전 1-1. 리그 프리시즌 1-2. 리그 시즌 ing 2.이벤트전 3. 일반경기 */}
        <NameTag type="l-free" />

        <p className="vote-text" style={{ fontSize: '24px', margin: '8px 0' }}>
          2025.01.11 (토)
        </p>
        <p className="vote-text">{String(timeLeft)}</p>
      </div>
    </div>
  );
};

export default VoteContainer;
