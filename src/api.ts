const conta = {
    email: 'teste@dio.bank',
    password: '123456',
    name: 'Usuário',
    balance: 2000.00,
    id: '1'
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)
})
