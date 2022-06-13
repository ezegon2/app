import React from 'react'
import Item from './Item'
function ItemList({products}) {
  return (
    products.map (p =>
        <Item
        id={p.id}
        image={p.image}
        name={p.name}
        price={p.price}
        stock={p.stock}
        description={p.description}
        />
    )
  )
}

export default ItemList