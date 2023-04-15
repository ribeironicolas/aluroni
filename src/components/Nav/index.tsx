import {ReactComponent as Logo} from 'assets/logo.svg'
import styles from './Nav.module.scss'
import { Link } from 'react-router-dom'

const Nav = () => {
  const routes = [{
    label: 'Home',
    to: '/'
  }, {
    label: 'Menu',
    to: '/menu'
  }, {
    label: 'About',
    to: '/about'
  }]
  
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul className={styles.nav__list}>
        {routes.map((route, index) => (
          <li key={index} className={styles.nav__link}>
            <Link to={route.to}>
              {route.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
} 

export default Nav