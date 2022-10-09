import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {LocaleProvider} from "@douyinfe/semi-ui";
import en_GB from '@douyinfe/semi-ui/lib/es/locale/source/en_GB';

function MyApp({Component, pageProps}: AppProps) {
  return <LocaleProvider locale={en_GB}>
    <Component {...pageProps} />
  </LocaleProvider>
}

export default MyApp
