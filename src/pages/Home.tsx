import { Box, Center, Input } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import { Card } from "../components/Card";
import DButton from "../components/DButton";
import { validateLogin } from "../services/login";
import { changeLoginStatus, setLocalStorage } from "../services/storage";

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
        <Box padding="25px">
            <Card>
                <Center>
                    <h1>Faça o login</h1>
                </Center>
                <Input placeholder="Digite seu email" type="email" value={ email } onChange={({ target: { value } }) => setEmail(value)} />
                <Input placeholder="Digite sua senha" type="password" value={ password } onChange={({ target: { value } }) => setPassword(value)} />
                <Center>
                    <DButton
                        onClick={() => login(email, password)}
                    />
                </Center>
            </Card>
        </Box>
    );
}

export default Home;
