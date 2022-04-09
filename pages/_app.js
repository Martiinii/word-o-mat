import Head from "next/head"
import Template from "../components/Template"
import "../styles/globals.css"

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

function MyApp({ Component, pageProps }) {
  return (
    <Template>
      <Head>
        <link rel="shortcut icon" href="/images/logo.svg" />
      </Head>

      <Component {...pageProps} />
    </Template>
  )
}

export default MyApp
