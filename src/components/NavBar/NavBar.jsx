import React from "react";
import {
  Box,
  Button,
  Image,
  Flex,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { HiMenu } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import { CartWidget } from "../CartWidget/CartWidget";

export function NavBar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={4}
    >
      <Flex align="center" mr={5}>
        <NavLink to="/">
          <Image src={logo} alt="Logo" boxSize={"100px"} />
        </NavLink>
      </Flex>

      <Box display={{ base: "block", md: "none" }}>
        <IconButton
          onClick={onToggle}
          icon={<HiMenu />}
          variant="outline"
          colorScheme="white"
          boxSize={"100px"}
        />
      </Box>
      <CartWidget />
      <Box
        display={{ base: isOpen ? "block" : "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignItems="center"
        justifyContent="center"
        flexGrow={1}
      >
        <NavLink to="/categoria/electronics">
          <Button p="10px" colorScheme="blue" mr={2}>
            Electronica
          </Button>
        </NavLink>
        <NavLink to="/categoria/women's clothing">
          <Button p="10px" colorScheme="blue" mr={2}>
            Ropa Femenina
          </Button>
        </NavLink>
        <NavLink to="/categoria/men's clothing">
          <Button p="10px" colorScheme="blue" mr={2}>
            Ropa Masculina
          </Button>
        </NavLink>
        <NavLink to="/categoria/jewelery">
          <Button p="10px" colorScheme="blue" mr={2}>
            Joyeria
          </Button>
        </NavLink>
      </Box>
    </Flex>
  );
}
