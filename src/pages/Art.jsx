import { Link } from "react-router-dom"

function Art() {
  return (
    <div className="art-page">

      {/* HEADER */}
      <header className="inner-header">

        <Link to="/" className="brand">
          <span className="brand-small">MAISON</span>
          <span className="brand-main">AURÉLIEN</span>
        </Link>

        <nav className="inner-nav">
          <Link to="/">Home</Link>
          <Link to="/art" className="active">Art</Link>
          <a href="/#exhibitions">Exhibitions</a>
          <a href="/#about">About</a>
          <a href="/#visit">Visit</a>
        </nav>

        <Link to="/" className="back-link">
          ← Home
        </Link>

      </header>


      {/* PAGE INTRO */}
      <main>

        <section className="art-page-hero">

          <div className="art-page-number">
            01
          </div>

          <div className="art-page-heading">

            <p className="eyebrow">
              MAISON AURÉLIEN — THE PROGRAMME
            </p>

            <h1>
              Art in
              <br />
              <em>many forms.</em>
            </h1>

            <p className="art-page-intro">
              A gathering of visual art, movement, sound and
              performance. Different disciplines, one house.
            </p>

          </div>

          <div className="art-page-meta">
            <span>CONTEMPORARY</span>
            <span>2026</span>
            <span>NEW DELHI — INDIA</span>
          </div>

        </section>


        {/* ART COLLECTION */}
        <section className="art-programme">

          <div className="programme-label">
            <span>02</span>
            <span>EXPLORE THE PROGRAMME</span>
          </div>


          {/* BONSAI */}
          <Link
            to="/art/bonsai-beneath"
            className="programme-card programme-card-featured"
          >

            <div className="programme-card-top">
              <span>01</span>
              <span>INSTALLATION</span>
            </div>

            <div className="programme-card-visual bonsai-visual">

              <span className="visual-letter">
                B
              </span>

              <span className="visual-caption">
                NATURE / CONTEMPLATION
              </span>

            </div>

            <div className="programme-card-info">

              <div>
                <h2>
                  Bonsai
                  <br />
                  Beneath
                </h2>

                <p>
                  Installation · Nature · Contemplation
                </p>
              </div>

              <span className="programme-arrow">
                ↗
              </span>

            </div>

          </Link>


          {/* DANCE */}
          <Link
            to="/art/dance"
            className="programme-card programme-card-dance"
          >

            <div className="programme-card-top">
              <span>02</span>
              <span>PERFORMANCE</span>
            </div>

            <div className="programme-card-visual dance-visual">

              <span className="visual-letter">
                D
              </span>

              <span className="visual-caption">
                BODY / MOVEMENT
              </span>

            </div>

            <div className="programme-card-info">

              <div>
                <h2>
                  Dance
                </h2>

                <p>
                  Movement · Body · Expression
                </p>
              </div>

              <span className="programme-arrow">
                ↗
              </span>

            </div>

          </Link>


          {/* MUSIC */}
          <Link
            to="/art/music"
            className="programme-card programme-card-music"
          >

            <div className="programme-card-top">
              <span>03</span>
              <span>SOUND</span>
            </div>

            <div className="programme-card-visual music-visual">

              <span className="visual-letter">
                M
              </span>

              <span className="visual-caption">
                RHYTHM / ATMOSPHERE
              </span>

            </div>

            <div className="programme-card-info">

              <div>
                <h2>
                  Music
                </h2>

                <p>
                  Sound · Rhythm · Atmosphere
                </p>
              </div>

              <span className="programme-arrow">
                ↗
              </span>

            </div>

          </Link>


          {/* THEATRE */}
          <Link
            to="/art/theatre"
            className="programme-card programme-card-theatre"
          >

            <div className="programme-card-top">
              <span>04</span>
              <span>STAGE</span>
            </div>

            <div className="programme-card-visual theatre-visual">

              <span className="visual-letter">
                T
              </span>

              <span className="visual-caption">
                STORY / PRESENCE
              </span>

            </div>

            <div className="programme-card-info">

              <div>
                <h2>
                  Theatre
                </h2>

                <p>
                  Story · Performance · Presence
                </p>
              </div>

              <span className="programme-arrow">
                ↗
              </span>

            </div>

          </Link>

        </section>


        {/* CLOSING STATEMENT */}
        <section className="art-closing">

          <div className="art-closing-number">
            03
          </div>

          <div className="art-closing-content">

            <p className="eyebrow">
              THE HOUSE
            </p>

            <h2>
              Different voices.
              <br />
              <em>One space.</em>
            </h2>

            <p>
              Maison Aurélien creates space for artists and
              audiences to encounter ideas in unexpected ways.
              Each programme is an invitation to look, listen,
              move and experience.
            </p>

          </div>

        </section>

      </main>


      {/* FOOTER */}
      <footer className="inner-footer">

        <div>
          <span className="brand-small">
            MAISON
          </span>

          <span className="brand-main">
            AURÉLIEN
          </span>
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

export default Art