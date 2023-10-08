import { Provider } from 'react-redux'
import '../styles/globals.css'
import { store } from '../features/store'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import CategoryRoutes from '../features/slices/categoryRotes'
import Head from 'next/head'
import { Html } from 'next/document'
import { randomBytes } from 'crypto'



function MyApp({ Component, pageProps }) {
  const nonce = randomBytes(128).toString('base64')
  const csp = `object-src 'none'; base-uri 'none'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https: http: 'nonce-${nonce}' 'strict-dynamic'`

  return ( 
    <Html lang='ru'>
      <Head nonce={nonce}>
        <meta httpEquiv="Content-Security-Policy" content={csp} />
      </Head>
      <body>
        <Provider store={store}>
          <Header />
          <CategoryRoutes />
          <Component {...pageProps} />
          <Footer />
        </Provider>
      </body>
    </Html>
    )
}

export default MyApp
