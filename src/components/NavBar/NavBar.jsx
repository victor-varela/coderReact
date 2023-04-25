import React from 'react'
import logo from '../../assets/img/logo.png'
import { Box, Button, Image } from '@chakra-ui/react'
import { CartWidget } from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'
export function NavBar() {
  return (
    <>
      <Box display={"flex"} flexDirection={"row"} justifyContent={"center"} alignItems={"center"}>
        <Link to="/">
          <Box boxSize={"100px"} display={"flex"} flexDirection={"column"} justifyContent={"center"}>
            <Image src={logo} alt='Logo' />
          </Box>
        </Link>
        <Box>
          <NavLink to="/categoria/electronics">
            <Button p="10px" colorScheme='blue'>Electronica</Button>
          </NavLink>
          <NavLink to="/categoria/women's clothing">
            <Button p="10px" colorScheme='blue'>Ropa Femenina</Button>
          </NavLink>
          <NavLink to="/categoria/men's clothing">
            <Button p="10px" colorScheme='blue'>Ropa Masculina</Button>
          </NavLink>
          <NavLink to="/categoria/jewelery">
            <Button p="10px" colorScheme='blue'>Joyeria</Button>
          </NavLink>
        </Box>
        <Box display={"flex"}>
          <CartWidget />
        </Box>
      </Box>
    </>

  )
}

