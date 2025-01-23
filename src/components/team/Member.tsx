import { Member as MemberType } from '@/types/memberType';
import { CarouselItem } from '../ui/carousel';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';
import Image from 'next/image';

interface MemberProps {
  member: MemberType;
  setSelectedMemberId: (id: string) => void;
}

export default function Member({ member, setSelectedMemberId }: MemberProps) {
  return (
    <CarouselItem
      className="basis-1/3"
      onClick={() => setSelectedMemberId(member.id)}
    >
      <Card className="w-full h-full flex flex-col items-center justify-center">
        <CardHeader className="flex flex-col items-center justify-center">
          <CardTitle>{member.name}</CardTitle>
          <CardDescription>{member.backNumber}</CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            src={member.imageUrl}
            alt={member.name}
            width={100}
            height={100}
            className="w-full h-full object-cover"
          />
        </CardContent>
      </Card>
    </CarouselItem>
  );
}
