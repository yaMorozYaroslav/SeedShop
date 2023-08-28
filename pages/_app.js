import '../styles/globals.css'
import {BoxState} from '../context/BoxState'

export default function App({ Component, pageProps }) {
  return <BoxState><Component {...pageProps} /></BoxState>
}
