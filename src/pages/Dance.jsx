import { Link } from "react-router-dom"
import dancePhoto from "../assets/dance-photo.jpg"
import "./Dance.css"

function Dance() {
  return (
    <div className="dance-page">

      {/* ================= HEADER ================= */}

      <header className="dance-header">

        <Link to="/" className="dance-logo">
          <span>MAISON</span>
          <strong>AURÉLIEN</strong>
        </Link>

        <nav className="dance-nav">
          <Link to="/">HOME</Link>
          <Link to="/art" className="active">ART</Link>
          <Link to="/exhibitions">EXHIBITIONS</Link>
          <a href="/#about">ABOUT</a>
          <a href="/#visit">VISIT</a>
        </nav>

        <button className="dance-menu" aria-label="Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>

      </header>


      {/* ================= HERO ================= */}

      <section className="dance-hero">

        <div className="dance-hero-number">
          02 / 04
        </div>

        <div className="dance-hero-content">

          <p className="dance-eyebrow">
            MOVEMENT & PERFORMANCE
          </p>

          <h1>
            DANCE
            <br />
            <i>in motion.</i>
          </h1>

          <p className="dance-hero-description">
            The body becomes a language — moving through
            space, rhythm and expression.
          </p>

        </div>

        <div className="dance-hero-image">

          <img
            src={dancePhoto}
            alt="Dance performance"
          />

        </div>

        <div className="dance-hero-side">
          <span>MAISON AURÉLIEN</span>
          <span>ART / 02</span>
        </div>

        <div className="dance-scroll">
          SCROLL TO EXPLORE
          <span>↓</span>
        </div>

      </section>


      {/* ================= INTRO ================= */}

      <section className="dance-intro">

        <div className="dance-section-number">
          01
        </div>

        <div className="dance-intro-content">

          <p className="dance-label">
            THE LANGUAGE OF MOVEMENT
          </p>

          <h2>
            Movement is
            <br />
            <i>expression.</i>
          </h2>

          <p className="dance-intro-text">
            Dance exists between stillness and movement.
            It transforms the body into a medium for emotion,
            rhythm and storytelling.
          </p>

          <p className="dance-intro-text">
            At Maison Aurélien, dance is presented as a
            contemporary art form connected to visual
            culture, music and performance.
          </p>

        </div>

      </section>


      {/* ================= FEATURE IMAGE ================= */}

      <section className="dance-feature">

        <div className="dance-feature-meta">
          <span>02</span>
          <span>GESTURE / FORM / RHYTHM</span>
        </div>

        <div className="dance-feature-image">

          <img
            src={dancePhoto}
            alt="Dance artist"
          />

        </div>

        <div className="dance-feature-caption">

          <span>01</span>

          <div>

            <h3>
              The body
              <br />
              in space.
            </h3>

            <p>
              A study of balance, form and physical
              expression through contemporary movement.
            </p>

          </div>

        </div>

      </section>


      {/* ================= PHILOSOPHY ================= */}

      <section className="dance-philosophy">

        <div className="dance-philosophy-label">

          <span>03</span>

          <p>APPROACH</p>

        </div>

        <div className="dance-philosophy-main">

          <h2>
            Every gesture
            <br />
            tells a <i>story.</i>
          </h2>

          <div className="dance-philosophy-grid">

            <div>
              <span>01</span>

              <h3>BODY</h3>

              <p>
                The physical form becomes the starting
                point for movement and expression.
              </p>
            </div>

            <div>
              <span>02</span>

              <h3>RHYTHM</h3>

              <p>
                Time, repetition and musicality create
                the structure of movement.
              </p>
            </div>

            <div>
              <span>03</span>

              <h3>SPACE</h3>

              <p>
                Movement changes the relationship between
                the performer, the audience and the space.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* ================= VISUAL SECTION ================= */}

      <section className="dance-statement">

        <div className="dance-statement-image">

          <img
            src={dancePhoto}
            alt="Dance movement"
          />

        </div>

        <div className="dance-statement-text">

          <p className="dance-label">
            MAISON AURÉLIEN
          </p>

          <h2>
            Movement
            <br />
            becomes
            <br />
            <i>memory.</i>
          </h2>

          <p>
            A moment of movement can disappear in an
            instant, yet remain with us long after the
            performance ends.
          </p>

        </div>

      </section>


      {/* ================= PROGRAMME ================= */}

      <section className="dance-programme">

        <div className="dance-programme-top">

          <span>04</span>

          <span>PROGRAMME</span>

          <span>MAISON AURÉLIEN</span>

        </div>


        <div className="dance-programme-heading">

          <h2>
            Dance
            <br />
            <i>at the house.</i>
          </h2>

          <p>
            Discover performances, workshops and
            movement-based experiences presented
            throughout the year.
          </p>

        </div>


        <div className="dance-programme-list">

          <div className="programme-row">

            <span>01</span>

            <div>
              <h3>Contemporary Performance</h3>
              <p>Movement / Performance</p>
            </div>

            <span className="programme-arrow">
              ↗
            </span>

          </div>


          <div className="programme-row">

            <span>02</span>

            <div>
              <h3>Movement Sessions</h3>
              <p>Workshop / Practice</p>
            </div>

            <span className="programme-arrow">
              ↗
            </span>

          </div>


          <div className="programme-row">

            <span>03</span>

            <div>
              <h3>Dance & Visual Culture</h3>
              <p>Talk / Performance</p>
            </div>

            <span className="programme-arrow">
              ↗
            </span>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer className="dance-footer">

        <div className="dance-footer-logo">
          <span>MAISON</span>
          <strong>AURÉLIEN</strong>
        </div>

        <div className="dance-footer-middle">
          <p>Contemporary Art House</p>
          <p>Art · Movement · Sound · Performance</p>
        </div>

        <Link to="/art">
          BACK TO ART ↑
        </Link>

      </footer>

    </div>
  )
}

export default Dance