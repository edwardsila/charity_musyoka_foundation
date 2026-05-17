import '../styles/About.css'

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <h2>About Charity Musyoka Foundation</h2>
        <p className="about-intro">
          The Charity Musyoka Foundation is dedicated to creating an inclusive, empowered, and self-reliant community. 
          We work with persons with disabilities, marginalized groups, youth, and women to provide equal opportunities 
          for them to thrive with dignity and purpose.
        </p>
        
        <div className="mission-vision">
          <div className="mission">
            <h3>Our Mission</h3>
            <p>
              To empower persons with disabilities, marginalized communities, youth, and women through education, 
              skills development, advocacy, and the provision of assistive devices and essential support services.
            </p>
          </div>
          <div className="vision">
            <h3>Our Vision</h3>
            <p>
              To build an inclusive, empowered, and self-reliant community where persons with disabilities, 
              marginalized groups, youth, and women have equal opportunities to thrive with dignity and purpose.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
