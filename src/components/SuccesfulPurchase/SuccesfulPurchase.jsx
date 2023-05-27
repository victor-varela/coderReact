import React from 'react'
import "../../styles/styles.css"

export const SuccesfulPurchase = ({idOrder}) => {
  return (
    <div className="checkOut-div">  
    <h2>COMPRA EXITOSA</h2>
    <h2>EL ID DE COMPRA ES: {idOrder}</h2>
  </div>
  )
}
