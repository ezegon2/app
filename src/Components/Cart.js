import React from 'react'
import {Link} from 'react-router-dom'
function Cart() {
  return (
    <div>
        <h1>Carrito</h1>
        <Link to='/Checkout' >seguir comprando</Link>
    </div>
  )
}

export default Cart