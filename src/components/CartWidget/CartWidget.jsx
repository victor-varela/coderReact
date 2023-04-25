import React from 'react'
import cart from '../../assets/img/cart.png'
import { Image } from '@chakra-ui/react'



export function CartWidget() {
  return (
    <>
      <Image src={cart} boxSize={"50px"} />
      <p>3</p>
      
    </>

  )
}