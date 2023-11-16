import { validateLogin } from "./login"

describe('login', () => {

    const mockEmail = 'teste@dio.bank'
    const mockPassword = '123456'
    it('Deve exibir um alert com boas vindas caso o email seja válido', async() => {
        const response = await validateLogin(mockEmail, mockPassword)
        expect(response).toBeTruthy()
    })

    it('Deve exibir um erro caso o email seja inválido', async() => {
        const response = await validateLogin('email@invalido.com', '123456')
        expect(response).toBeFalsy()
    })
})