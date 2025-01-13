import { Accordion } from '../ui/accordion';
import { MEMBER_LIST } from '@/mock/memberList';
import Member from './Member';

export default function MemberList() {
  return (
    <Accordion type="multiple" className="w-full">
      {MEMBER_LIST.map((member) => {
        return <Member key={member.id} member={member} />;
      })}
    </Accordion>
  );
}
