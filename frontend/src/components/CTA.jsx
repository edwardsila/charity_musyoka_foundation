import '../styles/CTA.css'

export default function CTA() {
  const handleDonate = () => {
    window.location.hash = '#donate'
    setTimeout(() => {
      const donateSection = document.getElementById('donate')
      if (donateSection) {
        donateSection.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  return (
    <section className="cta-section">
      <div className="cta-content">
        <h2>Join Us in Transforming Lives</h2>
        <p>Your contribution can change someone's future. Be part of our mission to empower communities.</p>
        <button className="cta-button" onClick={handleDonate}>Support Our Mission</button>
      </div>
    </section>
  )
}
