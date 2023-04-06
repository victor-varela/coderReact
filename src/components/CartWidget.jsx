import React from 'react'
import cart from "../assets/img/cart.png"
import { Image } from '@chakra-ui/react'
import { Counter } from './Counter'



export function CartWidget() {
  return (
    <>
      <Image src={cart} boxSize={"50px"} />
      <Counter />
    </>

  )
}