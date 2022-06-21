import style from './Css/NavBar.module.css'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <main>
        <h2><Link className={style.linkClass} to='/' >Home</Link></h2>
    </main>
  )
}

export default Main