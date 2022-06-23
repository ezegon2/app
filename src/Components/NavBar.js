import React from 'react'
import style from './Css/NavBar.module.css'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

function NavBar() {
  return (
    <div>
        <ul>
            <li><Link className={style.linkClass} to='/' >Home</Link></li>
            <li><Link className={style.linkClass} to='category/1'>Vinos</Link></li>
            <li><Link className={style.linkClass} to='category/2'>Fernet</Link></li>
            <li><Link className={style.linkClass} to='category/3'>whisky</Link></li>
            <li><Link className={style.linkClass} to='Cart'>carrito</Link></li>
        </ul>
    </div>
  )
}

export default NavBar 