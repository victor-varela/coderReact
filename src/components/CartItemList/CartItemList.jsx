import React from 'react'
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
  import { useCartContext } from '../../context/CartContext';

const CartItemList = ({totalPrice})  => {
    const {cartList, remove,totalQuantity, emptyCart }= useCartContext()
  return (
    <>
    {cartList.map((item) => (
        <Card maxW="sm" m="auto" mb={100} align="center" key={item.id}>
          <CardBody>
            <Image src={item.image} alt="" borderRadius="lg" />

            <Stack mt="6" spacing="3">
              <Heading size="md">{item.title}</Heading>

              <Text color="blue.600" fontSize="2xl">
                ${item.price * item.quantity}
              </Text>

              <Text color="blue.600" fontSize="2xl">
                Cantidad:{item.quantity}
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <Button
                onClick={() => remove(item.id)}
                variant="solid"
                colorScheme="blue"
              >
                Eliminar
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      ))}
            <Text color="blue.600" fontSize="2xl">
                Precio Total:{totalPrice}
            </Text>
            <Text color="blue.600" fontSize="2xl">
                Cantidad Total de Articulos:{totalQuantity()}
            </Text>
            <Button onClick={emptyCart} variant="solid" colorScheme="blue">
                Vaciar Carrito
            </Button>  
  </>)
}

export default CartItemList