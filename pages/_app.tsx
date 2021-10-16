import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/dist/client/router'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return <button onClick={() => router.push('/article-list')}>Article Page</button>

  // return <Component {...pageProps} />
}
export default MyApp
