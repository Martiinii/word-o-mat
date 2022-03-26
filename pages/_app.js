import Head from "next/head"
import "../styles/globals.css"
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Template from "../components/Template"
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
