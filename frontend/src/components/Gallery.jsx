import '../styles/Gallery.css'

export default function Gallery() {
  const images = [
    { id: 1, src: '/src/assets/images/gallery/community-event-1.jpg', alt: 'Community event 1', title: 'Community Outreach' },
    { id: 2, src: '/src/assets/images/gallery/skills-training.jpg', alt: 'Training program', title: 'Skills Training' },
    { id: 3, src: '/src/assets/images/gallery/medical-camp.jpg', alt: 'Healthcare camp', title: 'Medical Camp' },
    { id: 4, src: '/src/assets/images/gallery/youth-programs.jpg', alt: 'Youth gathering', title: 'Youth Programs' },
    { id: 5, src: '/src/assets/images/gallery/women-empowerment.jpg', alt: 'Women empowerment', title: 'Women Empowerment' },
    { id: 6, src: '/src/assets/images/gallery/community-visit.jpg', alt: 'Community visit', title: 'Community Visit' }
  ]

  return (
    <section className="gallery" id="projects">
      <div className="container">
        <h2>Featured Gallery</h2>
        <div className="gallery-grid">
          {images.map(image => (
            <div key={image.id} className="gallery-item">
              <img src={image.src} alt={image.alt} className="gallery-image" onError={(e) => e.target.style.display = 'none'} />
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
