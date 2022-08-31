import { NavbarData } from '../data/NavbarData'

export const Navbar = () => {
  return (
    <div className='Navbar-container'>
      <nav>
        <ul className='Navbar-nav'>
          {NavbarData.map((item) => {
            const { link, title, id } = item
            return (
              <a href={link} key={id}>
                <li key={id} className='nav-item'>
                  {title}
                </li>
              </a>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}
