import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import MenuOffer from './components/MenuOffer'
import About from './components/About'
import LatestOffer from './components/LatestOffer'
import Dishes from './components/Dishes'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
    <Header/>
    <Main/>
    <MenuOffer/>
    <About/>
    <Dishes/>
    <LatestOffer/>
    <Footer/>
    </>
  )
}

export default App