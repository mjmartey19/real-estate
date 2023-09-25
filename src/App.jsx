import { BrowserRouter } from "react-router-dom"
import {Navbar, Hero, How, Work, Service, Testimonial, Feature, CTA, Footer} from './components'

function App() {

  return (
   <BrowserRouter>
      <div className="relative z-0">
        <Navbar />
        <Hero />
      </div>
      <How />
      <Work />
      <Service />
      <Testimonial />
      <Feature />
      <CTA />
      <Footer />
   </BrowserRouter>
  )
}

export default App
