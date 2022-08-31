import React from 'react'
import { Link } from 'react-router-dom'
import ArticleData from '../data/ArticleData'

const ArticlePreview = () => {
  return (
    <>
      <ul className='articlepreview-grid'>
        {ArticleData.map((item) => {
          const { img1, title, date, text1, path } = item
          return (
            <Link to={path}>
              <li className='articlepreview'>
                <div className='articlepreview-image'>
                  <figure className='figure'>
                    <img
                      src={img1}
                      alt='img1'
                      className='articlepreview-imagefit'
                    />
                  </figure>
                </div>
                <div className='articlepreview-textcontent'>
                  <div className='articlepreview-heading'>
                    <a href='/'>{title}</a>
                  </div>
                  <p className='articlepreview-date'>{date}</p>
                  <p className='articlepreview-normaltext'>{text1}</p>
                </div>
              </li>
            </Link>
          )
        })}
      </ul>
    </>
  )
}
export default ArticlePreview
