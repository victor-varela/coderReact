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
  const categories = [

    { id: "1", name: "Electronica", description: "electronics" },
    { id: "2", name: "Ropa Masculina", description: "men's clothing" },
    { id: "3", name: "Ropa Femenina", description: "women's clothing" },
    { id: "4", name: "Joyeria", description: "jewelery" },

     ];
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
      <Flex as="nav" align="center" justify="right" wrap="wrap" padding={4}>
        <Box display={{ base: "block", md: "none" }}>
          <IconButton
            onClick={onToggle}
            icon={<HiMenu size={"70px"} />}
            variant="outline"
            colorScheme="white"
          />
        </Box>
        <CartWidget />
      </Flex>
      <Box
        display={{ base: isOpen ? "block" : "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignItems="center"
        justifyContent="center"
        flexGrow={1}
      >
        {categories.map((category) => (
          <NavLink key={categories.id} to={`categoria/${category.description}`}>
            <Button p="10px" colorScheme="blue" mr={2}>
              {category.name}
            </Button>
          </NavLink>
        ))}
      </Box>
    </Flex>
  );
}
