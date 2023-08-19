import Navbar from '@/components/Navbar'
import Footer from '@/components/footer'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <>
  <Navbar />
  <Component {...pageProps} />
  <Footer />
  </>
}
