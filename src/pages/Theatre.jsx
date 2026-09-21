import { Link } from "react-router-dom"
import "./Theatre.css"

const theatreHero =
  "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1800&q=90"

const theatreImages = [
  "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1200&q=85",
]

function Theatre() {
  return (
    <div className="theatre-page">

      {/* HEADER */}
      <header className="theatre-header">

        <Link to="/" className="theatre-brand">
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

        <Link to="/art" className="theatre-back">
          ← ART
        </Link>

      </header>


      {/* HERO */}
      <section className="theatre-hero">

        <img
          src={theatreHero}
          alt="Theatre stage"
        />

        <div className="theatre-hero-overlay"></div>

        <div className="theatre-hero-number">
          04
        </div>

        <div className="theatre-hero-content">

          <p>
            BONSAI BENEATH — STAGE PROGRAMME
          </p>

          <h1>
            Theatre
            <br />
            <em>comes alive.</em>
          </h1>

          <span>
            STORY · PRESENCE · PERFORMANCE
          </span>

        </div>

        <div className="theatre-hero-side">
          STAGE / STORY / PRESENCE
        </div>

      </section>


      {/* INTRO */}
      <section className="theatre-intro">

        <div className="theatre-section-number">
          01
        </div>

        <div className="theatre-intro-content">

          <p className="theatre-label">
            THE STAGE
          </p>

          <h2>
            Stories that
            <br />
            <em>stay with you.</em>
          </h2>

          <p>
            Theatre at bonsai beneath creates a space for
            stories, bodies and voices to meet. From intimate
            performances to experimental stage works, every
            production is an invitation to experience a story
            differently.
          </p>

        </div>

      </section>


      {/* FEATURE */}
      <section className="theatre-feature">

        <div className="theatre-feature-content">

          <p className="theatre-label">
            02 — FEATURED PERFORMANCE
          </p>

          <h2>
            The
            <br />
            <em>Living Stage.</em>
          </h2>

          <p>
            A contemporary theatre programme exploring
            identity, memory and human connection through
            movement, dialogue and live performance.
          </p>

          <div className="theatre-details">

            <span>LIVE PERFORMANCE</span>
            <span>CONTEMPORARY THEATRE</span>
            <span>EVENING PROGRAMME</span>

          </div>

          <button className="theatre-button">
            VIEW PERFORMANCE
            <b>↗</b>
          </button>

        </div>

        <div className="theatre-feature-image">

          <img
            src={theatreImages[0]}
            alt="Theatre performer"
          />

        </div>

      </section>


      {/* PROGRAMMES */}
      <section className="theatre-programmes">

        <div className="theatre-section-heading">

          <div>
            <span>03</span>
            <p>THE STAGE PROGRAMME</p>
          </div>

          <h2>
            PERFORMANCES
          </h2>

        </div>


        <div className="theatre-programme-list">

          <article>

            <span>01</span>

            <div>
              <small>DRAMA</small>
              <h3>Between Rooms</h3>
              <p>
                A story about memory, distance and belonging.
              </p>
            </div>

            <b>↗</b>

          </article>


          <article>

            <span>02</span>

            <div>
              <small>MOVEMENT</small>
              <h3>Silent Bodies</h3>
              <p>
                A performance told through movement.
              </p>
            </div>

            <b>↗</b>

          </article>


          <article>

            <span>03</span>

            <div>
              <small>EXPERIMENTAL</small>
              <h3>After the Curtain</h3>
              <p>
                Theatre beyond the traditional stage.
              </p>
            </div>

            <b>↗</b>

          </article>

        </div>

      </section>


      {/* VISUAL STORY */}
      <section className="theatre-gallery">

        <div className="theatre-section-number">
          04
        </div>

        <div className="theatre-gallery-heading">

          <p className="theatre-label">
            BEHIND THE CURTAIN
          </p>

          <h2>
            Every story
            <br />
            needs a <em>stage.</em>
          </h2>

        </div>


        <div className="theatre-images">

          <img
            src={theatreImages[1]}
            alt="Theatre audience"
            className="theatre-image-large"
          />

          <img
            src={theatreImages[2]}
            alt="Architectural performance space"
            className="theatre-image-small"
          />

        </div>

      </section>


      {/* CLOSING */}
      <section className="theatre-closing">

        <p>
           BONSAI BENEATH — THEATRE
        </p>

        <h2>
          The curtain rises.
          <br />
          <em>Be there.</em>
        </h2>

        <Link to="/art">
          BACK TO ART ↗
        </Link>

      </section>


      {/* FOOTER */}
      <footer className="theatre-footer">

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

export default Theatre