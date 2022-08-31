import React from 'react'
import { Outlet } from 'react-router-dom'
import SenesteArtikler from './SenesteArtikler'
import BlackArrow from './BlackArrow'

export function LayoutArticle() {
  return (
    <div>
      <BlackArrow />
      <main className='container'>
        <Outlet />
      </main>
      <SenesteArtikler />
    </div>
  )
}
