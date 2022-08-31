import React from 'react'
import { Link } from 'react-router-dom'

const Campaign = () => {
  return (
    <div className='campaignbanner'>
      <Link to='https://www.google.com' target='_blank' rel='noreferrer'>
        👋 Velkommen til Meneto - den mindre virksomheds bogholder.{' '}
        <strong>
          <u>Klik her </u>
        </strong>
        for at spare 10% på det første år.
      </Link>
    </div>
  )
}

export default Campaign
