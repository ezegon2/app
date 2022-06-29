import React from 'react'
import ItemCount from './ItemCount'
import style from './Css/ItemDetail.module.css'
import Main from './Main'
import {Link} from 'react-router-dom'

function ItemDetail({name, id, description, stock, price, image,}) {
  const onAdd = (cantidadElegida) => {
    console.log("desde item detail :"+cantidadElegida);
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
    <ItemCount stock={stock} onAdd={onAdd}/>
    <div>
      <Link to="/Cart">terminar compra </Link>
    </div>
    <div>
      <Main/>
    </div>
    </div>
  )
}

export default ItemDetail