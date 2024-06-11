import Cookies from 'js-cookie';

// Define a type for the token object
interface Tokens {
    accessToken: string;
    refreshToken: string;
}

export const getAccessTokenFromCookies = (): string | undefined => {
    return Cookies.get('accessToken');
};

export const getRefreshTokenFromCookies = (): string | undefined => {
    return Cookies.get('refreshToken');
};

export const setTokensInCookies = ({ accessToken, refreshToken }: Tokens): void => {
    const options = {
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'Strict' as const, // TypeScript requires 'as const' for literal type
    };
    Cookies.set('accessToken', accessToken, options);
    Cookies.set('refreshToken', refreshToken, options);
};

export const removeTokensFromCookies = (): void => {
    Cookies.remove('accessToken');
    Cookies.remove('refreshToken');
};
