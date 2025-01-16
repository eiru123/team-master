type Key = 'vote' | 'user' | 'settings';

export const setLocalStorage = (key: Key, value: string): void => {
    localStorage.setItem(key, value);
};

export const getLocalStorage = (key: Key): string | null => {
    return localStorage.getItem(key);
};

export const cleanLocalStorage = (key: Key): void => {
    localStorage.removeItem(key);
};
