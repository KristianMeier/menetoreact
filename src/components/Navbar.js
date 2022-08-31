import NavbarData from '../data/NavbarData'

const Navbar = () => {
  return (
    <>
      <nav className='Navbar-container'>
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
    </>
  )
}

export default Navbar
