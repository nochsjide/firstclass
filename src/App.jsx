import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Herosection from './components/Herosection/Herosection'
import ProductSection from './components/ProductSection/ProductSection'
import AboutSection from './components/AboutSection/AboutSection'
import PartnersSection from './components/PartnersSection/PartnersSection';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>
   
      <Navbar/>
      <Herosection/>
      <ProductSection/>
      
      <AboutSection/>
      <PartnersSection />
      <Footer/>
      
    </>
  )
}

export default App