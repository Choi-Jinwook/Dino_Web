import { Global } from '@emotion/react'
import { global } from '@shared/styles'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={global} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
