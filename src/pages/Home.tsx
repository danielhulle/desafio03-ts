import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AppContext } from "../components/AppContext";
import { Card } from "../components/Card";
import DButton from "../components/DButton";

import { validateLogin } from "../services/login";
import { changeLoginStatus, setLocalStorage } from "../services/storage";

import { Box, Flex, Heading, Input, Text } from "@chakra-ui/react";

const Home = () => {
    const [ email, setEmail ] = useState<string>('')
    const [ password, setPassword ] = useState<string>('')
    const { setIsLoggedIn } = useContext(AppContext)
    const navigate = useNavigate()

    const login = async (email: string, password: string) => {
        const loggedIn = await validateLogin(email, password)

        if(!loggedIn){
            return alert('Email ou senha inválidos')
        }

        const loginData = {
            email,
            password,
        }

        setIsLoggedIn(true)
        changeLoginStatus({ login: true })
        setLocalStorage('loginData', JSON.stringify(loginData))
        navigate('/conta/1')
    }
  
    return (
        <Flex minHeight='92vh' align='center' justify='center'>
            <Box width='500px'>
                <Card>
                        <Heading as='h2' size='lg' textAlign='center' marginBottom='50px' color='FFD700' >Faça o login</Heading>
                        <Input 
                            borderColor='#f8f8ff' 
                            marginBottom='10px' 
                            _placeholder={{ color: '#BDC3C7' }}
                            backgroundColor='ECF0F1'
                            placeholder="Digite seu email" 
                            type="email" 
                            value={ email } 
                            onChange={({ target: { value } }) => setEmail(value)} 
                        />
                        <Input 
                            borderColor='#f8f8ff' 
                            _placeholder={{ color: '#BDC3C7' }}
                            backgroundColor='ECF0F1'
                            placeholder="Digite sua senha" 
                            type="password" 
                            value={ password } 
                            onChange={({ target: { value } }) => setPassword(value)} 
                        />
                        <DButton
                            onClick={() => login(email, password)}
                        />
                </Card>
                <Text marginTop='20px'>Dados para teste:</Text>
                <Text>email: teste@dio.bank</Text>
                <Text>senha: 123456</Text>
            </Box>
        </Flex>
    );
}

export default Home;
