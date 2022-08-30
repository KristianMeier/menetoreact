import { Navbardata } from '../data/NavbarData'

// const NavItem = (data) => {
//   return <li className='nav-item'>{children}</li>
// }

export const Header = ({ navigation }) => {
  return (
    <div className='header-container'>
      <nav>
        <ul className='header-nav'>
          {Navbardata.map((item) => {
            const { link, title } = item
            return (
              <a href={link}>
                <li className='nav-item'> {title} </li>
              </a>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}
