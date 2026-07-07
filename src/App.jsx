import Footer from './components/Footer'
import Header from './components/Header'
import Home from './Pages/Home'

export default function App() {
  return (
    <main
      style={{
        backgroundColor: 'var(--color-background)',
        color: 'var(--color-text)',
        fontFamily: 'var(--font-sans)',
      }}
    >
      <Header />
      <Home />
      <Footer />
    </main>
  )
}