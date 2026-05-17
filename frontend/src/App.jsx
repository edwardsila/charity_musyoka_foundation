import './styles/index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import FocusAreas from './components/FocusAreas'
import ImpactStats from './components/ImpactStats'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <FocusAreas />
      <ImpactStats />
      <Gallery />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
