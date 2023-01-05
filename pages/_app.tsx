import '../styles/globals.css'
import type { AppProps } from 'next/app'
import localFont from '@next/font/local'
import store from '../store'
import { Provider } from 'react-redux'
import Topbar from '../components/Topbar'

const myFont = localFont({ src: '../public/fonts/Gilroy-Medium.woff2' })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Topbar />
      <main className={myFont.className}>
        <Component {...pageProps} />
      </main>
    </Provider>
  )
}
