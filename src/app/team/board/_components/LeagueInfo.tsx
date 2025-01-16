import React from 'react';
import Text from '@/components/ui/Text';
import Image from 'next/image';

type Teams = {
  name: string;
  score: string;
  rate: number;
  src: string;
};

type Props = {
  year: number;
  season: string;
  teamList: Teams[];
};

const LeagueInfo = ({ season, teamList }: Props) => {
  const year = new Date().getFullYear();

  const handleColor = (rate: number) => {
    if (rate === 1) {
      return {
        bg: '#306dc9',
        font: '#FFF',
      };
    }
    if (rate === 2) {
      return {
        bg: '#1a3a69',
        font: '#d2d2d2',
      };
    }
    if (rate === 3) {
      return {
        bg: '#0E2240',
        font: '#7c7c7c',
      };
    }
  };
  return (
    <div className="bg-[#121212] rounded-t-md pb-10">
      <div className="flex flex-col relative mb-1">
        <Text
          type="p"
          fz={40}
          fw={700}
          color="white"
          className="text-center font-jua"
        >
          {year} 시즌 {season}
        </Text>
        <Text type="p" fz={12} color="white" className="text-center">
          2025.01 - 2025.02
        </Text>
      </div>

      <div className=" flex flex-col justify-center items-center gap-1 flex-1 w-full px-2">
        {teamList
          .sort((a, b) => a.rate - b.rate)
          .map((item) => {
            return (
              <>
                <div
                  className=" flex flex-col w-full overflow-hidden relative"
                  style={item.rate === 1 ? { height: 230 } : null}
                >
                  <div
                    className=" px-4 py-1 flex items-center justify-between"
                    style={{ backgroundColor: handleColor(item.rate).bg }}
                  >
                    <Text
                      type="span"
                      fw={700}
                      fz={18}
                      className="w-[150px]"
                      style={{ color: handleColor(item.rate).font }}
                    >
                      {item.rate}위 {item.name}
                    </Text>
                    <Text type="span" fz={12} color="white">
                      {item.score}
                    </Text>
                  </div>
                  {item.rate === 1 ? (
                    <Image
                      src={item.src}
                      alt="팀 단체사진"
                      width={500}
                      height={200}
                      unoptimized
                      className=" object-cover mt-1"
                    />
                  ) : null}
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
};

export default LeagueInfo;
