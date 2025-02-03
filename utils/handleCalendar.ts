export const monthList = [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
  ];

export const weekList = ['일', '월', '화', '수', '목', '금', '토']

export const getDaysInMonth = (year: number, month: number) => {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const days = Array.from(
    { length: lastDay.getDate() },
    (_, index) => index + 1
  );

  return {
    days,
    startDay: firstDay.getDay(),
  };
};
