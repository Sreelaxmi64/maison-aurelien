import { Link } from "react-router-dom"
import "./Exhibitions.css"

function Exhibitions() {
  const exhibitions = [
    {
      number: "01",
      title: "Forms in Motion",
      category: "Contemporary Sculpture",
      description:
        "A study of movement, material and form through contemporary sculpture.",
    },
    {
      number: "02",
      title: "Beyond the Frame",
      category: "Emerging Artists",
      description:
        "A collection of works exploring new perspectives and experimental ideas.",
    },
    {
      number: "03",
      title: "Living Forms",
      category: "Art & Movement",
      description:
        "Where visual art meets movement, performance and the human body.",
    },
    {
      number: "04",
      title: "Echoes of Culture",
      category: "Contemporary Culture",
      description:
        "A meeting point between tradition, contemporary expression and culture.",
    },
  ]

  return (
    <div className="exhibitions-page">

      {/* HEADER */}
      <header className="exhibitions-header">

        <Link to="/" className="exhibitions-logo">
          <span>MAISON</span>
          <strong>AURÉLIEN</strong>
        </Link>

        <nav className="exhibitions-nav">
          <Link to="/">HOME</Link>
          <Link to="/art">ART</Link>
          <Link to="/exhibitions" className="active">
            EXHIBITIONS
          </Link>
          <Link to="/">ABOUT</Link>
          <Link to="/">VISIT</Link>
        </nav>

        <button className="menu-button">
          <span></span>
          <span></span>
          <span></span>
        </button>

      </header>


      {/* PAGE INTRO */}
      <section className="exhibitions-intro">

        <div className="intro-number">
          02
        </div>

        <div className="intro-content">
          <p className="intro-label">
            THE EXHIBITIONS
          </p>

          <h1>
            Art that
            <br />
            <i>moves.</i>
          </h1>

          <p className="intro-description">
            Discover exhibitions that bring together visual art,
            movement, sound and contemporary culture.
          </p>
        </div>

      </section>


      {/* EXHIBITION LIST */}
      <section className="exhibition-list">

        <div className="section-heading">
          <span>WHAT'S ON</span>
          <span>2026</span>
        </div>

        {exhibitions.map((exhibition) => (
          <article
            className="exhibition-item"
            key={exhibition.number}
          >

            <div className="exhibition-number">
              {exhibition.number}
            </div>

            <div className="exhibition-main">

              <h2>
                {exhibition.title}
              </h2>

              <p className="exhibition-category">
                {exhibition.category}
              </p>

              <p className="exhibition-description">
                {exhibition.description}
              </p>

            </div>

            <div className="exhibition-arrow">
              ↗
            </div>

          </article>
        ))}

      </section>


      {/* FOOTER */}
      <footer className="exhibitions-footer">

        <div>
          <span>MAISON AURÉLIEN</span>
          <p>
            Contemporary art house
          </p>
        </div>

        <Link to="/">
          BACK TO HOME ↑
        </Link>

      </footer>

    </div>
  )
}

export default Exhibitions