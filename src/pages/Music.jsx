import { Link } from "react-router-dom"
import "./Music.css"

const musicHero =
  "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1800&q=90"

const musicImages = [
  "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1200&q=85",
]

function Music() {
  return (
    <div className="music-page">

      {/* HEADER */}
      <header className="music-header">

        <Link to="/" className="music-brand">
          <span>BONSAI</span>
          <strong>BENEATH</strong>
        </Link>

        <nav>
          <Link to="/">HOME</Link>
          <Link to="/art" className="active">ART</Link>
          <Link to="/art/bonsai-beneath">BONSAI BENEATH</Link>
          <Link to="/art/dance">DANCE</Link>
          <Link to="/art/music">MUSIC</Link>
          <Link to="/art/theatre">THEATRE</Link>
        </nav>

        <Link to="/art" className="music-back">
          ← ART
        </Link>

      </header>


      {/* HERO */}
      <section className="music-hero">

        <img
          src={musicHero}
          alt="Live music performance"
        />

        <div className="music-hero-overlay"></div>

        <div className="music-hero-number">
          03
        </div>

        <div className="music-hero-content">

          <p>
            BONSAI BENEATH — SOUND PROGRAMME
          </p>

          <h1>
            Music
            <br />
            <em>in motion.</em>
          </h1>

          <span>
            SOUND · RHYTHM · ATMOSPHERE
          </span>

        </div>

        <div className="music-hero-side">
          LISTEN / EXPERIENCE / FEEL
        </div>

      </section>


      {/* INTRO */}
      <section className="music-intro">

        <div className="music-section-number">
          01
        </div>

        <div className="music-intro-content">

          <p className="music-label">
            THE SOUND OF THE HOUSE
          </p>

          <h2>
            Where sound
            <br />
            becomes <em>space.</em>
          </h2>

          <p>
            Music at BONSAI BENEATH moves beyond the stage.
            It becomes atmosphere, memory and encounter —
            bringing artists and audiences together through
            sound.
          </p>

        </div>

      </section>


      {/* FEATURE */}
      <section className="music-feature">

        <div className="music-feature-image">

          <img
            src={musicImages[0]}
            alt="Musician performing"
          />

        </div>

        <div className="music-feature-content">

          <p className="music-label">
            02 — FEATURED PROGRAMME
          </p>

          <h2>
            After
            <br />
            <em>Dark.</em>
          </h2>

          <p>
            An intimate evening of contemporary sound,
            experimental music and live performance.
            A space where rhythm, light and movement
            meet.
          </p>

          <div className="music-details">

            <span>LIVE PERFORMANCE</span>
            <span>CONTEMPORARY SOUND</span>
            <span>EVENING PROGRAMME</span>

          </div>

          <button className="music-button">
            EXPLORE PROGRAMME
            <b>↗</b>
          </button>

        </div>

      </section>


      {/* PROGRAMMES */}
      <section className="music-programmes">

        <div className="music-section-heading">

          <div>
            <span>03</span>
            <p>EXPLORE THE SOUND</p>
          </div>

          <h2>
            PROGRAMMES
          </h2>

        </div>


        <div className="music-programme-grid">

          <article>

            <span>01</span>

            <div>
              <small>LIVE</small>
              <h3>Night Sessions</h3>
              <p>
                Intimate performances after sunset.
              </p>
            </div>

            <b>↗</b>

          </article>


          <article>

            <span>02</span>

            <div>
              <small>EXPERIMENTAL</small>
              <h3>New Frequencies</h3>
              <p>
                Artists exploring unfamiliar sounds.
              </p>
            </div>

            <b>↗</b>

          </article>


          <article>

            <span>03</span>

            <div>
              <small>ACOUSTIC</small>
              <h3>Quiet Rooms</h3>
              <p>
                Music stripped back to its essentials.
              </p>
            </div>

            <b>↗</b>

          </article>

        </div>

      </section>


      {/* GALLERY */}
      <section className="music-gallery">

        <div className="music-section-number">
          04
        </div>

        <div className="music-gallery-heading">

          <p className="music-label">
            SOUND IN IMAGES
          </p>

          <h2>
            Listen with
            <br />
            your <em>eyes.</em>
          </h2>

        </div>


        <div className="music-images">

          <img
            src={musicImages[1]}
            alt="Music audience"
            className="music-image-large"
          />

          <img
            src={musicImages[2]}
            alt="Live performance"
            className="music-image-small"
          />

        </div>

      </section>


      {/* CLOSING */}
      <section className="music-closing">

        <p>
          BONSAI BENEATH — MUSIC
        </p>

        <h2>
          Every room
          <br />
          has a <em>sound.</em>
        </h2>

        <Link to="/art">
          BACK TO ART ↗
        </Link>

      </section>


      {/* FOOTER */}
      <footer className="music-footer">

        <div>
          <span>BONSAI</span>
          <strong>BENEATH</strong>
        </div>

        <p>
          Art · Dance · Music · Theatre
        </p>

        <Link to="/">
          Back to Maison ↗
        </Link>

      </footer>

    </div>
  )
}

export default Music