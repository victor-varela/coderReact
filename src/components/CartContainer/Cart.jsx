import { useEffect, useState } from "react";
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
} from "@chakra-ui/react";
const Cart = () => {
  const { cartList, vaciarCarrito, eliminar } = useCartContext();
  const [isCartEmpty, setIsCartEmpty] = useState(true);
  useEffect(() => {
    cartList.length>0 ?
    setIsCartEmpty(false): setIsCartEmpty(true)

  }, [cartList]);
  
  const calculatePrice = cartList.reduce((acc, item)=>{
   return acc + (item.price * item.cantidad) 

  }, 0)
  const totalPrice = calculatePrice
                                              
  console.log(eliminar)
  console.log(cartList)
  return (
    <>
      {isCartEmpty ? (
        <h1>Nada por aqui</h1>
      ) : (
        <>
          {cartList.map((item) => (
            <Card maxW="sm" m="auto" mb={100} align="center" key={item.id}>
              <CardBody>
                <Image src={item.image} alt="" borderRadius="lg" />

                <Stack mt="6" spacing="3">
                  <Heading size="md">{item.title}</Heading>

                  <Text color="blue.600" fontSize="2xl">
                    ${item.price * item.cantidad}
                  </Text>

                  <Text color="blue.600" fontSize="2xl">
                    Cantidad:{item.cantidad}
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button variant="solid" colorScheme="blue">
                    Comprar
                  </Button>
                  <Button onClick={()=>eliminar(item.id)} variant="solid" colorScheme="blue">
                    Eliminar
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
          ))}

          <Text color="blue.600" fontSize="2xl">
            Precio Total:{totalPrice}
          </Text>
          <Button onClick={vaciarCarrito} variant="solid" colorScheme="blue">
            Vaciar Carrito
          </Button>
        </>
      )}
    </>
  );
};

export default Cart;
