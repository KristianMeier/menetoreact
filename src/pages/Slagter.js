import React from 'react'
import ArticleData from '../data/ArticleData'
import SingleArticle from '../components/SingleArticle'

const Slagter = () => {
  const { title, img1, text1 } = ArticleData[1]
  return (
    <>
      <SingleArticle title={title} img1={img1} text1={text1} />
    </>
  )
}

export default Slagter
