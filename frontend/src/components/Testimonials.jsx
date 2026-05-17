import '../styles/Testimonials.css'

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote: "This foundation changed my life. I went from being unemployed to having a stable job.",
      author: "James Mwangi",
      role: "Skills Training Beneficiary"
    },
    {
      id: 2,
      quote: "My child received the best education support. Thank you Musyoka Foundation!",
      author: "Mary Kipchoge",
      role: "Parent"
    },
    {
      id: 3,
      quote: "The assistive devices provided have given me independence I never thought possible.",
      author: "David Kiplagat",
      role: "PWD Beneficiary"
    },
    {
      id: 4,
      quote: "Empowered women, empowered community. This foundation truly lives its mission.",
      author: "Grace Omondi",
      role: "Women's Program Participant"
    }
  ]

  return (
    <section className="testimonials">
      <div className="container">
        <h2>What People Say</h2>
        <div className="testimonials-grid">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="testimonial-card">
              <p className="quote">"{testimonial.quote}"</p>
              <p className="author">{testimonial.author}</p>
              <p className="role">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
