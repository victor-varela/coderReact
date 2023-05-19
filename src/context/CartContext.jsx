import { createContext, useContext, useState } from "react";
//enmascarar el contexto para separar la funcionalidad. Asi App no muestra la funcionalidad/logica del componente y queda mas limpio
const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);
//para hacer una sola importacion en el componente consumer, en este caso ItemDetail

export const CartContextProvider = ({ children }) => {
  // estados y funciones globales
  const [cartList, setCartList] = useState([]);

  const isInCart = (id) => {
    return cartList.some((el) => el.id === id);
  };

  const addToCart = (item, cantidad) => {
    //spread operator para que renderice y asi muestra el cart actualizado
    const newObj = { ...item, cantidad };
    if (isInCart(newObj.id)) {
      const carritoActualizado = cartList.map((prod) => {
        if (prod.id === item.id) {
          return { ...prod, cantidad: prod.cantidad + cantidad };
        } else {
          return prod;
        }
      });
      setCartList([...carritoActualizado]);
    } else {
      setCartList([...cartList, newObj]);
    }
  };
  const vaciarCarrito = () => {
    setCartList([]);
  };

  const totalQuantity = () =>
    cartList.reduce((total, objProduct) => (total += objProduct.cantidad), 0);

  const eliminar = (item) => {
    const deleteItem = cartList.filter((el) => el.id !== item);
    setCartList([...deleteItem]);
  };

  return (
    <CartContext.Provider
      value={{
        //estados y funciones inyectados
        cartList,
        addToCart,
        vaciarCarrito,
        eliminar,
        totalQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
