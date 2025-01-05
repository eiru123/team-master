'use client';

import TopBar from '@/components/TopGnb';
import React from 'react';
/**
 * 필요한 데이터
 *
 */
const WhiteBoard = () => {
  return (
    <>
      <TopBar depth={1} title="화이트보드" />
      <div className="w-screen h-screen bg-gray-50 border-8 border-gray-900 rounded-lg p-4 relative">
        <div className=" w-4 h-4 bg-slate-500 absolute top-0 left-0"></div>
        <div className=" w-4 h-4 bg-slate-500 absolute top-0 right-0"></div>
        <div className=" w-4 h-4 bg-slate-500 absolute bottom-0 left-0"></div>
        <div className=" w-4 h-4 bg-slate-500 absolute bottom-0 right-0"></div>

        {/* 32px */}
        <p className="font-moneygraphy text-[32px]">경기 설정</p>

        <div className="">
          <div>
            <p className="font-moneygraphy ">1경기</p>
          </div>

          <div>
            <p className="font-moneygraphy ">2경기</p>
          </div>

          <div>
            <p className="font-moneygraphy ">3경기</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhiteBoard;
