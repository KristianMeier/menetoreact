import React from 'react'
import { ArticleData } from '../data/ArticleData'

export const ArticlePreview = () => {
  return (
    <div>
      <ul className='articlepreview-grid'>
        {ArticleData.map((item) => {
          const { img1, title, date, text1 } = item
          return (
            <div>
              <li className='articlepreview'>
                <a href='/'>
                  <div className='articlepreview-image'>
                    <figure className='figure'>
                      <img
                        src={img1}
                        alt='img1'
                        className='articlepreview-imagefit'
                      />
                    </figure>
                  </div>
                </a>
                <div className='articlepreview-textcontent'>
                  <div className='articlepreview-heading'>
                    <a href='/'>{title}</a>
                  </div>
                  <p className='articlepreview-date'>{date}</p>
                  <p className='articlepreview-normaltext'>{text1}</p>
                </div>
              </li>
            </div>
          )
        })}
      </ul>
    </div>
  )
}
