import React from "react";
import { useState } from "react";
import { Button } from "@chakra-ui/react";

export const Counter = ({ onAdd, stock }) => {
  const [contador, setContador] = useState(1);
  const handleContador = () => {
    if (contador <= stock) {
      setContador(contador + 1);
    } else {
      setContador(contador);
    }
  };
  const restar = () => {
    if (contador === 1) {
      setContador(contador);
    } else {
      setContador(contador - 1);
    }
  };

  //hacer contador aumenta y disminuye- listo

  return (
    <>
      <Button
        size="lg"
        border="2px"
        borderColor={"blue.200"}
        onClick={handleContador}
      >
        + 1
      </Button>
      <p>{contador}</p>
      <Button size="lg" border="2px" borderColor={"blue.200"} onClick={restar}>
        - 1
      </Button>
      <Button
        onClick={() => {
          onAdd(contador);
        }}
        variant="solid"
        colorScheme="blue"
      >
        Agregar al Carrito
      </Button>
    </>
  );
};
