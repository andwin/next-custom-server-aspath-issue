import React from 'react'

const MyApp = (props) => {
  const { Component, pageProps } = props
  return <Component {...pageProps} />
}

MyApp.getInitialProps = ({ ctx }) => {
  const originalUrl = ctx.req?.originalUrl
  const { asPath } = ctx

  return {
    pageProps: {
      asPath,
      originalUrl,
    },
  }
}

export default MyApp
