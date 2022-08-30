import React from 'react'

function StaticPage({ img, altText }) {
  return (
    <figure className='figure'>
      <img className='staticpage' src={img} alt={altText} />
    </figure>
  )
}

export default StaticPage
