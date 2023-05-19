import React from "react";
import cart from "../../assets/img/cart.png";
import { Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

export function CartWidget() {
  const { totalQuantity } = useCartContext();

  return (
    <>
      <Link to="/Cart">
        <Image src={cart} boxSize={"50px"} />
        <p>{totalQuantity() !== 0 && totalQuantity()}</p>
      </Link>
    </>
  );
}
