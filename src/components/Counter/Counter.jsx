import React from 'react'
import { useState } from 'react'
import { Button, Box } from '@chakra-ui/react'


export const Counter = ({onAdd}) => {
  const [contador, setContador] = useState(1)
  const handleContador = () => {
    setContador(contador + 1)
  }
  const restar = () => {
    setContador(contador - 1)
  }

  //hacer contador aumenta y disminuye- listo

  return (
    <>
      <Button size="lg" border="2px"  borderColor={'blue.200'} onClick={handleContador}>+ 1</Button>
      <p>{contador}</p>
      <Button size="lg" border="2px" borderColor={'blue.200'} onClick={restar}>- 1</Button>
      <Button onClick={ ()=>{onAdd(contador)} } variant='solid' colorScheme='blue'>Agregar al Carrito</Button>
    </>
  )
}
