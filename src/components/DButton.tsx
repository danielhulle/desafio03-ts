import { Button } from "@chakra-ui/react"
import { MouseEventHandler } from "react"

interface IDButton {
    onClick: MouseEventHandler
}

export const DButton = ({ onClick }: IDButton) => {
    return(
        <Button
          onClick={onClick}
          backgroundColor='#2ECC71'
          border='none'
          _hover={{ bg: '#27AE60', color: 'white'}}
          size="sm"
          width="100%"
          marginTop="20px"
        >
          Entrar
        </Button>
    )
}

export default DButton
