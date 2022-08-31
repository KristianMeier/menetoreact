import NavbarData from '../data/NavbarData'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className='Navbar-container'>
        <ul className='Navbar-nav'>
          {NavbarData.map((item) => {
            const { link, title, id } = item
            return (
              <Link to={link} key={id}>
                <li key={id} className='nav-item'>
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

export default Navbar
