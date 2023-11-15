import { changeLoginStatus, setLoginStatus, getLoginStatus } from "./storage"

const dioBank = {
    login: false
}

describe('storage', () => {
    const mockSetItem = jest.spyOn(Storage.prototype, 'setItem')
    it('Deve retornar o objeto no localStorage com a chave diobank', () => {
        const mockGetItem = jest.spyOn(Storage.prototype, 'getItem')
        getLoginStatus()
        expect(mockGetItem).toHaveBeenCalledWith('diobank')
    })

    it('Deve criar o objeto no localStorage', () => {
        setLoginStatus()
        expect(mockSetItem).toHaveBeenCalledWith('diobank', JSON.stringify(dioBank))
    })

    it('Deve alterar o valor do objeto no localStorage', () => {
        changeLoginStatus(dioBank)
        expect(mockSetItem).toHaveBeenCalledWith('diobank', JSON.stringify(dioBank))
    })
})