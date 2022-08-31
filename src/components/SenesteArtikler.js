import React from 'react'
import Divider from './Divider'
import { Link } from 'react-router-dom'
import ArticleData from '../data/ArticleData'

const SenesteArtikler = () => {
  return (
    <>
      <Divider />
      <div className='newestcustomerstories'>
        <div className='newcustomerstories-header'>Nyeste kundeudhistorier</div>
        <ul className='newcustomerstories-content'>
          {ArticleData.map((item) => {
            const { title, date } = item
            return (
              <li>
                <h1 className='newcustomerstories-titel'>
                  <Link to='/'>
                    <p>{title}</p>
                  </Link>
                </h1>
                <p className='newcustomerstories-date'> {date} </p>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default SenesteArtikler
