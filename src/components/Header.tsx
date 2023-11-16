import { Box, Button, Center, Flex, Spacer, Text } from '@chakra-ui/react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { changeLoginStatus } from '../services/storage'
import { AppContext } from './AppContext'

export const Header  = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext)
  const navigate = useNavigate()

  const logout = () => {
    changeLoginStatus({ login: false})
    setIsLoggedIn(false)
    navigate('/')
  }

  return(
    <Flex backgroundColor='#2C3E50' color='#ECF0F1' padding='10px' minHeight='8vh' alignItems='center'>
      <Box>
        <Center>
          <Text fontSize='3xl' fontWeight='700'>Dio Bank</Text>
        </Center>
      </Box>
      {
        isLoggedIn && (
          <>
            <Spacer />
            <Button
              padding='5px'
              width='120px'
              height='30px'
              backgroundColor='#2ECC71'
              color='white'
              _hover={{ bg: '#27AE60', color: 'white'}}
              onClick={() => logout()}
            >
              Sair
            </Button>
          </>
        )
      }
    </Flex>
    
  )
}
