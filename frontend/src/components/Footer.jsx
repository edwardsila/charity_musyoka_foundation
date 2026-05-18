import '../styles/Footer.css'

export default function Footer() {
  const whatsappNumber = '254721831045'

  const handleSocialClick = (e) => {
    e.preventDefault()
  }

  const handleWhatsAppClick = () => {
    const message = "Hi, I would like to get in touch with Charity Musyoka Foundation."
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Musyoka Foundation</h3>
          <p>Empowering communities, transforming lives.</p>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#programs">Programs</a></li>
            <li><a href="#projects">Projects</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Info</h4>
          <p>📱 WhatsApp: <button className="contact-whatsapp-link" onClick={handleWhatsAppClick}>+254 721 831045</button></p>
          <p>📍 Office Location: Kitui town, mukuti street zein building plot no.100</p>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="#" className="social-link facebook" onClick={handleSocialClick}>
              <span className="social-tooltip">Coming Soon</span>
              Facebook
            </a>
            <a href="#" className="social-link twitter" onClick={handleSocialClick}>
              <span className="social-tooltip">Coming Soon</span>
              Twitter
            </a>
            <a href="#" className="social-link instagram" onClick={handleSocialClick}>
              <span className="social-tooltip">Coming Soon</span>
              Instagram
            </a>
            <a href="#" className="social-link linkedin" onClick={handleSocialClick}>
              <span className="social-tooltip">Coming Soon</span>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Charity Musyoka Foundation. All rights reserved.</p>
      </div>
    </footer>
  )
}
