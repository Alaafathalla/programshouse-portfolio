import Header from '../components/Header'
import Hero from '../components/HomeComponents/Hero'
import About from '../components/HomeComponents/About'
import Services from '../components/HomeComponents/Services'
import Portfolio from '../components/HomeComponents/Portfolio'
import Blogs from '../components/HomeComponents/Blogs'
import Partners from '../components/HomeComponents/Partners'
import Testimonials from '../components/HomeComponents/Testimonials'
import Idea from '../components/HomeComponents/Idea'
import FAQ from '../components/HomeComponents/FAQ'

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Blogs />
      <Partners />
      <Testimonials />
      <Idea />
      <FAQ />
    </>
  )
}