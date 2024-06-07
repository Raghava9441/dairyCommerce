import { LocalStorage } from '../../utils/localStorage';

const isAccessTokenExpired = () => {
    const CurrentUser = LocalStorage.get('current-user');
    const token = CurrentUser.accessToken;

    // console.log("currentAccessToken:", currentAccessToken)
    return !!token;
};

const getToken = () => {
    const CurrentUser = LocalStorage.get('current-user');
    const accessToken = CurrentUser.accessToken;
    console.log('accessToken:', accessToken);
    return accessToken;
};

export const AuthService = {
    isAccessTokenExpired,
    getToken,
};
