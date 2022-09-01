import React from 'react'
import { Link } from 'react-router-dom'
import NavbarData from '../data/NavbarData'

const Navigation = ({ styling }) => {
  return (
    <>
      <nav className='Navbar-container'>
        <ul className='Navbar-nav'>
          {NavbarData.map((item) => {
            const { link, title, id } = item
            return (
              <Link to={link} key={id}>
                <li key={id} className={`nav-item ${styling}`}>
                  {title}
                </li>
              </Link>
            )
          })}
        </ul>
      </nav>
    </>
  )
}

export default Navigation
