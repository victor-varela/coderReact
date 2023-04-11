import React from 'react'
import logo from '../../assets/img/logo.png'
import { Box, Button, Image } from '@chakra-ui/react'
import { CartWidget } from '../CartWidget/CartWidget'
export function NavBar() {
  return (
    <>
      <Box display="flex" flexDirection="row" justifyContent={"center"} alignItems={"center"}>
        <Box boxSize={"100px"} display="flex" flexDirection={"column"} justifyContent={"center"}>
          <Image src={logo} alt='Logo' />
        </Box>
        <Box>
          <Button p="10px" colorScheme='blue'>Mochilas</Button>
          <Button p="10px" colorScheme='blue'>Tazas</Button>
          <Button p="10px" colorScheme='blue'>Botellas</Button>
        </Box>
        <Box display={"flex"}>
          <CartWidget />
        </Box>
      </Box>
    </>

  )
}

