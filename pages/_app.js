import Head from "next/head"
import Template from "../components/Template"
import "../styles/globals.css"

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { ListProvider } from "../components/context/listContext"
config.autoAddCss = false

function MyApp({ Component, pageProps }) {
  return (
    <ListProvider>
      <Template>
        <Head>
          <link rel="shortcut icon" href="/images/logo.svg" />
        </Head>

        <Component {...pageProps} />
      </Template>
      </ListProvider>
  )
}

export default MyApp
