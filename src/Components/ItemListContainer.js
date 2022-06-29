import React,{ useEffect, useState } from "react"
import {customFetch, getProductsByCategory} from './customFetch'
import {useParams} from 'react-router-dom'
import ItemList from "./ItemList";
import s from "./Css/ItemListContainer.module.css"
import { ProductLoader } from './ProductLoader'
  
function ItemListContainer() {
    const [items, setItems] = useState([])
    const {categoryId} = useParams()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      setLoading(true)
      if(!categoryId) {
        customFetch()
        .then(response => {
          setItems(response)
          setLoading(false)
          })
      } else {
          getProductsByCategory(categoryId)
          .then(response => {
            setItems(response)
            setLoading(false)
          })
      }
  }, [categoryId])

  return (
    <div className={s.container}>
        {loading ? <ProductLoader/> : <ItemList products={items} />}
    </div>
  )
}

export default ItemListContainer 