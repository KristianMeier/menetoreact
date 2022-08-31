import React from 'react'

import ArticleData from '../data/ArticleData'
import ArticlePreview from './ArticlePreview'

const ArticlePreviews = () => {
  return (
    <>
      <ul className='articlepreview-grid'>
        {ArticleData.map((item) => {
          const { img1, title, date, text1, path, id } = item
          return (
            <ArticlePreview
              id={id}
              img1={img1}
              title={title}
              data={date}
              text1={text1}
              path={path}
              key={id}
            />
          )
        })}
      </ul>
    </>
  )
}

export default ArticlePreviews
