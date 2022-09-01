import React from 'react'
import { Link } from 'react-router-dom'

const FooterText = () => {
  return (
    <div className='realfooter'>
      <Link to='/kunder'>
        <p className='realfooter-text'>
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

export default FooterText
