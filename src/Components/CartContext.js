import { createContext, useState } from "react"
import products from "./Products"
// Contexto del carrito
export const contexto = createContext()

// Provider del carrito
export const Provider = contexto.Provider
export const MiProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([])
    const [cantidad_total, setCantidadTotal] = useState(0)
    const [precio_total, setPrecioTotal] = useState(0)

    // Agregar un item al carrito
    const agregarProducto = (products, cantidad) => {
        if(isInCart(products.id)){
            let copia = carrito.findIndex((copia) => (copia.id === products.id))
            let nuevo_producto = [...carrito]
            nuevo_producto[copia].cantidad += cantidad
            setCarrito(nuevo_producto)            
        } else {
            const itemToAdd = {...products, cantidad}
            setCarrito([...carrito, itemToAdd])
        }
        /*const copia = [...carrito]
        const nuevo_producto = { ...producto, cantidad: cantidad }
        copia.push(nuevo_producto)
        setCarrito(copia)*/
    }
// Verifica si el producto ya fue agrgado al Cart
const isInCart = (categoryId) => {
    return carrito.some((item) => (item.id === id))
}


// Remover un item del carrito
    const eliminarProducto = (producto) => {
        setCarrito (carrito.filter((item) => (item.producto !== producto)))
    }

    const actualizarCantidad = (products, cantidad) => {
        //setCarrito()
    }


// Vaciar el carrito
    const vaciarCarrito = () => { 
        setCarrito ([])
    }


    // Obtener número total de items
    const cartLenght = () => {
        let quantity = 0
        carrito.forEach((item) => {
            quantity = quantity + item.cantidad
        })
        return quantity
    }

    const valorDelContexto = {
        carrito: carrito,
        cantidad_total: cantidad_total,
        precio_total: precio_total,
        agregarProducto: agregarProducto,
    }

    return (
        <Provider value={{carrito, agregarProducto, isInCart, eliminarProducto, actualizarCantidad, vaciarCarrito, cartLenght}}>
            {children}
        </Provider>
    )
}