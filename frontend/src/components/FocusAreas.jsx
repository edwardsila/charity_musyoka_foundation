import { useEffect, useState } from 'react'
import '../styles/FocusAreas.css'

export default function FocusAreas() {
  const areas = [
    {
      icon: '📚',
      title: 'Education',
      description: 'Support, education, and skill for assistance'
    },
    {
      icon: '🏥',
      title: 'Health',
      description: 'Medical camps, hospital assistance, mental health awareness'
    },
    {
      icon: '♿',
      title: 'PWDs',
      description: 'Empowerment, wheelchairs, crutches, assistive devices, accessibility advocacy'
    },
    {
      icon: '👥',
      title: 'Youth & Women',
      description: 'Training programs, mentorship, skill development'
    }
  ]

  return (
    <section className="focus-areas">
      <div className="container">
        <h2>Our Focus Areas</h2>
        <div className="cards-grid">
          {areas.map((area, index) => (
            <div key={index} className="focus-card">
              <div className="card-icon">{area.icon}</div>
              <h3>{area.title}</h3>
              <p>{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
