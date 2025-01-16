'use client';

import React from 'react';
import Text from '@/components/ui/Text';

/**
 * [화면 구성시 필요한 값]
 * - 지난 경기 날짜
 * - 지난 투표 시작/마감 날짜
 *
 * [경기 일정 설정시 필요한 값]
 * - (필수) 경기 날짜
 * - (필수) 경기 종류 ( 리그전-프리 / 리그전-정규 / 일반 / 이벤트 )
 * - (필수) 유니폼 종류
 * - 리그전] 팀명 - 팀컬러 선택
 * - 일반/이벤트전] x
 * - (선택) 메모사항
 *
 * ** 만약 이미 경기 일정이 있다면, 경기 일정 수정 가능
 * ** 경기 날짜를 선택하면 해당 일 기준 2일 전이 마감날짜로 선택되도록 - 기본값 (달력에서 수정 가능 )
 */

// TODO: useDday hooks 날짜 관련 hooks로 변경 후 값 수정하ㅣ
const AdminVoteSetting = () => {
  const year = new Date().getFullYear();
  const month = new Date().getMonth();
  const day = new Date().getDate();

  return (
    <>
      <div className="flex items-center gap-2">
        <Text type="span" fw={700} fz={24}>
          {year}
        </Text>
        <Text type="span" fw={700} fz={24}>
          {month + 1}
        </Text>
        <Text type="span" fw={700} fz={24}>
          {day}
        </Text>
      </div>
    </>
  );
};

export default AdminVoteSetting;
