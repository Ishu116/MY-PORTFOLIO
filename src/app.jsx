import React from 'react' 
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/about'
import Experience from './components/experience/experience'
import Service from './components/services/service'
import Portfolio from './components/portfolio/portfolio'
import Testimonial from './components/testimonial/testimonial'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'

const app = () => {
  return (
    <div>
        <Header />
        <Nav />
        <About />
        <Experience />
        {/* <Service /> */}
        <Portfolio />
        {/* <Testimonial /> */}
        <Contact />
        <Footer />
    </div>
  )
}

export default app;