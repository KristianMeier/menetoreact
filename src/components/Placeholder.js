import React from 'react'
import Lorem from './utils/Lorem'

const Placeholder = ({ img, altText }) => {
  return (
    <>
      <figure className='figure'>
        <img className='staticpage' src={img} alt={altText} />
        <p className='figcaption'>Her i butikken er der noget ved musikken.</p>
        <Lorem />
      </figure>
    </>
  )
}

export default Placeholder
