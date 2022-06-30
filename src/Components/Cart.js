import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { contexto } from "./CartContext"
import Checkout from './Checkout'


function Cart() {

const {carrito, getSubtotal, eliminarProducto, cartLenght, getTotal, vaciarCarrito} = useContext(contexto)

return (
  <>
{cartLenght() == 0 ? (
      <div>
        <div>
          <p>Oops! Tu carrito está vacío. Por favor, agregá algún producto para poder continuar.</p>
          <Link to='/'>volver al inicio</Link>
        </div>
      </div>
      ) : (

  <div>
    {carrito.map((product) =>(
    <div key={product.id}>
      <img src={product.image} alt={product.title} width="400"/>
      <h1>{product.title}</h1>
      <h2>Id:{product.id}</h2>
      <h3>Stock:{product.stock}</h3> 
      <h4>${product.price}.-</h4>
      <p>Cantidad total: {product.cantidad}</p>
      <div><p>Importe Subtotal: ${parseFloat(getSubtotal(product.price, product.cantidad))}</p></div>
      <div> <button onClick={() => eliminarProducto(product.id)}>Eliminar Item</button></div>
      </div> 
    )     
    )}
    <div>
            <p>Cantidad de items en total:{cartLenght()}</p>  
          </div> 
          <div>
            <p>Importe Total: ${parseFloat(getTotal())}</p>
            </div>
            <div>
          <button onClick={vaciarCarrito}>x Eliminar Todo </button>
          </div>
      <Link to="/checkout">Finalizar la Compra</Link>       
  </div>
  )}
  </>
)
}
export default Cart