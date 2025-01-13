import { AccordionHeader } from '@radix-ui/react-accordion';
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';
import { Member as MemberType } from '@/types/memberType';

interface MemberProps {
  member: MemberType;
}

export default function Member({ member }: MemberProps) {
  return (
    <AccordionItem value={member.id.toString()}>
      <AccordionHeader>
        <AccordionTrigger>{member.name}</AccordionTrigger>
      </AccordionHeader>
      <AccordionContent>
        <div>나이: {member.birthDate}</div>
        <div>키: {member.height}</div>
      </AccordionContent>
    </AccordionItem>
  );
}
