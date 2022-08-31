import React from 'react'
import { Link } from 'react-router-dom'

const BlackArrow = () => {
  return (
    <Link to='/' className='article-link'>
      &larr; Tilbage
    </Link>
  )
}

export default BlackArrow
