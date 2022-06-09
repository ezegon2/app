import { useState } from "react";

const ItemCount = ({stock,initial,onAdd}) => {
   const [contador, setContador] = useState(initial);

const aumentarContador = () => {
    if(contador < 5) {
        setContador(contador + 1)
    }
}

const bajarContador = () => {
    if(contador > 1) {
    setContador(contador - 1)
    }
}

const confirmarContador = () => {
    alert("se agregaron" + contador + "productos al carrito")
}

return (
    <>
        <p>El contador va : {contador}</p>
        <button onClick={aumentarContador}>aumentar</button>
        <button onClick={bajarContador}>disminuir</button>
        <button onClick={confirmarContador}>Agregar al Carrito</button>
    </>
    )
}
export default ItemCount;