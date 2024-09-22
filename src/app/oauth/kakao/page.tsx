"use client"
import { useEffect, useState } from 'react';
import axios from "axios";
import { useRouter } from 'next/navigation';

const REDIRECT_URI = process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI;
const KAKAO_REST_API = process.env.NEXT_PUBLIC_KAKAO_REST_API;
const KAKAO_CLIENT_SECRET = process.env.NEXT_PUBLIC_KAKAO_CLIENT_SECRET;

const RedirectPage = () => {
    const [token, setToken] = useState(null);
    const router = useRouter();
    useEffect(() => {
        const code = new URL(window.location.href).searchParams.get('code');

        const fetchToken = async () => {
            const token = await getToken(code);
            setToken(token);
            if (token) {
                router.push('/select');
            }
        };

        fetchToken();
    }, []);

    return (
        <div>
          <h1>Redirecting...</h1>
          {token && <p>Token: {token}</p>}
        </div>
    );
};

export default RedirectPage;

const getToken = async (code: string | null) => {
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
        return access_token;
    } catch (e) {
        console.error(e);
    }
};
