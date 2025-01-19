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

// const makePercent = (value: number) => {
//   return `${Math.round(value * 100)}%`;
// };

// const getAge = (birthDate: string) => {
//   return new Date().getFullYear() - new Date(birthDate).getFullYear();
// };

// const getGameData = ({ attendance, win, totalGame }: MemberGameStats) => {
//   const attendanceRate = makePercent(attendance / totalGame);
//   const winRate = makePercent(win / totalGame);
//   return { attendanceRate, winRate };
// };

// 데이터를 가지고 오는 layer -> 데이터를 가공 -> 상태로 저장해서 사용
export default function Member({ member, setSelectedMemberId }: MemberProps) {
  // const { userInfo, gameData } = member;
  // const age = getAge(userInfo.birthDate);
  // const { attendanceRate, winRate } = getGameData(gameData);
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
            src={member.userInfo.imageUrl}
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
