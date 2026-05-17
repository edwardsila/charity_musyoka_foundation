import './styles/index.css'
import ErrorBoundary from './components/ErrorBoundary'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import FocusAreas from './components/FocusAreas'
import ImpactStats from './components/ImpactStats'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Donate from './components/Donate'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <Navbar />
        <Hero />
        <About />
        <FocusAreas />
        <ImpactStats />
        <Gallery />
        <Testimonials />
        <CTA />
        <Donate />
        <Footer />
        <WhatsAppButton />
      </div>
    </ErrorBoundary>
  )
}

export default App
