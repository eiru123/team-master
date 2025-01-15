'use client';

import React, { useEffect, useState } from 'react';
import Text from '../ui/Text';
import ScroeBoardSvg from '../ui/svg/ScroeBoardSvg';
import SettingSvg from '../ui/svg/SettingSvg';
import BasketballSvg from '../ui/svg/BasketballSvg';
import { usePathname, useRouter } from 'next/navigation';
import { useDimmed } from '@/store/dimmedStore';
import Setting from '../Setting/Setting';

/** 버튼 타입 (내용 교체시 아래 표시 바람)
 * btn1: ?
 * btn2: ?
 * btn3: 보드판
 * btn4: 설정
 * btn5: 메인메뉴
 */
type BtnType = 'btn1' | 'btn2' | 'btn3' | 'btn4' | 'btn5' | '';

const Navigation = () => {
  const router = useRouter();
  const pathname = usePathname();

  const { dimmed, setDimmed } = useDimmed();
  const [clickBtn, setClickBtn] = useState<BtnType>('');

  const COLORS = {
    active: '#ffcc00',
    inactive: '#E5E7EB',
  };

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
        setDimmed(true);
        break;
      case 'btn5':
        router.push('/team/board');
        break;

      default:
        break;
    }
  };

  const handlePathname = (pathname: string): BtnType => {
    const key = pathname.replaceAll('/team/', '');

    switch (key) {
      case '':
        setClickBtn('btn1');
        return;
      case '':
        setClickBtn('btn2');
        return;
      case 'whiteBoard':
        setClickBtn('btn3');
        return;
      case '':
        setClickBtn('btn4');
        return;
      case 'board':
        setClickBtn('btn5');
        return;
      default:
        return '';
    }
  };

  useEffect(() => {
    if (pathname) {
      handlePathname(pathname);
    }
  }, [pathname]);

  const handleBtnColor = (btnId: BtnType) => {
    return clickBtn === btnId ? COLORS.active : COLORS.inactive;
  };

  const onClickResetMenu = () => {
    setClickBtn('');
  };

  return (
    <>
      <div className="w-screen h-[70px] fixed bottom-0 shadow-lg">
        <div className="overflow-hidden relative w-full h-full bg-[#5E4CCF] grid grid-cols-5">
          <Text
            type="button"
            fz={10}
            onClick={onLinkPage}
            data-btn-id="btn1"
            className="flex flex-col justify-center items-center border-t-[1px]"
            color={handleBtnColor('btn1')}
          >
            <Text type="span" fz={10} color={handleBtnColor('btn1')}>
              버튼1
            </Text>
            {clickBtn === 'btn1' ? (
              <div className="w-3/5 h-[1px] border border-[#ffcc00]"></div>
            ) : null}
          </Text>
          <Text
            type="button"
            fz={10}
            onClick={onLinkPage}
            data-btn-id="btn2"
            className="flex flex-col justify-center items-center border-t-[1px]"
            color={handleBtnColor('btn2')}
          >
            <Text type="span" fz={10} color={handleBtnColor('btn2')}>
              버튼2
            </Text>
            {clickBtn === 'btn2' ? (
              <div className="w-3/5 h-[1px] border border-[#ffcc00]"></div>
            ) : null}
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
            {clickBtn === 'btn3' ? (
              <div className="w-3/5 h-[1px] border border-[#ffcc00]"></div>
            ) : null}
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
        <div
          className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 w-[60px] h-[60px] rounded-full flex justify-center items-center shadow-lg"
          style={{ backgroundColor: handleBtnColor('btn5') }}
        >
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
                color="#5E4CCF"
                className="font-hubballi"
              >
                H
              </Text>
              <Text
                type="span"
                fz={14}
                fw={700}
                color="#5E4CCF"
                className="font-hubballi"
              >
                O
              </Text>
              <Text
                type="span"
                fz={14}
                fw={700}
                color="#5E4CCF"
                className="font-hubballi"
              >
                M
              </Text>
              <Text
                type="span"
                fz={14}
                fw={700}
                color="#5E4CCF"
                className="font-hubballi"
              >
                E
              </Text>
            </span>
            <BasketballSvg width={25} height={25} color="#5E4CCF" />
          </Text>
        </div>
      </div>

      {clickBtn === 'btn4' && dimmed ? (
        <Setting resetBtn={onClickResetMenu} />
      ) : null}
    </>
  );
};

export default Navigation;
