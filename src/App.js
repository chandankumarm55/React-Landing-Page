import React from 'react'
import Home from './components/Home'
import Work from './components/Work';
import Testinomial  from './components/Testinomial';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Aboutus from './components/Aboutus';


const App = () => {
  return (
    <div className='app'>
      <Home/>
      <Aboutus />
      <Work />
      <Testinomial />
      <Contact />
      <Footer />
      
      
    </div>
  )
}

export default App

