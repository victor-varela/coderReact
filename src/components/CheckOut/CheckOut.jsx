import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
} from "@chakra-ui/react";

const CheckOut = ({ cartList, generarOrden }) => {
  const [dataForm, setDataForm] = useState({
    name: "",
    emailMatch: "",
    email: "",
    phone: "",
  });
  const handleOnChange = (evt) => {
    console.log("nombre del input", evt.target.name);
    console.log("valor del input", evt.target.value);
    setDataForm({
      ...dataForm,
      [evt.target.name]: evt.target.value,
    });
  };
  return (
    <form onSubmit={generarOrden(dataForm)}>
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
        color={"white"}
        width="40"
        backgroundColor={"blue.300"}
      >
        Finalizar
      </Button>
    </form>
  );
};
export default CheckOut;
