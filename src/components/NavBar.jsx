import React from 'react'
import logo from '../assets/img/logo.png'
import { Box, Button, ButtonGroup, Image } from '@chakra-ui/react'
import { CartWidget } from './CartWidget'

export function NavBar() {
  return (
    <>
      <Box display="flex" flexDirection="column">
        <Image width={"95vw"} height={"20vh"} objectFit={"cover"} src={logo} alt='Logo' />

        <Box m="10px">
          <Button p="10px" colorScheme='blue'>Hogar</Button>
          <Button p="10px" colorScheme='blue'>Tecnologia</Button>
          <Button p="10px" colorScheme='blue'>Mochilas y Bolsos</Button>
          <Button p="10px" colorScheme='blue'>Juguetes</Button>
        </Box>
      </Box>
      <CartWidget />
    </>

  )
}

