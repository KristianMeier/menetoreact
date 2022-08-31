import React from 'react'
import { ArticleData } from '../data/ArticleData'
import SingleArticle from '../components/SingleArticle'

function Latteart() {
  const { title, img1, text1 } = ArticleData[2]
  return (
    <div>
      <SingleArticle title={title} img1={img1} text1={text1} />
    </div>
  )
}

export default Latteart
