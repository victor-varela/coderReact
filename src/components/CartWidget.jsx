import React from 'react'
import cart from "../assets/img/cart.png"
import {  Image } from '@chakra-ui/react'

 export function CartWidget() {
  return (
      <> 
      <Image src={cart} boxSize={"100px"} m={"auto"} mt="10px" />
       <h1>0</h1>
       </>

  )
}