'use client';
import { Member } from '@/types/memberType';
import Image from 'next/image';
import MemberGameInfo from './MemberGameInfo';
import MemberPersonalInfo from './MemberPersonalInfo';

interface MemberDetailProps {
  selectedMember: Member;
}

export default function MemberDetail({ selectedMember }: MemberDetailProps) {
  return (
    <div className="flex flex-col gap-4 p-4 bg-white rounded-lg shadow">
      {/* 프로필 헤더 */}
      <div className="flex items-center gap-4">
        {selectedMember.imageUrl && (
          <Image
            src={selectedMember.imageUrl}
            alt={selectedMember.name}
            width={100}
            height={100}
            className="rounded-full"
          />
        )}
        <div>
          <h2 className="text-2xl font-bold">{selectedMember.name}</h2>
          <p className="text-gray-600">#{selectedMember.backNumber}</p>
        </div>
      </div>

      {/* 정보 카드들 */}
      <div className="grid grid-cols-2 gap-4">
        <MemberGameInfo member={selectedMember} />
        <MemberPersonalInfo member={selectedMember} />
      </div>
    </div>
  );
}
