import React from 'react'
import ArticleData from '../data/ArticleData'
import SingleArticle from '../components/SingleArticle'

const Latteart = () => {
  const { title, img1, text1 } = ArticleData[2]
  return (
    <>
      <SingleArticle title={title} img1={img1} text1={text1} />
    </>
  )
}

export default Latteart
