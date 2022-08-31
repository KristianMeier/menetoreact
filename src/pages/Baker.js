import React from 'react'
import ArticleData from '../data/ArticleData'
import SingleArticle from '../components/SingleArticle'

const Baker = () => {
  const { title, img1, text1 } = ArticleData[0]
  return (
    <>
      <SingleArticle title={title} img1={img1} text1={text1} />
    </>
  )
}

export default Baker
