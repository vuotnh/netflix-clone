import { DEFAULT_LANGUAGE, SUPPORT_LANGUAGE } from './constants';
import { storage, LocalStorage } from './localStorage';

const BUFFER_TIME = 60 * 1000; // 60s

export const enum AUTH_SERVICE_KEY {
    ACCESS_TOKEN = 'ACCESS_TOKEN',
    REFRESH_TOKEN = 'REFRESH_TOKEN',
    LANGUAGUE = 'LANGUAGE',
    ACCESS_TOKEN_EXPIRED_AT = 'ACCESS_TOKEN_EXPIRED_AT',
    REFRESH_TOKEN_EXPIRE_AT = 'REFRESH_TOKEN_EXPIRE_AT',
}

class LocalStorageAuthService {
    setAccessToken(value: string): void {
        storage.setLocalStorage(AUTH_SERVICE_KEY.ACCESS_TOKEN, value);
    }

    setRefreshToken(value: string): void {
        storage.setLocalStorage(AUTH_SERVICE_KEY.REFRESH_TOKEN, value);
    }

    setLanguage(value: SUPPORT_LANGUAGE): void {
        storage.setLocalStorage(AUTH_SERVICE_KEY.LANGUAGUE, value);
    }

    getAccessToken(): string {
        return storage.getLocalStorage(AUTH_SERVICE_KEY.ACCESS_TOKEN);
    }

    getRefreshToken(): string {
        return storage.getLocalStorage(AUTH_SERVICE_KEY.REFRESH_TOKEN);
    }

    getLanguage(): SUPPORT_LANGUAGE {
        return (storage.getLocalStorage(AUTH_SERVICE_KEY.LANGUAGUE) ||
            DEFAULT_LANGUAGE) as SUPPORT_LANGUAGE;
    }

    resetAccessToken(): void {
        storage.setLocalStorage(AUTH_SERVICE_KEY.ACCESS_TOKEN, '');
    }

    resetAccessTokenExpriredAt(): void {
        storage.setLocalStorage(AUTH_SERVICE_KEY.ACCESS_TOKEN_EXPIRED_AT, '');
    }

    resetRefreshTokenExpriredAt(): void {
        storage.setLocalStorage(AUTH_SERVICE_KEY.REFRESH_TOKEN_EXPIRE_AT, '');
    }

    resetRefreshToken(): void {
        storage.setLocalStorage(AUTH_SERVICE_KEY.REFRESH_TOKEN, '');
    }

    setAccessTokenExpiredAt(expiredIn: number): void {
        const expiredAt = new Date().getTime() + expiredIn * 1000 - BUFFER_TIME;
        storage.setLocalStorage(
            AUTH_SERVICE_KEY.ACCESS_TOKEN_EXPIRED_AT,
            String(expiredAt),
        );
    }

    setRefreshTokenExpiredAt(expiredIn: number): void {
        const expiredAt = new Date().getTime() + expiredIn * 1000 - BUFFER_TIME;
        storage.setLocalStorage(
            AUTH_SERVICE_KEY.REFRESH_TOKEN_EXPIRE_AT,
            String(expiredAt),
        );
    }

    getAccessTokenExpiredAt(): number {
        return +storage.getLocalStorage(AUTH_SERVICE_KEY.ACCESS_TOKEN_EXPIRED_AT);
    }

    getRefreshTokenExpiredAt(): number {
        return +storage.getLocalStorage(AUTH_SERVICE_KEY.REFRESH_TOKEN_EXPIRE_AT);
    }

    resetAll(): void {
        this.resetAccessToken();
        this.resetRefreshToken();
        this.resetAccessTokenExpriredAt();
        this.resetRefreshTokenExpriredAt();
    }
}

const localStorageAuthService = new LocalStorageAuthService();
export default localStorageAuthService;