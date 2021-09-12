import 'tailwindcss/tailwind.css'
import '../../styles/globals.css'
import { AppProps } from 'next/app'
import React from 'react'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Component {...pageProps} />
      <div id='tooltip'>
        <div id='img-container'>
          <div id='img'></div>
          <p id='title'>continent</p>
        </div>
      </div>
    </>
  )
}

export default MyApp
