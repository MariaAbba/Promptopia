import {useEffect} from 'react'

import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Aos from 'aos'
import 'aos/dist/aos.css'

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
      <Footer />
    </>
  )
}

export default App
