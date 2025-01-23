import { MEMBER_LIST } from '@/mock/memberList';
import Member from './Member';
import { Carousel, CarouselContent } from '../ui/carousel';

interface MemberListProps {
  setSelectedMemberId: (id: string) => void;
}

export default function MemberList({ setSelectedMemberId }: MemberListProps) {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {MEMBER_LIST.map((member) => {
          return (
            <Member
              key={member.id}
              member={member}
              setSelectedMemberId={setSelectedMemberId}
            />
          );
        })}
      </CarouselContent>
    </Carousel>
  );
}
