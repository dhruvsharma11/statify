//import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/sidebar.module.css'
import '../styles/weekly.module.css'
import '../styles/NewForYou.module.css'
import '../styles/currently.module.css'
import type { NextPage } from 'next'



function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
