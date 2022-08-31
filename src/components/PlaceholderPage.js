import React from 'react'
import Lorem from './utils/Lorem'

const PlaceholderPage = ({ img, altText }) => {
  return (
    <div>
      <figure className='figure'>
        <img className='staticpage' src={img} alt={altText} />
      </figure>
      <Lorem />
    </div>
  )
}

export default PlaceholderPage
