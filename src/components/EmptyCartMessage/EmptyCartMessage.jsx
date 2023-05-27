import React from "react";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const EmptyCartMessage = () => {
  return (
    <>
      <h1 style={{ marginBottom: "50px" }}>El Carrito esta Vacio</h1>
      <Link to="/">
        <Button>Seguir Comprando</Button>
      </Link>
      <div style={{ minHeight: "300px" }}></div>
    </>
  );
};
