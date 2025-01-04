import { useEffect, useState } from "react";

interface DdayResult {
  timeLeft: string;
  timePercent: number;
  timeYear: number
}

export function useDday(endDateStr: string, startDateStr?: string): DdayResult {
  const [timeLeft, setTimeLeft] = useState<string>("");
  const [timePercent, setTimePercent] = useState<number>(0);
  const [timeYear, setTimeYear] = useState<number>(0);

  useEffect(() => {
    function calculateDday() {
      const now = new Date();
      const endDate = new Date(`${endDateStr}T23:59:59`);
      const startDate = startDateStr ? new Date(`${startDateStr}T00:00:00`) : now;

      const totalDuration = endDate.getTime() - startDate.getTime();
      const remainingTime = endDate.getTime() - now.getTime();

      if (remainingTime < 0) {
        setTimeLeft("D-Day는 이미 지났습니다.");
        setTimePercent(100); // 종료 날짜에 도달하면 100%
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
  }, [endDateStr, startDateStr]);

  return { timeLeft, timePercent, timeYear };
}
