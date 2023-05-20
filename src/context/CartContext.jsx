import { createContext, useContext, useState } from "react";
const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const isInCart = (id) => {
    return cartList.some((el) => el.id === id);
  };

  const addToCart = (item, quantity) => {
    const newObj = { ...item, quantity };
    if (isInCart(newObj.id)) {
      const cartUpdated = cartList.map((prod) => {
        if (prod.id === item.id) {
          return { ...prod, quantity: prod.quantity + quantity };
        } else {
          return prod;
        }
      });
      setCartList([...cartUpdated]);
    } else {
      setCartList([...cartList, newObj]);
    }
  };
  const emptyCart = () => {
    setCartList([]);
  };

  const totalQuantity = () =>
    cartList.reduce((total, objProduct) => (total += objProduct.quantity), 0);

  const remove = (item) => {
    const removeItem = cartList.filter((el) => el.id !== item);
    setCartList([...removeItem]);
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        addToCart,
        emptyCart,
        remove,
        totalQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
