import { useEffect, useState } from "react";
import { useCartContext } from "../../context/CartContext";
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
          <CheckOut 
          createOrder={createOrder} 
          dataForm={dataForm}
          handleOnChange={handleOnChange}
           />
        </>
      )}
    </>
  );
};

export default CartContainer;
