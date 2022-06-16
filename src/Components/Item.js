import React from 'react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'
import style from './Css/Item.module.css'

function Item({id, name, price, stock,image,description}) {
  return (
    <div className={style.container} >
        <h1>{name}</h1>
        <img src={image} alt={id} />
        <ItemCount stock={stock}/>
  
    <div className={style.container}>
      <h2>{name}</h2>

      <div className={style.card}>
        <img src={image} alt={id} />

        <p className={style.price}>{price}</p>

        <Link className={style.buttonCard} to={`/detail/${id}`}>Ver Detalle</Link>
      </div>
    </div>
  </div>
  )
}

export default Item