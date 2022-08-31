import React from 'react'
import { Outlet } from 'react-router-dom'
import { Campaign } from './Campaign'
import { Navbar } from './Navbar.js'
import { Footer } from './Footer'

export function Layout() {
  return (
    <div>
      <Campaign />
      <Navbar />
      <main className='container'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
