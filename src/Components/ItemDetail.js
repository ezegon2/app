import React from 'react'
import ItemCount from './ItemCount'
import style from './Css/ItemDetail.module.css'

function ItemDetail({name, id, description, stock, price, image}) {
  return (

    <div className={style.coupon}>
    <div className={style.container}>
        <h3>{name}</h3>
    </div>
    <img src={image} alt={id} className={style.imageDetail} />
    <div className={style.container} >
        <h2><b>{price}</b></h2> 
        <p>{description}</p>
    </div>
    <ItemCount stock={stock}/>

    </div>
  )
}

export default ItemDetail