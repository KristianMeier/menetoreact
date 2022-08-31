import React from 'react'
import Lorem from './Lorem'

function StaticPage({ img, altText }) {
  return (
    <div>
      <figure className='figure'>
        <img className='staticpage' src={img} alt={altText} />
      </figure>
      <Lorem />
    </div>
  )
}

export default StaticPage
