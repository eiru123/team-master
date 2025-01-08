"use client"
import { useEffect, useState } from 'react';
import axios from "axios";
import { useRouter } from 'next/navigation';

const REDIRECT_URI = process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI;
const KAKAO_REST_API = process.env.NEXT_PUBLIC_KAKAO_REST_API;
const KAKAO_CLIENT_SECRET = process.env.NEXT_PUBLIC_KAKAO_CLIENT_SECRET;

const RedirectPage =  () => {
    const [kaccount, setKaccount] = useState(null);
    const router = useRouter();
    useEffect(() => {
        const code = new URL(window.location.href).searchParams.get('code');

        const fetchToken = async () => {
            const kakaoAccount = await getKakaoAccount(code);
            setKaccount(kakaoAccount);
            if (kakaoAccount) {
                //체크 로직 (loginUser.email == kakaoAccount.email)체크 후 맞으면 통과
                router.push('/select');
            }
        };
        fetchToken();
    }, []);

    return (
        <div>
          <h1>Redirecting...</h1>
          {kaccount && <p>kaccount nickname: {kaccount.email}</p>}
        </div>
    );
};

export default RedirectPage;

const getKakaoAccount = async (code: string | null) => {
    try {
        const {
            data: { access_token },
        } = await axios({
            url: `https://kauth.kakao.com/oauth/token`,
            method: 'post',
            params: {
                grant_type: 'authorization_code',
                client_id: KAKAO_REST_API,
                redirect_uri: REDIRECT_URI,
                code: code,
                client_secret: KAKAO_CLIENT_SECRET,
            },
        });
        if (access_token) {
            const {
                data: {kakao_account}
            } =  await axios
            .get(`https://kapi.kakao.com/v2/user/me`, {
                headers: {
                    Authorization: `Bearer ${access_token},`
                },
            })
            return kakao_account;
        }
    } catch (e) {
        console.error(e);
    }
};
