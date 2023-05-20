import React from "react";
import { useState } from "react";
import { Button } from "@chakra-ui/react";

export const Counter = ({ onAdd, stock }) => {
  const [counter, setcounter] = useState(1);
  const handlecounter = () => {
    if (counter <= stock) {
      setcounter(counter + 1);
    } else {
      setcounter(counter);
    }
  };
  const subtract = () => {
    if (counter === 1) {
      setcounter(counter);
    } else {
      setcounter(counter - 1);
    }
  };

  return (
    <>
      <Button
        size="lg"
        border="2px"
        borderColor={"blue.200"}
        onClick={handlecounter}
      >
        + 1
      </Button>
      <p>{counter}</p>
      <Button size="lg" border="2px" borderColor={"blue.200"} onClick={subtract}>
        - 1
      </Button>
      <Button
        onClick={() => {
          onAdd(counter);
        }}
        variant="solid"
        colorScheme="blue"
      >
        Agregar al Carrito
      </Button>
    </>
  );
};
