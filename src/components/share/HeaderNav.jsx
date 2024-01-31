import { Link } from "react-router-dom"
import "./styles/HeaderNav.css"

const HeaderNav = () => {
  return (
    <header className="header">
        <h1 ><Link className="header__title" to='/'>e-commerce</Link></h1>
        <nav>
            <ul className="header__icons"> 
                <li><Link className="header__icon" to= '/register'>Register</Link></li>
                <li><Link className="header__icon" to= '/login'>Login</Link></li>
                <li><Link className="header__icon" to= '/cart'>Cart</Link></li>
                <li><Link className="header__icon" to= '/purchases'>Purchases</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default HeaderNav