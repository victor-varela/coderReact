import { useEffect, useState } from "react";
import { useCartContext } from "../../context/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import CartItemList from "../CartItemList/CartItemList";
import CheckOut from "../CheckOut/CheckOut";
import { SuccesfulPurchase } from "../SuccesfulPurchase/SuccesfulPurchase";
import { EmptyCartMessage } from "../EmptyCartMessage/EmptyCartMessage";

const CartContainer = () => {
  const { cartList, emptyCart } = useCartContext();
  const [isCartEmpty, setIsCartEmpty] = useState(true);
  const [idOrder, setIdOrder] = useState("");

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
        .then((resp) => {
          setIdOrder(resp.id);
        })

        .catch((err) => console.log(err));
      setDataForm({ email: "", emailMatch: "", name: "", phone: "" });
      emptyCart();
    }
  };

  return (
    <>
      {idOrder.length !== 0 && <SuccesfulPurchase idOrder={idOrder} />}

      {isCartEmpty ? (
        <>
          <EmptyCartMessage />
        </>
      ) : (
        <>
          <CartItemList totalPrice={totalPrice} />
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
