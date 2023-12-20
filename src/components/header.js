import * as React from 'react'
import { Link } from 'gatsby'
import {
    gridHeader,
    navLinkItem,
    navLinks,
    navLinkText
} from './header.module.css'

const Header = () => {
  return (
    <div className={gridHeader}>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Página Principal
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Hoja De Vida
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              Sobre mí
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header