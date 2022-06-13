import React, { useEffect, useState } from "react";

function ItemCount(stock){
    const [contador, setContador] = useState(0)
    function agregar () {
        if (contador < stock){
            setContador(contador + 1)
        }
    }
    function disminuir () {
        if (contador > 0){
            setContador(contador - 1)
        }
    }
    return(
        <div>
            <button onClick={agregar}>+</button>
            <span>{contador}</span>
            <button onClick={disminuir}>-</button>
            <ItemCount stock={stock}/>
        </div>
    )
}
export default ItemCount;