import { useEffect } from 'react'

import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Popular from './components/Popular'
import Offers from './components/Offers'
import Tour from './components/Tour'

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1500,
    })
  }, [])

  return (
    <>
      <Header />
      <Hero />
      <Popular />
      <Offers />
      <Tour />
      <Footer />
    </>
  )
}

export default App
