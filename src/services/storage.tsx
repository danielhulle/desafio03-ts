interface IDioBank {
    login: boolean;
}

const dioBank = {
    login: false
}

export const getFromLocalStorage = (key: string): string | null => {
    return localStorage.getItem(key)
}

export const setLocalStorage = (key: string, data: string): void => {
    localStorage.setItem(key, data)
}

export const getLoginStatus = (): string | null  => {
    return localStorage.getItem('diobank')
}

export const setLoginStatus = (): void => {
    localStorage.setItem('diobank', JSON.stringify(dioBank))
}

export const changeLoginStatus = (dioBank: IDioBank): void => {
    localStorage.setItem('diobank', JSON.stringify(dioBank))
}