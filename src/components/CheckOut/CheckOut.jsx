import React from 'react'
import { useCartContext } from "../../context/CartContext";
import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Text,
  Divider,
  Button,
  ButtonGroup,
  Image,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";

const CheckOut = ({createOrder, dataForm, handleOnChange}) => {
    
  return (
    <form id="form" onSubmit={createOrder}>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                name="email"
                value={dataForm.email}
                onChange={handleOnChange}
                placeholder="Ingrese su email"
                border="2px"
                borderColor="black"
              />

              <FormLabel>Reingrese su Email</FormLabel>
              <Input
                type="email"
                name="emailMatch"
                value={dataForm.emailMatch}
                onChange={handleOnChange}
                placeholder="Reingrese su email"
                border="2px"
                borderColor="black"
              />

              <FormLabel>Nombre</FormLabel>
              <Input
                type="text"
                name="name"
                value={dataForm.name}
                onChange={handleOnChange}
                placeholder="Ingrese su nombre"
                border="2px"
                borderColor="black"
              />

              <FormLabel>Telefono</FormLabel>
              <Input
                type="number"
                name="phone"
                value={dataForm.phone}
                onChange={handleOnChange}
                placeholder="Ingrese su telefono"
                border="2px"
                borderColor="black"
              />
            </FormControl>
            <Button
              mt={5}
              type="submit"
              color={"white"}
              width="40"
              backgroundColor={"blue.300"}
            >
              Finalizar
            </Button>
          </form>
  )
}

export default CheckOut