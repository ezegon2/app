import CartWidget from "./CartWidget"
import React from 'react'
import style from './Css/NavBar.module.css'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div>
        <ul>
            <li><Link className={style.linkClass} to='/' >Home</Link></li>
            <li><Link className={style.linkClass} to='category/1'>Categoria 1</Link></li>
            <li><Link className={style.linkClass} to='category/2'>Categoria 2</Link></li>
            <li><Link className={style.linkClass} to='category/3'>Categoria 3</Link></li>
        </ul>
        <CartWidget/>
    </div>
  )
}

export default NavBar 