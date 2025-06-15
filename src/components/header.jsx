import * as React from 'react'
import { Link } from 'gatsby'
import {
    gridHeader,
    navLinkItem,
    navLinks,
    navLinkText
} from '../styles/header.module.css'
import { StaticImage } from 'gatsby-plugin-image'

const Header = () => {
  return (
    <div className={gridHeader}>
      <nav>
        <ul className={navLinks}>
          <li>
            <StaticImage 
              src="../images/perfil.jpg" 
              alt="Foto de perfil"
              placeholder="blurred"
              width={100}
              height={100} 
            />
          </li>
          <li className={navLinkItem}>
            <h1 className={navLinkText}>
              John Orlando Vásconez Varas
            </h1>
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