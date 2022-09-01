import React from 'react'
import Placeholder from './Placeholder'
import Divider from './utils/Divider'

const PlaceholderPage = ({ img, altText }) => {
  return (
    <>
      {console.log(img)}
      {console.log(altText)}
      <Placeholder img={img} altText={altText} />
      <Divider />
      <Placeholder img={img} altText={altText} />
      <Divider />
      <Placeholder img={img} altText={altText} />
      <Divider />
      <Placeholder img={img} altText={altText} />
    </>
  )
}

export default PlaceholderPage
