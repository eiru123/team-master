import React from 'react';
import PlayIcon from './icon/PlayIcon';
import TeamIcon from './icon/TeamIcon';
import HomeIcon from './icon/HomeIcon';
import InfoIcon from './icon/InfoIcon';
import SettingIcon from './icon/SettingIcon';

const Gnb = () => {
  return (
    <div className="w-screen h-20 grid grid-cols-5 gap-4 fixed bottom-0 p-4 bg-[#121721]">
      <button className="text-[#ECEFF4] flex flex-col items-center justify-center">
        <PlayIcon />
        <p className="">경기</p>
      </button>
      <button className="text-[#ECEFF4] flex flex-col items-center justify-center">
        <TeamIcon />
        <p className="">팀 정보</p>
      </button>
      <button className="text-[#ECEFF4] flex flex-col items-center justify-center">
        <HomeIcon />
        <p className="">홈</p>
      </button>
      <button className="text-[#ECEFF4] flex flex-col items-center justify-center">
        <InfoIcon />
        <p className="">내 정보</p>
      </button>
      <button className="text-[#ECEFF4] flex flex-col items-center justify-center">
        <SettingIcon />
        <p className="">설정</p>
      </button>
    </div>
  );
};

export default Gnb;
