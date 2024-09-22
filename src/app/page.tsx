'use client';

import Catchphrase from '@/components/CatchPhrase/CatchPhrase';
import Container from '@/components/ui/Container';
import Text from '@/components/ui/Text';
import CommonBtn from '@/components/ui/button/_Button';
import { useRouter } from 'next/navigation';

const SelectTeamPage = () => {
  const kakaoLoginURL =
    'https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=' +
    process.env.NEXT_PUBLIC_KAKAO_REST_API +
    '&redirect_uri=' +
    process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI;
  const router = useRouter();
  const onClickLink = (url: string) => {
    router.push(url);
  };

  return (
    <Container display="flex">
      <Catchphrase />
      <CommonBtn
        BgColor="kakao"
        onClick={() => onClickLink(kakaoLoginURL)}
        classname="text-slate-900"
      >
        <Text type="p">카카오 로그인</Text>
      </CommonBtn>
    </Container>
  );
};

export default SelectTeamPage;
