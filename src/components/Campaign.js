import React from 'react'
import { Link } from 'react-router-dom'

const Campaign = () => {
  return (
    <div className='campaignbanner'>
      <Link to='/kunder'>
        <p>
          👋 Velkommen til Meneto - den mindre virksomheds bogholder.{' '}
          <strong>
            <u>Klik her </u>
          </strong>
          for at spare 10% på det første år.
        </p>
      </Link>
    </div>
  )
}

export default Campaign
