import MemberList from '@/components/team/MemberList';

export default function MemberListPage() {
  return (
    <>
      <div className="flex justify-center items-center h-10 bg-gray-200">
        <h1>팀 멤버 목록</h1>
      </div>
      <MemberList />
    </>
  );
}
