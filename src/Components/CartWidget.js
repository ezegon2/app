import React from "react"
import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { contexto } from "./CartContext"

const CartWidget = () => {
        const {carrito, cartLenght} = useContext(contexto)

        return (
                <>                        
                    <NavLink to="/Cart"><span className="material-symbols-outlined">shopping_cart</span> {cartLenght()}</NavLink>
                </>

        )
}

export default CartWidget 