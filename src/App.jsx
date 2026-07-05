import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Blogs from './components/Blogs'
import Partners from './components/Partners'
import Footer from './components/Footer'

export default function App() {
  return (
    <main style={{
      backgroundColor: 'var(--color-background)',
      color: 'var(--color-text)',
      fontFamily: 'var(--font-sans)'
    }}>
      <Header />
      <Hero />
      <About />
      <Services />
      {/* <Portfolio />
      <Blogs />
      <Partners />
      <Footer /> */}
    </main>
  )
}
