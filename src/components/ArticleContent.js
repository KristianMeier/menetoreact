import React from 'react'

const ArticleContent = ({ text, image, caption, id }) => {
  return (
    <>
      {text && (
        <article>
          <p className='article-normaltext'>{text}</p>
          <div className='articleimage-container'>
            <figure className='figure'>
              <img className='articleimage' src={image} alt={id} />
              <p className='figcaption'>{caption}</p>
            </figure>
          </div>
        </article>
      )}
    </>
  )
}
export default ArticleContent
