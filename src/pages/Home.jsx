import { Link } from "react-router-dom"
import { useEffect, useRef, useState } from "react"
import "./Home.css"

const heroImage =
  "https://images.unsplash.com/photo-1770625297409-52edb6640149?auto=format&fit=crop&w=1800&q=90"

function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [houseVisible, setHouseVisible] = useState(false)

  const houseRef = useRef(null)

  useEffect(() => {
    const section = houseRef.current

    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHouseVisible(true)
        } else {
          setHouseVisible(false)
        }
      },
      {
        threshold: 0.25,
      }
    )

    observer.observe(section)

    return () => observer.disconnect()
  }, [])

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <div className="home-page">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="site-header">

        <Link
          to="/"
          className="brand"
          onClick={closeMenu}
        >
          <span className="brand-small">
            MAISON
          </span>

          <span className="brand-main">
            AURÉLIEN
          </span>
        </Link>


        <nav className="main-nav">

          <Link
            to="/"
            className="active"
          >
            HOME
          </Link>

          <Link to="/art">
            ART
          </Link>

          <a href="#exhibitions">
            EXHIBITIONS
          </a>

          <a href="#about">
            ABOUT
          </a>

          <a href="#visit">
            VISIT
          </a>

        </nav>


        <button
          className="menu-button"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </header>


      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      {menuOpen && (
        <div className="mobile-menu">

          <div className="mobile-menu-header">

            <span>MENU</span>

            <button
              onClick={closeMenu}
              aria-label="Close menu"
            >
              ×
            </button>

          </div>


          <div className="mobile-menu-links">

            <Link
              to="/"
              onClick={closeMenu}
            >
              Home
            </Link>

            <Link
              to="/art"
              onClick={closeMenu}
            >
              Art
            </Link>

            <Link
              to="/art/bonsai-beneath"
              onClick={closeMenu}
            >
              Bonsai Beneath
            </Link>

            <Link
              to="/art/dance"
              onClick={closeMenu}
            >
              Dance
            </Link>

            <Link
              to="/art/music"
              onClick={closeMenu}
            >
              Music
            </Link>

            <Link
              to="/art/theatre"
              onClick={closeMenu}
            >
              Theatre
            </Link>

            <a
              href="#exhibitions"
              onClick={closeMenu}
            >
              Exhibitions
            </a>

            <a
              href="#about"
              onClick={closeMenu}
            >
              About
            </a>

            <a
              href="#visit"
              onClick={closeMenu}
            >
              Visit
            </a>

          </div>

        </div>
      )}


      {/* =====================================================
          FIRST PAGE — FULL SCREEN HERO
      ===================================================== */}

      <section className="full-hero">

        <div className="hero-image-layer">

          <img
            src={heroImage}
            alt="Contemporary art installation"
          />

        </div>


        <div className="hero-overlay"></div>


        <div className="hero-line hero-line-top"></div>

        <div className="hero-line hero-line-bottom"></div>


        <div className="hero-top-label">

          <span>01</span>

          <span>
            CONTEMPORARY ART HOUSE
          </span>

        </div>


        <div className="hero-center">

          <p className="hero-kicker">
            BONSAI BENEATH PRESENTS
          </p>

          <h1>

            A PLACE
            <br />

            <span>FOR ART</span>

            <br />

            <i>TO BREATHE.</i>

          </h1>


          <p className="hero-subtitle">
            Art · Movement · Sound · Performance
          </p>


          <Link
            to="/art"
            className="hero-explore"
          >
            <span>
              EXPLORE THE HOUSE
            </span>

            <strong>
              ↗
            </strong>

          </Link>

        </div>


        <div className="hero-side-left">
          BONSAI BENEATH
        </div>


        <div className="hero-side-right">
          ART · DANCE · MUSIC · THEATRE
        </div>


        <div className="hero-bottom-info">

          <span>
            EST. 2026
          </span>

          <span className="hero-scroll">

            SCROLL TO EXPLORE

            <b>
              ↓
            </b>

          </span>

          <span>
            CONTEMPORARY CULTURE
          </span>

        </div>

      </section>


      {/* =====================================================
          THE HOUSE — SCROLL ANIMATION SECTION
      ===================================================== */}

      <section
        ref={houseRef}
        className={`intro-section ${
          houseVisible ? "house-visible" : ""
        }`}
      >

        <div className="section-number">
          02
        </div>


        <div className="intro-content">

          <p className="section-label">
            THE HOUSE
          </p>


          <h2>

            <span className="text-line">
              Where different
            </span>

            <span className="text-line">
              forms of art
            </span>

            <span className="text-line">
              <em>meet.</em>
            </span>

          </h2>


          <p className="intro-text">
           BONSAI BENEATH brings together visual art,
            movement, music and theatre in one evolving
            cultural space.
          </p>

        </div>


        {/* FISH ANIMATION */}

        <div className="fish-animation">

          <span className="fish-bubble bubble-one"></span>

          <span className="fish-bubble bubble-two"></span>

          <span className="fish-bubble bubble-three"></span>

          <span className="fish-bubble bubble-four"></span>


          <svg
            className="fish-svg"
            viewBox="0 0 240 120"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >

            <path
              className="fish-body"
              d="
                M65 60
                C75 30 115 18 155 30
                C185 39 202 50 205 60
                C202 70 185 81 155 90
                C115 102 75 90 65 60
                Z
              "
            />


            <path
              className="fish-tail"
              d="
                M68 60
                L18 28
                L32 60
                L18 92
                Z
              "
            />


            <path
              className="fish-fin"
              d="
                M105 30
                L120 7
                L137 34
              "
            />


            <path
              className="fish-fin"
              d="
                M108 90
                L123 113
                L140 86
              "
            />


            <circle
              className="fish-eye"
              cx="174"
              cy="49"
              r="4"
            />


            <path
              className="fish-detail"
              d="
                M148 45
                C137 53 137 68 148 76
              "
            />


            <path
              className="fish-detail"
              d="
                M95 50
                C108 55 108 66 95 71
              "
            />

          </svg>

        </div>


        <div className="house-corner-text">
          ART IS ALWAYS MOVING
        </div>

      </section>


      {/* =====================================================
          ART SECTION
      ===================================================== */}

      <section className="art-section">

        <div className="section-heading">

          <div>

            <span>
              03
            </span>

            <p>
              EXPLORE ART
            </p>

          </div>


          <h2>
            ART
          </h2>

        </div>


        <div className="art-grid">

          <Link
            to="/art/bonsai-beneath"
            className="art-card art-card-one"
          >

            <span>
              01
            </span>

            <div>

              <small>
                VISUAL ART
              </small>

              <h3>
                Bonsai
                <br />
                Beneath
              </h3>

            </div>

            <b>
              ↗
            </b>

          </Link>


          <Link
            to="/art/dance"
            className="art-card art-card-two"
          >

            <span>
              02
            </span>

            <div>

              <small>
                MOVEMENT
              </small>

              <h3>
                Dance
              </h3>

            </div>

            <b>
              ↗
            </b>

          </Link>


          <Link
            to="/art/music"
            className="art-card art-card-three"
          >

            <span>
              03
            </span>

            <div>

              <small>
                SOUND
              </small>

              <h3>
                Music
              </h3>

            </div>

            <b>
              ↗
            </b>

          </Link>


          <Link
            to="/art/theatre"
            className="art-card art-card-four"
          >

            <span>
              04
            </span>

            <div>

              <small>
                PERFORMANCE
              </small>

              <h3>
                Theatre
              </h3>

            </div>

            <b>
              ↗
            </b>

          </Link>

        </div>

      </section>


      {/* =====================================================
          STATEMENT
      ===================================================== */}

      <section className="statement-section">

        <div className="section-number">
          04
        </div>


        <div>

          <p className="section-label">
            OUR PHILOSOPHY
          </p>

          <h2>
            ART IS
            <br />
            <em>ALIVE.</em>
          </h2>

        </div>

      </section>


      {/* =====================================================
          EXHIBITIONS
      ===================================================== */}

      <section
        className="exhibitions-section"
        id="exhibitions"
      >

        <div className="section-heading">

          <div>

            <span>
              05
            </span>

            <p>
              WHAT'S ON
            </p>

          </div>

          {/* LARGE EXHIBITIONS TITLE REMOVED */}

        </div>


        <div className="exhibition-list">

          <div className="exhibition-row">

            <span>
              01
            </span>

            <div>

              <h3>
                Forms in Motion
              </h3>

              <p>
                Contemporary Sculpture
              </p>

            </div>

            <b>
              🔍
            </b>

          </div>


          <div className="exhibition-row">

            <span>
              02
            </span>

            <div>

              <h3>
                Beyond the Frame
              </h3>

              <p>
                Emerging Artists
              </p>

            </div>

            <b>
              🔍
            </b>

          </div>


          <div className="exhibition-row">

            <span>
              03
            </span>

            <div>

              <h3>
                Living Forms
              </h3>

              <p>
                Art & Movement
              </p>

            </div>

            <b>
              🔍
            </b>

          </div>

        </div>

      </section>


      {/* =====================================================
          ABOUT
      ===================================================== */}

      <section
        className="about-section"
        id="about"
      >

        <div className="section-number">
          06
        </div>


        <div>

          <p className="section-label">
            ABOUT BONSAI BENEATH
          </p>

          <h2>

            A house built
            <br />

            around <em>ideas.</em>

          </h2>


          <p className="about-text">
            BONSAI BENEATH is a meeting point for artists,
            audiences and ideas — a space where contemporary
            culture can constantly evolve.
          </p>

        </div>

      </section>


      {/* =====================================================
          VISIT
      ===================================================== */}

      <section
        className="visit-section"
        id="visit"
      >

        <div>

          <span>
            07 — VISIT
          </span>


          <h2>

            COME
            <br />

            <em>EXPERIENCE</em>

            <br />

            ART.

          </h2>


          <button>
            PLAN YOUR VISIT

            <b>
              ↗
            </b>
          </button>

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="site-footer">

        <div>

          <span className="brand-small">
            MAISON
          </span>

          <span className="brand-main">
            AURÉLIEN
          </span>

        </div>


        <p>
          Contemporary art · culture · movement
        </p>


        <span>
          © 2026
        </span>

      </footer>

    </div>
  )
}

export default Home