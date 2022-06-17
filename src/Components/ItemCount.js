import React, {useState } from "react";
import style from './Css/ItemCount.module.css'

function ItemCount({stock}){
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
            <button className={style.button3 } onClick={disminuir}>-</button>
            <span className={style.number }>{contador}</span>
            <button className={style.button4} onClick={agregar}>+</button>
        {
            contador > 0 ? <button className={style.button5}>Agregar al carrito</button> : <></>
        }
        </div>
    )
}
export default ItemCount;