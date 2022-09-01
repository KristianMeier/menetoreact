import React from 'react'
import { Outlet } from 'react-router-dom'
import Campaign from '../Campaign'
import FooterText from '../FooterText'
import Navbar from '../Navbar.js'

const Layout = () => {
  return (
    <>
      <Campaign />
      <Navbar />
      <main className='container'>
        <Outlet />
      </main>
      <FooterText />
    </>
  )
}

export default Layout
