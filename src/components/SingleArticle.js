import React from 'react'
import { useParams } from 'react-router-dom'
import { ArticleData } from '../data/ArticleData'

function SingleArticle() {
  const { productId } = useParams()
  const product = ArticleData[productId - 1]
  const { title, img1, text1 } = product
  return (
    <div>
      <div>{title}</div>
      <img src={img1} alt={title} />
      <p> {text1} </p>
    </div>
  )
}

export default SingleArticle
