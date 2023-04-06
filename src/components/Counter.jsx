import React from 'react'
import { useState } from 'react'
import { Button, Box } from '@chakra-ui/react'


export const Counter = () => {
    const [contador, setContador]= useState(0)
    const handleContador =()=>{
        setContador(contador +1)
    }
    const restar =()=>{
      setContador(contador -1)
  }

    //hacer contador aumenta y disminuye- listo
    
  return (
    <>
        <p>{contador}</p>
        <Button onClick={handleContador}>Agregar</Button>
        <Button onClick={restar}>Quitar</Button>

    </>
  )
}
