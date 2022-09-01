import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'
import LatestArticles from '../LatestArticles'
import BlackArrow from '../utils/BlackArrow'

const LayoutArticle = () => {
  return (
    <>
      <main className='container'>
        <BlackArrow />
        <Outlet />
        <LatestArticles />
      </main>
      <Footer />
    </>
  )
}

export default LayoutArticle
