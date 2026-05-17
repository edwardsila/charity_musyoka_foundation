import '../styles/Hero.css'
import heroBanner from '../assets/images/hero/hero-banner.jpg'

export default function Hero() {
  return (
    <section className="hero" id="home" style={{ backgroundImage: `url(${heroBanner})` }}>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>Transform Lives, Build Community</h1>
        <p>Empowering persons with disabilities, marginalized groups, youth, and women with dignity and purpose.</p>
        <div className="cta-buttons">
          <button className="btn btn-primary">Donate Now</button>
          <button className="btn btn-secondary">Learn More</button>
        </div>
      </div>
    </section>
  )
}
