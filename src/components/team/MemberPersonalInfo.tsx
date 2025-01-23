import { Member, POSITION_LIST } from '@/types/memberType';

interface MemberPersonalInfoProps {
  member: Member;
}

export default function MemberPersonalInfo({
  member,
}: MemberPersonalInfoProps) {
  return (
    <div className="p-4 bg-gray-50 rounded-lg">
      <h3 className="text-lg font-bold mb-4">개인 정보</h3>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span>포지션</span>
          <span>
            {member.position?.map((pos) => POSITION_LIST[pos]).join(', ')}
          </span>
        </div>
        <div className="flex justify-between">
          <span>플레이 스타일</span>
          <span>{member.playStyle}</span>
        </div>
        {member.height && (
          <div className="flex justify-between">
            <span>키</span>
            <span>{member.height}cm</span>
          </div>
        )}
        {member.weight && (
          <div className="flex justify-between">
            <span>몸무게</span>
            <span>{member.weight}kg</span>
          </div>
        )}
        {member.birthDate && (
          <div className="flex justify-between">
            <span>생년월일</span>
            <span>{member.birthDate}</span>
          </div>
        )}
      </div>
    </div>
  );
}
