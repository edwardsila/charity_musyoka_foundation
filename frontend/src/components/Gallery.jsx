import '../styles/Gallery.css'
import communityEvent from '../assets/images/gallery/community-event-1.jpg'
import skillsTraining from '../assets/images/gallery/skills-training.jpg'
import medicalCamp from '../assets/images/gallery/medical-camp.jpg'
import youthPrograms from '../assets/images/gallery/youth-programs.jpg'
import womenEmpowerment from '../assets/images/gallery/women-empowerment.jpg'
import communityVisit from '../assets/images/gallery/community-visit.jpg'

export default function Gallery() {
  const images = [
    { id: 1, src: communityEvent, alt: 'Community event 1', title: 'Community Outreach' },
    { id: 2, src: skillsTraining, alt: 'Training program', title: 'Skills Training' },
    { id: 3, src: medicalCamp, alt: 'Healthcare camp', title: 'Medical Camp' },
    { id: 4, src: youthPrograms, alt: 'Youth gathering', title: 'Youth Programs' },
    { id: 5, src: womenEmpowerment, alt: 'Women empowerment', title: 'Women Empowerment' },
    { id: 6, src: communityVisit, alt: 'Community visit', title: 'Community Visit' }
  ]

  return (
    <section className="gallery" id="projects">
      <div className="container">
        <h2>Featured Gallery</h2>
        <div className="gallery-grid">
          {images.map(image => (
            <div key={image.id} className="gallery-item">
              <img src={image.src} alt={image.alt} className="gallery-image" />
              <div className="gallery-overlay">
                <h3>{image.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
