import { useEffect, useState } from "react";

type Props = {
  timeLeft: string;
  timePercent: number;
  timeYear: number;
  isEndVote: boolean;
}

/**
 * @param startGameDate ISO 8601 형식
 * @returns {
 *  timeLeft ( 남은 시간 )
 *  timePercent ( 남은 시간 퍼센트 )
 *  timeYear ( 년도표시 )
 *  isEndVote ( 마감유무 )
 * }
 */
export function useDday(startGameDate: string): Props {
  const [timeLeft, setTimeLeft] = useState<string>("");
  const [timePercent, setTimePercent] = useState<number>(0);
  const [timeYear, setTimeYear] = useState<number>(0);
  const [isEndVote, setIsEndVote] = useState(false);

  useEffect(() => {
    if (!startGameDate) return;

    function calculateDday() {
      const now = new Date();
      const gameDate = new Date(startGameDate);
      const voteEndDate = new Date(gameDate);
      voteEndDate.setDate(voteEndDate.getDate() - 1);

      const totalDuration = voteEndDate.getTime() - now.getTime();
      const remainingTime = voteEndDate.getTime() - now.getTime();

      if (remainingTime < 0) {
        setTimeLeft("투표 마감!");
        setTimePercent(100);
        setIsEndVote(true);
        return;
      }

      const year = gameDate.getFullYear();
      const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
      const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

      setTimeLeft(`${days}일 ${hours}시간 ${minutes}분 ${seconds}초`);
      setTimeYear(year);

      const percent =
        totalDuration > 0 && remainingTime > 0
          ? (1 - remainingTime / totalDuration) * 100
          : 100;
      setTimePercent(percent);
    }

    calculateDday();
    const timer = setInterval(calculateDday, 1000);

    return () => clearInterval(timer);
  }, [startGameDate]);

  return { timeLeft, timePercent, timeYear, isEndVote };
}
