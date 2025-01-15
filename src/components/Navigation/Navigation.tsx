'use client';

import React, { useState } from 'react';
import Text from '../ui/Text';
import ScroeBoardSvg from '../ui/svg/ScroeBoardSvg';
import SettingSvg from '../ui/svg/SettingSvg';
import BasketballSvg from '../ui/svg/BasketballSvg';
import { useRouter } from 'next/navigation';

/** 버튼 타입 (내용 교체시 아래 표시 바람)
 * btn1: ?
 * btn2: ?
 * btn3: 보드판
 * btn4: 설정
 * btn5: 메인메뉴
 */
type BtnType = 'btn1' | 'btn2' | 'btn3' | 'btn4' | 'btn5' | null;

const Navigation = () => {
  const router = useRouter();
  const [clickBtn, setClickBtn] = useState<BtnType>(null);

  const onLinkPage = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btnid = e.currentTarget.dataset.btnId as BtnType;
    setClickBtn(btnid);

    // 중복 클릭 방지
    if (clickBtn === btnid) return;

    switch (btnid) {
      case 'btn1':
        // router.push('');
        console.log('정해지지 않음');
        break;
      case 'btn2':
        // router.push('');
        console.log('정해지지 않음');
        break;
      case 'btn3':
        router.push('/team/whiteBoard');
        break;
      case 'btn4':
        router.push('/team/settings');
        break;
      case 'btn5':
        router.push('/team/board');
        break;

      default:
        break;
    }
  };

  const handleBtnColor = (btnId: BtnType) => {
    return clickBtn === btnId ? '#7661FB' : '#5C665F';
  };

  return (
    <div className="w-screen h-[70px] fixed bottom-0 shadow-lg">
      <div className="overflow-hidden relative w-full h-full bg-white grid grid-cols-5">
        <Text
          type="button"
          fz={10}
          onClick={onLinkPage}
          data-btn-id="btn1"
          className="flex justify-center items-center border-t-[1px]"
          color={handleBtnColor('btn1')}
        >
          버튼1
        </Text>
        <Text
          type="button"
          fz={10}
          onClick={onLinkPage}
          data-btn-id="btn2"
          className="flex justify-center items-center border-t-[1px]"
          color={handleBtnColor('btn2')}
        >
          버튼2
        </Text>

        <div className="relative border-t-[1px]">
          <div className="absolute top-[-25px] left-1/2 transform -translate-x-1/2 w-[70px] h-[70px] bg-main rounded-full border-[1px]"></div>
        </div>

        {/* 화이트보드 */}
        <Text
          type="button"
          fz={10}
          onClick={onLinkPage}
          data-btn-id="btn3"
          className="flex flex-col justify-center items-center border-t-[1px]"
        >
          <ScroeBoardSvg
            width={30}
            height={30}
            color={handleBtnColor('btn3')}
          />
          <Text type="span" fz={10} color={handleBtnColor('btn3')}>
            보드판
          </Text>
        </Text>

        {/* 설정 */}
        <Text
          type="button"
          fz={10}
          onClick={onLinkPage}
          data-btn-id="btn4"
          className="flex flex-col justify-center items-center border-t-[1px]"
        >
          <SettingSvg width={30} height={30} color={handleBtnColor('btn4')} />
          <Text type="span" fz={10} color={handleBtnColor('btn4')}>
            설정
          </Text>
        </Text>
      </div>

      {/* 메인 */}
      <div className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 w-[60px] h-[60px] bg-white rounded-full flex justify-center items-center shadow-lg ">
        <Text
          type="button"
          onClick={onLinkPage}
          data-btn-id="btn5"
          className="flex flex-col justify-center items-center"
        >
          <span className="relative text-center">
            <Text
              type="span"
              fz={14}
              fw={700}
              color={handleBtnColor('btn5')}
              className="font-hubballi"
            >
              H
            </Text>
            <Text
              type="span"
              fz={14}
              fw={700}
              color={handleBtnColor('btn5')}
              className="font-hubballi"
            >
              O
            </Text>
            <Text
              type="span"
              fz={14}
              fw={700}
              color={handleBtnColor('btn5')}
              className="font-hubballi"
            >
              M
            </Text>
            <Text
              type="span"
              fz={14}
              fw={700}
              color={handleBtnColor('btn5')}
              className="font-hubballi"
            >
              E
            </Text>
          </span>
          <BasketballSvg
            width={25}
            height={25}
            color={handleBtnColor('btn5')}
          />
        </Text>
      </div>
    </div>
  );
};

export default Navigation;
