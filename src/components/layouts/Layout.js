import React from 'react'
import { Outlet } from 'react-router-dom'
import Campaign from '../Campaign'
import Navbar from '../Navbar.js'
import Footer from '../Footer'

const Layout = () => {
  return (
    <>
      <Campaign />
      <Navbar />
      <main className='container'>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout
