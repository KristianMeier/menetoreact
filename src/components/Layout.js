import React from 'react'
import { Outlet } from 'react-router-dom'
import { Campaign } from './Campaign'
import { Header } from './Header.js'
import { Footer } from './Footer'

export function Layout() {
  return (
    <div>
      <Campaign />
      <Header />
      <main className='container'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
