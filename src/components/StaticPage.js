import React from 'react'
import Lorem from './Lorem'

const StaticPage = ({ img, altText }) => {
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
