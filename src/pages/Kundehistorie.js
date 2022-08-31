import React from 'react'
import ArticleContent from '../components/ArticleContent'
import { useParams } from 'react-router-dom'
import ArticleData from '../data/ArticleData'

const Kundehistorie = () => {
  const { articleId } = useParams()
  const Article = ArticleData[articleId - 1]
  const {
    img1,
    img2,
    img3,
    img1caption,
    img2caption,
    img3caption,
    title,
    text1,
    text2,
    text3,
    date,
    id,
  } = Article
  return (
    <>
      <div>
        <h1 className='article-title'>{title}</h1>
        <p className='article-date'>{date}</p>
      </div>
      <ArticleContent
        id={id}
        titel={title}
        date={date}
        text={text1}
        image={img1}
        caption={img1caption}
      />
      <ArticleContent
        id={id}
        titel={title}
        date={date}
        text={text2}
        image={img2}
        caption={img2caption}
      />
      <ArticleContent
        id={id}
        titel={title}
        date={date}
        text={text3}
        image={img3}
        caption={img3caption}
      />
    </>
  )
}

export default Kundehistorie
