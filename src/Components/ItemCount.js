import React, {useState } from "react";
import style from './Css/ItemCount.module.css'
import { Link } from "react-router-dom";

function ItemCount({stock,onAdd}){
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
    const confirmarContador = (e) => {
        onAdd(contador)
    }
    
    return(
        <div>
            <button className={style.button3 } onClick={disminuir}>-</button>
            <span className={style.number }>{contador}</span>
            <button className={style.button4} onClick={agregar}>+</button>
        {
            contador > 0 ? <button onClick={confirmarContador}>Agregar a mi compra</button> : <></>
        }
        </div>
    )
}
export default ItemCount;