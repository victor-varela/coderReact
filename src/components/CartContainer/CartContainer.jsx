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
import "../../styles/styles.css";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { Link } from "react-router-dom";
import CartItemList from "../CartItemList/CartItemList";
import CheckOut from "../CheckOut/CheckOut";

const CartContainer = () => {
  const { cartList, emptyCart, remove, totalQuantity } = useCartContext();
  const [isCartEmpty, setIsCartEmpty] = useState(true);
  const [idOrder, setIdOrder]= useState('')

  useEffect(() => {
    cartList.length > 0 ? setIsCartEmpty(false) : setIsCartEmpty(true);

    }, [cartList]);
    
  const [dataForm, setDataForm] = useState({
    name: "",
    emailMatch: "",
    email: "",
    phone: "",
  });

  const handleOnChange = (evt) => {
    setDataForm({
      ...dataForm,
      [evt.target.name]: evt.target.value,
    });
  };

  const calculatePrice = cartList.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);
  
  const totalPrice = calculatePrice;

  const validateMail = (dataForm) => {
    let isValid = false;
    if (dataForm.email === dataForm.emailMatch) {
      isValid = true;
    } else {
      alert("El correo electronico debe ser igual");
    }
    return isValid;
  };
  const createOrder = (evt) => {
    evt.preventDefault();
    const isValid = validateMail(dataForm);
    if (isValid) {
          const { emailMatch, ...newDataForm } = dataForm;
          const order = {};
          order.buyer = { newDataForm };
          order.items = cartList.map(({ id, title, price, quantity }) => ({
            id,
            title,
            price,
            quantity,
          }));
          order.total = totalPrice;
          
          const dbFirestore = getFirestore();
          const ordersCollection = collection(dbFirestore, "orders");
          addDoc(ordersCollection, order)
            .then((resp) =>setIdOrder(resp.id))
            .catch((err) => console.log(err));
            setDataForm({ email: "", emailMatch: "", name: "", phone: "" });
            emptyCart();
    }
  };

  return (
    <>
      {idOrder.length !== 0 &&
       <div className="checkOut-div">  
        <h2>COMPRA EXITOSA</h2>
        <h2>EL ID DE COMPRA ES: {idOrder}</h2>
      </div> 
      }
      {isCartEmpty ? (
        <>
          <h1>El Carrito esta Vacio</h1>
          <Link to="/">
            <Button>Seguir Comprando</Button>
          </Link>
        </>
      ) : (
        <>
          <CartItemList  totalPrice={totalPrice}/>
          {/* {cartList.map((item) => (
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
          ))} */}

          {/* <Text color="blue.600" fontSize="2xl">
            Precio Total:{totalPrice}
          </Text>
          <Text color="blue.600" fontSize="2xl">
            Cantidad Total de Articulos:{totalQuantity()}
          </Text>
          <Button onClick={emptyCart} variant="solid" colorScheme="blue">
            Vaciar Carrito
          </Button> */}
          <CheckOut 
          createOrder={createOrder} 
          dataForm={dataForm} />
          {/* <form id="form" onSubmit={createOrder}>
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
          </form> */}
        </>
      )}
    </>
  );
};

export default CartContainer;