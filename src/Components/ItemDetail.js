import React,{useState}from 'react'
import ItemCount from './ItemCount'
import style from './Css/ItemDetail.module.css'
import Main from './Main'
import {Link} from 'react-router-dom'
import {contexto} from '/cartContext'

function ItemDetail({name, id, description, stock, price, image}) {
  cosnt (agregarProducto) = useContext(contexto)
  const [toggle,setToggle] = useState(true)
  const onAdd = (cantidadElegida) => {
    console.log("desde item detail :"+cantidadElegida);
    const item = {name, id, description, stock, price, image}
    agregarProducto(item, cantidadElegida)
  }
  return (

    <div className={style.coupon}>
    <div className={style.container}>
        <h3>{name}</h3>
    </div>
    <img src={image} alt={id} className={style.imageDetail} />
    <div className={style.container} >
        <h2>{price}</h2> 
        <p>{description}</p>
    </div>
    {
      toggle ? <ItemCount stock={stock} onAdd={onAdd} setToggle={setToggle}/> :  <Link to="/Cart">terminar compra </Link>
    }
    <div>
      <Main/>
    </div>
    </div>
  )
}

export default ItemDetail