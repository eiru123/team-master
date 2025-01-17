// import React, { useState } from 'react';
import Text from '../ui/Text';
import Image from 'next/image';
import { useDimmed } from '@/store/dimmedStore';
import { useRouter } from 'next/navigation';

/**
 * [공통] menu1: 내정보
 * menu2:
 * menu3:
 * [관리자] menu4: 투표 설정 페이지
 * [공통] close: 닫기
 */
type Props = {
  resetBtn: () => void;
};
type BtnProps = 'menu1' | 'menu2' | 'menu3' | 'menu4' | 'close' | '';

const Setting = ({ resetBtn }: Props) => {
  const router = useRouter();
  const { setDimmed } = useDimmed();
  //   const [btnId, setBtnId] = useState<BtnProps>('');
  const onClickMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    const menuId = e.currentTarget.dataset.id as BtnProps;
    // setBtnId(menuId);
    switch (menuId) {
      case 'menu1':
        router.push('/team/settings/myInfo');
        setDimmed(false);
        break;
      case 'menu2':
        setDimmed(false);
        break;
      case 'menu3':
        setDimmed(false);
        break;
      case 'menu4':
        router.push('/team/settings/vote');
        setDimmed(false);
        break;

      default:
        setDimmed(false);
        resetBtn();
        break;
    }
  };

  return (
    <div className="flex flex-col justify-center items-center gap-2 w-[60px] p-2 z-50 fixed bottom-[5px] right-2">
      <Text
        type="button"
        data-id="menu1"
        onClick={onClickMenu}
        fz={10}
        className="w-[50px] h-[50px] bg-white rounded-full relative active:bg-red-200 flex flex-col justify-center items-center"
      >
        <Image
          src={'/img/icon/icon-myInfo.svg'}
          alt="내 정보 페이지"
          width={25}
          height={25}
        />
        <Text type="span" fz={10} fw={700}>
          내 정보
        </Text>
      </Text>

      <Text
        type="button"
        data-id="menu2"
        onClick={onClickMenu}
        fz={10}
        className="w-[50px] h-[50px] bg-white rounded-full p-3 relative active:bg-red-200"
      >
        메뉴2
      </Text>

      <Text
        type="button"
        data-id="menu3"
        onClick={onClickMenu}
        fz={10}
        className="w-[50px] h-[50px] bg-white rounded-full p-3 relative active:bg-red-200"
      >
        메뉴3
      </Text>

      <Text
        type="button"
        data-id="menu4"
        onClick={onClickMenu}
        fz={10}
        className="w-[50px] h-[50px] bg-white rounded-full relative active:bg-red-200 flex flex-col justify-center items-center"
      >
        <Image
          src={'/img/icon/icon-vote.svg'}
          alt="투표설정"
          width={25}
          height={25}
        />
        <Text type="span" fz={10} fw={700}>
          투표설정
        </Text>
      </Text>

      <Text
        type="button"
        data-id="close"
        onClick={onClickMenu}
        fz={10}
        className="w-[50px] h-[50px] bg-white rounded-full p-3 relative active:bg-red-200"
      >
        <Image
          src={'/img/icon/icon-close.svg'}
          alt="닫기버튼"
          width={50}
          height={50}
        />
      </Text>
    </div>
  );
};

export default Setting;
