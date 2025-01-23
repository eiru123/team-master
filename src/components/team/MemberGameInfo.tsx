import { Member } from '@/types/memberType';

interface MemberGameInfoProps {
  member: Member;
}

export default function MemberGameInfo({ member }: MemberGameInfoProps) {
  const winRate =
    member.gameData?.win && member.gameData?.totalGame
      ? ((member.gameData.win / member.gameData.totalGame) * 100).toFixed(1)
      : '0';

  const attendanceRate =
    member.gameData?.attendance && member.gameData?.totalGame
      ? (
          (member.gameData.attendance / member.gameData.totalGame) *
          100
        ).toFixed(1)
      : '0';

  return (
    <div className="p-4 bg-gray-50 rounded-lg">
      <h3 className="text-lg font-bold mb-4">게임 정보</h3>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span>승률</span>
          <span>{winRate}%</span>
        </div>
        <div className="flex justify-between">
          <span>출석률</span>
          <span>{attendanceRate}%</span>
        </div>
        <div className="flex justify-between">
          <span>총 게임</span>
          <span>{member.gameData?.totalGame || 0}게임</span>
        </div>
        <div className="flex justify-between">
          <span>승리</span>
          <span>{member.gameData?.win || 0}승</span>
        </div>
      </div>
    </div>
  );
}
