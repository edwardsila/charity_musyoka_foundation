import '../styles/Donate.css'

export default function Donate() {
  const mpesaPaybill = '247247'
  const mpesaAccountNo = '791790'
  const mpesaAccountName = 'CHARITY MUSYOKA FOUNDATION'
  const whatsappNumber = '254721831045'

  const handlePartnershipContact = () => {
    const message = "Hi, I am interested in exploring corporate partnership and sponsorship opportunities with Charity Musyoka Foundation."
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <section className="donate" id="donate">
      <div className="donate-container">
        <div className="donate-header">
          <h1>Support Our Mission</h1>
          <p>Your generous donation helps us empower marginalized communities</p>
        </div>

        <div className="donate-content">
          <div className="donation-methods">
            {/* M-Pesa / Equity Section */}
            <div className="donation-method equity">
              <div className="method-icon">📱</div>
              <h3>M-Pesa via Equity Bank</h3>
              <p>Instant mobile payment</p>
              <div className="mpesa-details equity-details">
                <div className="detail-box">
                  <label>Paybill Number:</label>
                  <p className="highlight equity-highlight">{mpesaPaybill}</p>
                </div>
                <div className="detail-box">
                  <label>Account Number:</label>
                  <p className="highlight equity-highlight">{mpesaAccountNo}</p>
                </div>
                <div className="detail-box">
                  <label>Account Name:</label>
                  <p className="highlight equity-highlight">{mpesaAccountName}</p>
                </div>
              </div>
              <div className="instructions equity-instructions">
                <h4>How to Donate via M-Pesa:</h4>
                <ol>
                  <li>Go to M-Pesa menu on your phone</li>
                  <li>Select "Lipa na M-Pesa Online" or "Pay Bills"</li>
                  <li>Enter Paybill: <strong>{mpesaPaybill}</strong></li>
                  <li>Enter Account Number: <strong>{mpesaAccountNo}</strong></li>
                  <li>Enter amount you wish to donate</li>
                  <li>Enter your M-Pesa PIN to confirm</li>
                </ol>
              </div>
            </div>

            {/* Corporate Sponsorship */}
            <div className="donation-method">
              <div className="method-icon">🤝</div>
              <h3>Corporate Sponsorship</h3>
              <p>Partnership opportunities</p>
              <p>Join us in making a difference. We welcome corporate partnerships and sponsorships.</p>
              <button className="method-btn" onClick={handlePartnershipContact}>Contact for Details</button>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="donation-faq">
          <h3>Frequently Asked Questions</h3>
          <div className="faq-items">
            <div className="faq-item">
              <h4>Is my donation secure?</h4>
              <p>Yes, all M-Pesa transfers through Equity Bank are secured. We use trusted payment methods.</p>
            </div>
            <div className="faq-item">
              <h4>Will I get a receipt?</h4>
              <p>Yes, you will receive a donation receipt via M-Pesa SMS after your donation is confirmed.</p>
            </div>
            <div className="faq-item">
              <h4>Are donations tax-deductible?</h4>
              <p>Please check with your local tax authority. We provide detailed receipts for tax purposes.</p>
            </div>
            <div className="faq-item">
              <h4>Can I make a recurring donation?</h4>
              <p>Yes! Contact us via WhatsApp for recurring donation options.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
