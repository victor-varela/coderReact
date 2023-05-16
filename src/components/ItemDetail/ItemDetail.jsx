import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Text,
  Divider,
  Button,
  ButtonGroup,
  Image,
  Box,
} from "@chakra-ui/react";
import { Counter } from "../Counter/Counter";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

export const ItemDetail = ({ item }) => {
  const [isCant, setIsCant] = useState(false);
  const { addToCart } = useCartContext();
  const onAdd = (cantidad) => {
    // { ...item, cantidad }
    console.log("agregar")
    addToCart(item, cantidad);
    setIsCant(true);
  };
  return (
    <>
      {!isCant ? (
        <Card maxW="sm" m="auto" align="center">
          <CardBody>
            <Image src={item.image} alt="" borderRadius="lg" />

            <Stack mt="6" spacing="3">
              <Heading size="md">{item.title}</Heading>
              <Text>{item.description}</Text>
              <Text color="blue.600" fontSize="2xl">
                ${item.price}
              </Text>
              <Text color="blue.600" fontSize="2xl">
                Stock{item.count}
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <Counter onAdd={onAdd} stock={item.stock} />
            </ButtonGroup>
          </CardFooter>
        </Card>
      ) : (
        <>
          <Card maxW="sm" m="auto" align="center">
            <CardBody>
              <Image src={item.image} alt="" borderRadius="lg" />

              <Stack mt="6" spacing="3">
                <Heading size="md">{item.title}</Heading>
                <Text>{item.description}</Text>
                <Text color="blue.600" fontSize="2xl">
                  ${item.price}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Link to="/cart">
                  <Button>Terminar Compra</Button>
                </Link>
                <Link to="/">
                  <Button>Seguir Comprando</Button>
                </Link>
              </ButtonGroup>
            </CardFooter>
          </Card>
        </>
      )}
    </>
  );
};
