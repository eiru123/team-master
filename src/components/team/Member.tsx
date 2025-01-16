import { AccordionHeader } from '@radix-ui/react-accordion';
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';
import { Member as MemberType } from '@/types/memberType';
import Image from 'next/image';

interface MemberProps {
  member: MemberType;
}

const makePercent = (value: number) => {
  return `${Math.round(value * 100)}%`;
};

const makeData = ({ birthDate, attendance, win, totalGame }: MemberType) => {
  const age = new Date().getFullYear() - new Date(birthDate).getFullYear();
  const attendanceRate = makePercent(attendance / totalGame);
  const winRate = makePercent(win / totalGame);
  return { age, attendanceRate, winRate };
};

// 데이터를 가지고 오는 layer -> 데이터를 가공 -> 상태로 저장해서 사용
export default function Member({ member }: MemberProps) {
  const { age, attendanceRate, winRate } = makeData(member);
  return (
    <AccordionItem value={member.id.toString()}>
      <AccordionHeader>
        <AccordionTrigger>{member.name}</AccordionTrigger>
      </AccordionHeader>
      <AccordionContent>
        <div className="flex gap-4">
          <div>
            <Image
              src={member.imageUrl}
              alt={member.name}
              width={100}
              height={100}
            />
          </div>
          <div className="flex w-full justify-between">
            <div className="flex-col w-1/3">
              <div>나이: {age}</div>
              <div>키: {member.height}</div>
              <div>몸무게: {member.weight}</div>
            </div>
            <div className="flex-col w-1/3">
              <div>포지션: {member.position.join(', ')}</div>
              <div>플레이 스타일: {member.playStyle}</div>
              <div>등번호: {member.backNumber}</div>
            </div>
            <div className="flex-col w-1/3">
              <div>출석률: {attendanceRate}</div>
              <div>승률: {winRate}</div>
            </div>
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
