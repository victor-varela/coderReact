import React from 'react'
import cart from '../../assets/img/cart.png'
import { Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'



export function CartWidget() {
  return (
    <>
      <Link to="/Cart">
      <Image src={cart} boxSize={"50px"} /><p>3</p>
      </Link>
      
    </>

  )
}