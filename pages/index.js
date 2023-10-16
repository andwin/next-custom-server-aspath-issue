import React from 'react'

const Home = ({ asPath, originalUrl }) => {
  console.log({ asPath, originalUrl })

  return (
    <ul>
      <li>asPath {asPath}</li>
      <li>originalUrl {originalUrl}</li>
    </ul>
  )
}

export default Home
