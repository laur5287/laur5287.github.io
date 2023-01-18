import { useState } from 'react'
import About from './components/about/About'
import Nav from './components/nav/Nav'
import Header from './components/header/Header'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portofolio from './components/portofolio/Portofolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import CryptoBot from "./components/portofolio/CryptoBot/CryptoBot"

function App() {


  return (
    <div id="App">
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portofolio />
      <Testimonials />
      <Contact />
      <Footer /> 
      <CryptoBot />
    </div>
  )
}

export default App
