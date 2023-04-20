import React from 'react'
import logo from '../../assets/img/logo.png'
import { Box, Button, Image } from '@chakra-ui/react'
import { CartWidget } from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'
export function NavBar() {
  return (
    <>
      <Box display={"flex"} flexDirection={"row"} justifyContent={"center"} alignItems={"center"}>
        <Box boxSize={"100px"} display={"flex"} flexDirection={"column"} justifyContent={"center"}>
          <Image src={logo} alt='Logo' />
        </Box>
        <Box>
          <NavLink to="/categoria/electronics">
            <Button p="10px" colorScheme='blue'>Mochilas</Button>
          </NavLink>
          <NavLink to="/categoria/tazas">
            <Button p="10px" colorScheme='blue'>Tazas</Button>
          </NavLink>
          <NavLink to="/categoria/botellas">
            <Button p="10px" colorScheme='blue'>Botellas</Button>
          </NavLink>
          <Link to="/">
            <Button p="10px" colorScheme='blue'>HOME</Button>
          </Link>
        </Box>
        <Box display={"flex"}>
          <CartWidget />
        </Box>
      </Box>
    </>

  )
}

