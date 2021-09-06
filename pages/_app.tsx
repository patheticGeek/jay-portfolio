import type { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'

import '@utils/twindSetup'
import 'twind/shim'

import '@styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Jay Suthar</title>
        <meta name="description" content="Jay Suthar" />
        <link rel="icon" href="/logo.svg" />
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
