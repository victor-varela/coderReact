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
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { Link } from "react-router-dom";
import CheckOut from "../CheckOut/CheckOut";
const Cart = () => {
  const { cartList, vaciarCarrito, eliminar } = useCartContext();
  const [isCartEmpty, setIsCartEmpty] = useState(true);
  useEffect(() => {
    cartList.length > 0 ? setIsCartEmpty(false) : setIsCartEmpty(true);
  }, [cartList]);
  const [dataForm, setDataForm] = useState({
    name: "",
    emailMatch: "",
    email: "",
    phone: "",
  });
  const [idOrder, setIdOrder] = useState("");
  const handleOnChange = (evt) => {
    console.log("nombre del input", evt.target.name);
    console.log("valor del input", evt.target.value);
    setDataForm({
      ...dataForm,
      [evt.target.name]: evt.target.value,
    });
  };

  const calculatePrice = cartList.reduce((acc, item) => {
    return acc + item.price * item.cantidad;
  }, 0);
  const totalPrice = calculatePrice;

  const validateMail = (dataForm) => {
    let isValid = false;
    if (dataForm.email === dataForm.emailMatch) {
      isValid = true;
    } else {
      alert("el mail debe ser igual");
    }
    return isValid;
  };
  const generarOrden = (evt) => {
    evt.preventDefault();
    const isValid = validateMail(dataForm);
    if (isValid) {
      console.log("data form", dataForm);
      const { emailMatch, ...newDataForm } = dataForm;
      console.log(cartList);
      const order = {};
      order.buyer = { newDataForm };
      order.items = cartList.map(({ id, title, price, cantidad }) => ({
        id,
        title,
        price,
        cantidad,
      }));
      order.total = totalPrice;
      const dbFirestore = getFirestore();
      const ordersCollection = collection(dbFirestore, "orders");
      addDoc(ordersCollection, order)
        .then((resp) => setIdOrder(resp.id))
        .catch((err) => console.log(err));
      setDataForm({ email: "", emailMatch: "", name: "", phone: "" });
    
        vaciarCarrito()

        
      
    }
  };

  console.log(eliminar);
  console.log(cartList);
  return (
    <>
      {idOrder.length !== 0 && <h3>Compra exitosa Id de Compra:{idOrder}</h3>}
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
                  <Button
                    onClick={() => eliminar(item.id)}
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
          <Button onClick={vaciarCarrito} variant="solid" colorScheme="blue">
            Vaciar Carrito
          </Button>
          <form id="form" onSubmit={generarOrden}>
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
        </>
      )}
    </>
  );
};

export default Cart;
