import React from 'react'
import ArticleData from '../data/ArticleData'
import Kundehistorie from './Kundehistorie'

const Slagter = () => {
  const { title, img1, text1 } = ArticleData[1]
  return (
    <>
      <Kundehistorie title={title} img1={img1} text1={text1} />
    </>
  )
}

export default Slagter
