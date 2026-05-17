import { useEffect, useState } from 'react'
import '../styles/ImpactStats.css'

export default function ImpactStats() {
  const [stats, setStats] = useState([
    { number: 0, label: 'Families Reached', target: 500 },
    { number: 0, label: 'Students Supported', target: 120 },
    { number: 0, label: 'Lives Transformed', target: 800 },
    { number: 0, label: 'Programs Running', target: 15 }
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prevStats => 
        prevStats.map(stat => ({
          ...stat,
          number: stat.number < stat.target ? stat.number + Math.ceil(stat.target / 50) : stat.target
        }))
      )
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="impact-stats">
      <div className="container">
        <h2>Our Impact</h2>
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-number">{stat.number.toLocaleString()}</div>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
