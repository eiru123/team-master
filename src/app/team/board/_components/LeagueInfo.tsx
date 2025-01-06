import React from 'react';
import Text from '@/components/ui/Text';
import './leagueInfo.css';

type Teams = {
  name: string;
  score: string;
  rate: number;
};

type Props = {
  year: number;
  season: string;
  teamList: Teams[];
};

const LeagueInfo = ({ year, season, teamList }: Props) => {
  return (
    <>
      <Text type="p" fz={18} fw={700} style={{ textAlign: 'center' }}>
        = {year} 시즌 {season} =
      </Text>
      <Text
        type="p"
        fz={12}
        style={{ textAlign: 'center', textDecoration: 'underline' }}
      >
        2025.01 - 2025.02
      </Text>
      <div className="league-container">
        {teamList.map((item, idx) => (
          <div
            key={idx}
            className={`team-tag ${item.rate === 1 ? 'highlight' : ''}`}
          >
            <Text type="span">{item.rate}위</Text>
            <Text type="span">{item.name}</Text>
            <Text type="span">{item.score}</Text>
          </div>
        ))}
      </div>
    </>
  );
};

export default LeagueInfo;
