'use client';
import MemberDetail from '@/components/team/MemberDetail';
import MemberList from '@/components/team/MemberList';
import Container from '@/components/ui/Container';
import { MEMBER_LIST } from '@/mock/memberList';
import { useState } from 'react';

export default function MemberListPage() {
  const [selectedMemberId, setSelectedMemberId] = useState<string>('');
  const selectedMember = MEMBER_LIST.find(
    (member) => member.id === selectedMemberId,
  );
  return (
    <Container display="flex" className="h-[calc(100%-70px)] flex-col gap-4">
      <div className="w-full h-10 flex justify-center items-center bg-gray-200">
        <h1>팀 멤버 목록</h1>
      </div>
      <div className="w-full flex-1 flex flex-col gap-4 overflow-auto">
        <MemberList setSelectedMemberId={setSelectedMemberId} />
        {selectedMember && <MemberDetail selectedMember={selectedMember} />}
      </div>
    </Container>
  );
}
