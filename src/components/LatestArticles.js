import React from 'react'
import Divider from './utils/Divider'
import ArticleData from '../data/ArticleData'
import LatestArticle from './LatestArticle'

const LatestArticles = () => {
  return (
    <>
      <Divider />
      <div className='newestcustomerstories'>
        <div className='newcustomerstories-header'>Nyeste kundeudhistorier</div>
        <ul className='newcustomerstories-content'>
          {ArticleData.map((item) => {
            const { title, date, id } = item
            return <LatestArticle title={title} date={date} id={id} key={id} />
          })}
        </ul>
      </div>
    </>
  )
}

export default LatestArticles
