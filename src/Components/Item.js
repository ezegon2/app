import React from 'react'
import ItemCount from './ItemCount'

function Item({id, name, price, stock,image,description}) {
  return (
    <div key={id}>
        <h1>{name}</h1>
        <img src={image} alt={image} />
        <p>{price}</p>
        <p>{stock}</p>
        <p>{description}</p>
        <ItemCount stock={stock}/>
    </div>
  )
}

export default Item