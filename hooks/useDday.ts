import { useEffect, useState } from "react";

type Props = {
  timeLeft: string;
  timePercent: number;
  timeYear: number;
  isEndVote: boolean;
}

/**
 * date : yyyy-mm-dd
 * @param startGameDate ( 투표 시작 날짜 )
 * @param startVoteDate ( 경기 시작 날짜 )
 * @returns {
 *  timeLeft ( 남은 시간 )
 *  timePercent ( 남은 시간 퍼센트 )
 *  timeYear ( 년도표시 )
 *  isEndVote ( 마감유무 )
 * }
 */

// TODO: useDday hooks에서 빈값을 보내면 기본적인 시간정보만 가지고 올 수 있게 변경해야함
export function useDday(startGameDate: string, startVoteDate?: string): Props {
  const [timeLeft, setTimeLeft] = useState<string>("");
  const [timePercent, setTimePercent] = useState<number>(0);
  const [timeYear, setTimeYear] = useState<number>(0);
  const [isEndVote, setIsEndVote] = useState(false);

  useEffect(() => {
    function calculateDday() {
      const now = new Date();
      const endDate = new Date(`${startGameDate}T23:59:59`);
      const startDate = startVoteDate ? new Date(`${startVoteDate}T00:00:00`) : now;

      const totalDuration = endDate.getTime() - startDate.getTime();
      const remainingTime = endDate.getTime() - now.getTime();

      if (remainingTime < 0) {
        setTimeLeft("D-Day는 이미 지났습니다.");
        setTimePercent(100); // 종료 날짜에 도달하면 100%
        setIsEndVote(true);
        return;
      }

      const year = now.getFullYear();
      const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
      const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

      setTimeLeft(`${days}일 ${hours}시간 ${minutes}분 ${seconds}초`);
      setTimeYear(year)

      const percent =
        totalDuration > 0 && remainingTime > 0
          ? (1 - remainingTime / totalDuration) * 100
          : 100; // D-Day가 되면 100%
      setTimePercent(percent);
    }

    calculateDday();
    const timer = setInterval(calculateDday, 1000);

    return () => clearInterval(timer);
  }, [startGameDate, startVoteDate]);

  return { timeLeft, timePercent, timeYear, isEndVote };
}
