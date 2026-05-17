import { useState } from 'react'
import '../styles/WhatsAppButton.css'

export default function WhatsAppButton() {
  const whatsappNumber = '254721831045'
  const [showMenu, setShowMenu] = useState(false)

  const handleGeneralInquiry = () => {
    const message = "Hi, I would like to know more about Charity Musyoka Foundation."
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  const handlePartnership = () => {
    const message = "Hi, I am interested in exploring corporate partnership and sponsorship opportunities with Charity Musyoka Foundation."
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  const handleDonation = () => {
    const message = "Hi, I have a question about making a donation to Charity Musyoka Foundation."
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <>
      {/* WhatsApp Floating Button */}
      <div className="whatsapp-container">
        <div className={`whatsapp-menu ${showMenu ? 'active' : ''}`}>
          <button className="whatsapp-menu-item" onClick={handleDonation} title="Ask about donations">
            <span className="menu-icon">💝</span>
            <span className="menu-text">Donations</span>
          </button>
          <button className="whatsapp-menu-item" onClick={handlePartnership} title="Partnership inquiry">
            <span className="menu-icon">🤝</span>
            <span className="menu-text">Partnership</span>
          </button>
          <button className="whatsapp-menu-item" onClick={handleGeneralInquiry} title="General inquiry">
            <span className="menu-icon">❓</span>
            <span className="menu-text">General</span>
          </button>
        </div>
        
        <button
          className="whatsapp-button"
          onClick={() => setShowMenu(!showMenu)}
          title="Chat with us on WhatsApp"
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004c-1.925 0-3.712.738-5.063 2.05-1.362 1.313-2.111 3.066-2.111 4.92 0 1.212.239 2.389.684 3.471.461 1.141 1.112 2.143 1.84 2.993l-1.96 5.724c-.137.398.047.823.452.923h.005c.096.025.192.025.289 0 .36-.097 7.125-2.246 7.125-2.246 1.021.363 2.096.549 3.198.549 1.924 0 3.712-.738 5.063-2.05 1.361-1.313 2.111-3.066 2.111-4.92 0-1.923-.748-3.732-2.108-5.049-1.36-1.317-3.155-2.043-5.067-2.043z"/>
          </svg>
        </button>
      </div>
    </>
  )
}
