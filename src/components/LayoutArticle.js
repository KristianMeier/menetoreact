import React from 'react'
import { Outlet } from 'react-router-dom'
import SenesteArtikler from './SenesteArtikler'
import BlackArrow from './BlackArrow'

const LayoutArticle = () => {
  return (
    <>
      <main className='container'>
        <BlackArrow />
        <Outlet />
        <SenesteArtikler />
      </main>
    </>
  )
}

export default LayoutArticle
