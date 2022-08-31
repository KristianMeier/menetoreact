import React from 'react'
import { Link } from 'react-router-dom'

const LatestArticle = ({ id, title, date }) => {
  return (
    <li key={id}>
      <Link to={`/kunder/${id}`} key={id}>
        <h1 className='newcustomerstories-titel'>{title}</h1>
        <p className='newcustomerstories-date'> {date} </p>
      </Link>
    </li>
  )
}

export default LatestArticle
