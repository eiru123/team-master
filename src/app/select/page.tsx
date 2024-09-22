'use client';
import Catchphrase from '@/components/CatchPhrase/CatchPhrase';
import Container from '@/components/ui/Container';
import Text from '@/components/ui/Text';
import CommonBtn from '@/components/ui/button/_Button';
import { useRouter } from 'next/navigation';

const SelectTeamPage = () => {
  // 반복중
  const router = useRouter();
  const onClickLink = (url: string) => {
    router.push(url);
  };

  return (
    <Container display="flex">
      <Catchphrase />

      <CommonBtn
        classname="flex items-center justify-between w-3/4 h-fit text-white"
        onClick={() => onClickLink(`/team?id=SIXERS`)}
        BgColor="red"
      >
        {/* 팀 로고 */}
        <div className="w-6 h-6 rounded-full bg-purple-500"></div>

        {/* 팀 이름 */}
        <Text type="p" classname="ml-2 mr-2">
          AM SIXERS
        </Text>

        {/* 이용자 등급 */}
        <Text type="p" classname="">
          admin
        </Text>
      </CommonBtn>

      <CommonBtn
        classname="flex items-center justify-between w-3/4 h-fit text-white"
        onClick={() => onClickLink(`/team?id=EarlyBird`)}
        BgColor="orange"
      >
        {/* 팀 로고 */}
        <div className="w-6 h-6 rounded-full bg-purple-500"></div>

        {/* 팀 이름 */}
        <Text type="p" classname="ml-2 mr-2">
          EarlyBird
        </Text>

        {/* 이용자 등급 */}
        <Text type="p" classname="">
          user
        </Text>
      </CommonBtn>
    </Container>
  );
};

export default SelectTeamPage;
