import { LocalStorage } from '../utils/localStorage';

export const useAuthHook = () => {
    const isLogged = () => LocalStorage.get('current-user') !== null;

    return { isLogged };
};

export type AuthContext = ReturnType<typeof useAuthHook>;
