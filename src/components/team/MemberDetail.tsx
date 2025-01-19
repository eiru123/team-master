import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Member } from '@/types/memberType';
import Image from 'next/image';

interface MemberDetailProps {
  selectedMember: Member | null;
}

export default function MemberDetail({ selectedMember }: MemberDetailProps) {
  console.log(selectedMember);
  return (
    <Card className="w-full flex-1">
      <CardHeader>
        <CardTitle>{selectedMember?.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center">
        <Image
          src={selectedMember?.userInfo.imageUrl}
          alt={selectedMember?.name}
          width={100}
          height={100}
          className="w-2/3 object-cover"
        />
      </CardContent>
    </Card>
  );
}
