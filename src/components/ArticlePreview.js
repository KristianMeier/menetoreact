import { Link } from 'react-router-dom'

const ArticlePreview = ({ id, img1, title, date, text1, path }) => {
  return (
    <Link to={id}>
      <li className='articlepreview' key={id}>
        <div className='articlepreview-image'>
          <figure className='figure'>
            <img src={img1} alt='img1' className='articlepreview-imagefit' />
          </figure>
        </div>
        <div className='articlepreview-textcontent'>
          <div className='articlepreview-heading'>{title} </div>
          <p className='articlepreview-date'>{date}</p>
          <p className='articlepreview-normaltext'>{text1}</p>
        </div>
      </li>
    </Link>
  )
}

export default ArticlePreview
