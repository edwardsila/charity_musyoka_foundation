import '../styles/Testimonials.css'

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote: "Through Charity Musyoka foundation in conjuction with county government of kitui, we acquired tents and chairs which we hire out and earn as PHD group.",
      author: "KUDP group Matinyani",
      role: "Support group"
    },
    {
      id: 2,
      quote: "My child with albinism received sunscreen lotion and a cap. Thank you Musyoka Foundation!",
      author: "Mary",
      role: "Parent"
    },
    {
      id: 3,
      quote: "Charity Musyoka Foundation helped me get an artificial limp. Now im independent.",
      author: "Charity Kalumu",
      role: "Beneficiary"
    },
    {
      id: 4,
      quote: "Through charity musyoka foundation in conjuction with county government of Kitui,they donated Tents and Chairs to our PWD group.",
      author: "Monicah Charles",
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
