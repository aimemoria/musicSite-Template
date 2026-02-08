import { useState } from 'react';
import './App.css';

const tracks = [
  { title: 'Midnight Echo', duration: '3:42', genre: 'Lo-Fi' },
  { title: 'Fading Signal', duration: '4:15', genre: 'Ambient' },
  { title: 'Neon Drift', duration: '3:58', genre: 'Synthwave' },
  { title: 'Still Waters', duration: '5:01', genre: 'Chill' },
  { title: 'Afterglow', duration: '4:33', genre: 'Downtempo' },
];

function App() {
  const [activeTrack, setActiveTrack] = useState(null);

  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">HIDDENTIMES</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#tracks">Tracks</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <section id="home" className="hero">
        <div className="hero-content">
          <h1>HIDDENTIMES Music</h1>
          <p className="tagline">Discover the sound beyond time</p>
          <a href="#tracks" className="cta-button">Explore Tracks</a>
        </div>
      </section>

      <section id="tracks" className="tracks-section">
        <h2>Featured Tracks</h2>
        <div className="tracks-list">
          {tracks.map((track, index) => (
            <div
              key={index}
              className={`track-card ${activeTrack === index ? 'active' : ''}`}
              onClick={() => setActiveTrack(activeTrack === index ? null : index)}
            >
              <div className="track-number">{String(index + 1).padStart(2, '0')}</div>
              <div className="track-info">
                <h3>{track.title}</h3>
                <span className="genre">{track.genre}</span>
              </div>
              <div className="track-duration">{track.duration}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="about-section">
        <h2>About</h2>
        <p>
          HIDDENTIMES Music is a space for sounds that live between moments --
          ambient textures, downtempo beats, and atmospheric compositions
          crafted for listeners who appreciate depth over noise.
        </p>
      </section>

      <section id="contact" className="contact-section">
        <h2>Get In Touch</h2>
        <p>For bookings, collaborations, or just to say hello.</p>
        <a href="mailto:contact@hiddentimes.com" className="cta-button">
          Send a Message
        </a>
      </section>

      <footer className="footer">
        <p>HIDDENTIMES Music</p>
      </footer>
    </div>
  );
}

export default App;
