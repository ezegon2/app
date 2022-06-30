import React from 'react'
import { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { getProductsById } from './customFetch'
function ItemDetailContainer() {

  const [product, setProduct] = useState()

  const {id} = useParams()
  console.log(typeof id)

  useEffect(() => {
  getProductsById(parseInt(id))
  .then(response => {
      setProduct(response)
  })
  }, [])

return (
       <div style={{marginTop: '30px'}}>
       {
        product ?  <ItemDetail {...product} /> : <h1>Loading...</h1>
       }

      </div>
)
}
export default ItemDetailContainer