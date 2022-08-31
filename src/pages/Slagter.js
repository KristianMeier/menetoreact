import React from 'react'
import { ArticleData } from '../data/ArticleData'
import SingleArticle from '../components/SingleArticle'

function Slagter() {
  const { title, img1, text1 } = ArticleData[1]
  return (
    <div>
      <SingleArticle title={title} img1={img1} text1={text1} />
    </div>
  )
}

export default Slagter
