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
        "An exploration of movement, performance and the human body.",
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
          <a href="/#about">ABOUT</a>
          <a href="/#visit">VISIT</a>
        </nav>

        <button
          className="exhibitions-menu"
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </header>


      {/* EXHIBITIONS */}

      <section className="exhibitions-hero">

        <div className="exhibitions-hero-top">

          <div className="exhibitions-side-label">
            <span>05</span>

            <div>
              <span>WHAT'S</span>
              <span>ON</span>
            </div>
          </div>

        </div>


        <div className="exhibitions-content">

          <div className="exhibitions-intro-space">
            <p>
              CONTEMPORARY
              <br />
              CULTURE
            </p>
          </div>


          <div className="exhibitions-list">

            {exhibitions.map((exhibition) => (
              <Link
                to="/art"
                className="exhibition-row"
                key={exhibition.number}
              >

                <div className="exhibition-row-number">
                  {exhibition.number}
                </div>

                <div className="exhibition-row-content">

                  <h2>{exhibition.title}</h2>

                  <p className="exhibition-category">
                    {exhibition.category}
                  </p>

                  <p className="exhibition-description">
                    {exhibition.description}
                  </p>

                </div>

                <div className="exhibition-row-arrow">
                  ↗
                </div>

              </Link>
            ))}

          </div>

        </div>

      </section>


      {/* FOOTER */}

      <footer className="exhibitions-footer">

        <div>
          <span>MAISON AURÉLIEN</span>

          <p>
            Contemporary Art House
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