import { Link, useNavigate } from "react-router-dom"
import { useEffect, useRef, useState } from "react"
import "./Home.css"

const heroImage =
  "https://images.unsplash.com/photo-1770625297409-52edb6640149?auto=format&fit=crop&w=1800&q=90"

function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [houseVisible, setHouseVisible] = useState(false)
  const [danceTransition, setDanceTransition] = useState(false)

  const navigate = useNavigate()
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

  const handleDanceClick = (event) => {
    event.preventDefault()

    setDanceTransition(true)

    setTimeout(() => {
      navigate("/art/dance")
    }, 1100)
  }

  return (
    <div className={`home-page ${danceTransition ? "dance-page-transition" : ""}`}>

      {/* =====================================================
          DANCE 3D TRANSITION
          ONLY USED WHEN DANCE CARD IS CLICKED
      ===================================================== */}

      <style>{`

        .dance-page-transition {
          perspective: 1400px;
          overflow: hidden;
        }

        .dance-page-transition::after {
          content: "";
          position: fixed;
          inset: 0;
          z-index: 1000;
          pointer-events: none;
          background:
            radial-gradient(
              circle at center,
              rgba(238, 233, 220, 0) 0%,
              rgba(25, 25, 22, 0.08) 45%,
              rgba(25, 25, 22, 0.42) 100%
            );
          animation: danceTransitionDark 1.1s ease-in-out forwards;
        }

        .dance-page-transition .site-header,
        .dance-page-transition .full-hero,
        .dance-page-transition .intro-section,
        .dance-page-transition .statement-section,
        .dance-page-transition .exhibitions-section,
        .dance-page-transition .about-section,
        .dance-page-transition .visit-section,
        .dance-page-transition .site-footer {
          animation: danceBackgroundRecede 1.1s cubic-bezier(0.16, 1, 0.3, 1)
            forwards;
          transform-origin: center center;
        }

        .dance-page-transition .art-section {
          position: relative;
          z-index: 999;
          transform-style: preserve-3d;
          animation: danceSectionDisappear 1.1s
            cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .dance-page-transition .art-card-two {
          position: relative;
          z-index: 1100;
          transform-style: preserve-3d;
          transform-origin: center center;
          animation: danceCardFly 1.1s
            cubic-bezier(0.16, 1, 0.3, 1) forwards;
          box-shadow:
            0 0 0 1px rgba(255,255,255,0.12),
            0 25px 50px rgba(25,25,22,0.18),
            0 70px 140px rgba(25,25,22,0.22);
        }

        .dance-page-transition .art-card-two::before {
          content: "";
          position: absolute;
          inset: -2px;
          z-index: -1;
          border: 1px solid rgba(255,255,255,0.45);
          opacity: 0;
          transform: translateZ(30px);
          animation: danceCardGlow 1.1s ease-out forwards;
        }

        .dance-page-transition .art-card-two::after {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 5;
          pointer-events: none;
          background:
            linear-gradient(
              115deg,
              transparent 20%,
              rgba(255,255,255,0.24) 48%,
              transparent 70%
            );
          transform: translateX(-120%) translateZ(45px);
          animation: danceLightSweep 1.1s ease-out forwards;
        }

        @keyframes danceCardFly {

          0% {
            transform:
              perspective(1400px)
              translate3d(0, 0, 0)
              rotateX(0deg)
              rotateY(0deg)
              rotateZ(0deg)
              scale(1);
            filter: blur(0);
          }

          25% {
            transform:
              perspective(1400px)
              translate3d(0, -10px, 80px)
              rotateX(2deg)
              rotateY(-4deg)
              rotateZ(-1deg)
              scale(1.05);
            filter: blur(0);
          }

          55% {
            transform:
              perspective(1400px)
              translate3d(0, -20px, 240px)
              rotateX(4deg)
              rotateY(-7deg)
              rotateZ(-2deg)
              scale(1.22);
            filter: blur(0);
          }

          78% {
            transform:
              perspective(1400px)
              translate3d(0, -35px, 500px)
              rotateX(7deg)
              rotateY(-10deg)
              rotateZ(-3deg)
              scale(1.65);
            filter: blur(0.5px);
          }

          100% {
            transform:
              perspective(1400px)
              translate3d(0, -60px, 1000px)
              rotateX(10deg)
              rotateY(-14deg)
              rotateZ(-4deg)
              scale(2.5);
            filter: blur(3px);
          }
        }

        @keyframes danceBackgroundRecede {

          0% {
            transform:
              perspective(1600px)
              translateZ(0)
              scale(1);
            filter: blur(0);
          }

          45% {
            transform:
              perspective(1600px)
              translateZ(-70px)
              scale(0.96);
            filter: blur(0.4px);
          }

          100% {
            transform:
              perspective(1600px)
              translateZ(-240px)
              scale(0.82);
            filter: blur(3px);
          }
        }

        @keyframes danceSectionDisappear {

          0% {
            transform:
              perspective(1600px)
              translateZ(0)
              scale(1);
          }

          100% {
            transform:
              perspective(1600px)
              translateZ(-120px)
              scale(0.9);
          }
        }

        @keyframes danceTransitionDark {

          0% {
            opacity: 0;
          }

          45% {
            opacity: 0.15;
          }

          100% {
            opacity: 0.7;
          }
        }

        @keyframes danceCardGlow {

          0% {
            opacity: 0;
            transform: translateZ(0) scale(1);
          }

          45% {
            opacity: 0.25;
            transform: translateZ(30px) scale(1.02);
          }

          100% {
            opacity: 0.7;
            transform: translateZ(80px) scale(1.04);
          }
        }

        @keyframes danceLightSweep {

          0% {
            transform:
              translateX(-120%)
              translateZ(45px);
          }

          100% {
            transform:
              translateX(120%)
              translateZ(45px);
          }
        }

        @media (prefers-reduced-motion: reduce) {

          .dance-page-transition .art-card-two,
          .dance-page-transition .art-section,
          .dance-page-transition .site-header,
          .dance-page-transition .full-hero,
          .dance-page-transition .intro-section,
          .dance-page-transition .statement-section,
          .dance-page-transition .exhibitions-section,
          .dance-page-transition .about-section,
          .dance-page-transition .visit-section,
          .dance-page-transition .site-footer,
          .dance-page-transition::after {
            animation: none !important;
          }

        }

      `}</style>


      {/* =====================================================
          SWIMMING FISH — FULL PAGE ANIMATION
      ===================================================== */}

      <div className="swimming-fish-layer" aria-hidden="true">

        <div className="swimming-fish fish-a">

          <svg viewBox="0 0 240 120" xmlns="http://www.w3.org/2000/svg">

            <defs>

              <linearGradient
                id="fishGoldA"
                x1="0"
                y1="0"
                x2="1"
                y2="1"
              >

                <stop
                  offset="0%"
                  stopColor="#d8c79d"
                />

                <stop
                  offset="55%"
                  stopColor="#a4775e"
                />

                <stop
                  offset="100%"
                  stopColor="#69705a"
                />

              </linearGradient>

            </defs>

            <path
              d="M62 60 C78 28 119 18 158 29 C188 37 205 49 220 60 C205 71 188 83 158 91 C119 102 78 92 62 60Z"
              fill="url(#fishGoldA)"
            />

            <path
              d="M67 60 C43 47 23 31 6 15 C12 36 22 50 37 60 C22 70 12 84 6 105 C23 89 43 73 67 60Z"
              fill="#69705a"
            />

            <path
              d="M118 31 C126 17 138 10 151 7 C147 20 150 27 160 33 C145 29 131 29 118 31Z"
              fill="#a4775e"
              opacity=".8"
            />

            <path
              d="M121 89 C131 91 145 91 159 87 C151 95 148 104 150 113 C137 108 126 101 121 89Z"
              fill="#a4775e"
              opacity=".65"
            />

            <circle
              cx="184"
              cy="48"
              r="4"
              fill="#191916"
            />

            <path
              d="M156 43 C145 53 145 67 156 77"
              fill="none"
              stroke="#eee9dc"
              strokeWidth="3"
              opacity=".45"
            />

            <path
              d="M208 58 C219 59 224 62 212 66"
              fill="none"
              stroke="#eee9dc"
              strokeWidth="2"
              opacity=".6"
            />

          </svg>

        </div>


        <div className="swimming-fish fish-b">

          <svg viewBox="0 0 240 120" xmlns="http://www.w3.org/2000/svg">

            <defs>

              <linearGradient
                id="fishGoldB"
                x1="0"
                y1="1"
                x2="1"
                y2="0"
              >

                <stop
                  offset="0%"
                  stopColor="#69705a"
                />

                <stop
                  offset="55%"
                  stopColor="#b9b998"
                />

                <stop
                  offset="100%"
                  stopColor="#a4775e"
                />

              </linearGradient>

            </defs>

            <path
              d="M62 60 C78 28 119 18 158 29 C188 37 205 49 220 60 C205 71 188 83 158 91 C119 102 78 92 62 60Z"
              fill="url(#fishGoldB)"
            />

            <path
              d="M67 60 C43 47 23 31 6 15 C12 36 22 50 37 60 C22 70 12 84 6 105 C23 89 43 73 67 60Z"
              fill="#a4775e"
            />

            <path
              d="M117 32 C126 20 139 13 151 10 C147 21 150 28 160 34 C145 30 130 30 117 32Z"
              fill="#69705a"
            />

            <circle
              cx="184"
              cy="48"
              r="4"
              fill="#191916"
            />

            <path
              d="M157 44 C146 53 146 67 157 76"
              fill="none"
              stroke="#f7f3e9"
              strokeWidth="3"
              opacity=".5"
            />

          </svg>

        </div>


        <div className="swimming-fish fish-c">

          <svg viewBox="0 0 240 120" xmlns="http://www.w3.org/2000/svg">

            <defs>

              <linearGradient
                id="fishGoldC"
                x1="0"
                y1="0"
                x2="1"
                y2="1"
              >

                <stop
                  offset="0%"
                  stopColor="#eee9dc"
                />

                <stop
                  offset="50%"
                  stopColor="#a4775e"
                />

                <stop
                  offset="100%"
                  stopColor="#69705a"
                />

              </linearGradient>

            </defs>

            <path
              d="M62 60 C78 28 119 18 158 29 C188 37 205 49 220 60 C205 71 188 83 158 91 C119 102 78 92 62 60Z"
              fill="url(#fishGoldC)"
            />

            <path
              d="M67 60 C43 47 23 31 6 15 C12 36 22 50 37 60 C22 70 12 84 6 105 C23 89 43 73 67 60Z"
              fill="#69705a"
            />

            <circle
              cx="184"
              cy="48"
              r="4"
              fill="#191916"
            />

            <path
              d="M158 43 C147 53 147 67 158 77"
              fill="none"
              stroke="#fff"
              strokeWidth="3"
              opacity=".5"
            />

          </svg>

        </div>


        <span className="fish-bubble page-bubble-one"></span>
        <span className="fish-bubble page-bubble-two"></span>
        <span className="fish-bubble page-bubble-three"></span>

      </div>


      <style>{`

        .swimming-fish-layer {
          position: fixed;
          inset: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          pointer-events: none;
          z-index: 80;
        }

        .swimming-fish {
          position: absolute;
          left: -280px;
          width: 190px;
          height: auto;
          opacity: 0.22;
          filter: drop-shadow(0 8px 14px rgba(25, 25, 22, 0.12));
          will-change: transform;
        }

        .swimming-fish svg {
          width: 100%;
          height: auto;
          display: block;
          overflow: visible;
          animation: fishBodyFloat 2.8s ease-in-out infinite;
        }

        .fish-a {
          top: 18%;
          animation: fishAcrossOne 25s linear infinite;
        }

        .fish-b {
          top: 49%;
          width: 145px;
          opacity: 0.18;
          animation: fishAcrossTwo 34s linear infinite;
        }

        .fish-c {
          top: 76%;
          width: 220px;
          opacity: 0.15;
          animation: fishAcrossThree 30s linear infinite;
        }

        .fish-b svg {
          animation-delay: -1.2s;
        }

        .fish-c svg {
          animation-delay: -2s;
        }

        .fish-bubble {
          position: absolute;
          width: 7px;
          height: 7px;
          border: 1px solid currentColor;
          border-radius: 50%;
          opacity: 0;
        }

        .page-bubble-one {
          left: 34%;
          top: 14%;
          animation: bubbleRise 5s ease-out infinite;
        }

        .page-bubble-two {
          left: 56%;
          top: 43%;
          width: 5px;
          height: 5px;
          animation: bubbleRise 6s 1.8s ease-out infinite;
        }

        .page-bubble-three {
          left: 73%;
          top: 72%;
          width: 9px;
          height: 9px;
          animation: bubbleRise 7s 3s ease-out infinite;
        }

        @keyframes fishAcrossOne {

          0% {
            transform: translate3d(-320px, 0, 0);
          }

          50% {
            transform: translate3d(calc(50vw - 30px), -22px, 0);
          }

          100% {
            transform: translate3d(calc(100vw + 320px), 8px, 0);
          }

        }

        @keyframes fishAcrossTwo {

          0% {
            transform: translate3d(calc(100vw + 300px), 0, 0) scaleX(-1);
          }

          50% {
            transform: translate3d(calc(50vw - 30px), 24px, 0) scaleX(-1);
          }

          100% {
            transform: translate3d(-300px, -8px, 0) scaleX(-1);
          }

        }

        @keyframes fishAcrossThree {

          0% {
            transform: translate3d(-340px, 0, 0);
          }

          50% {
            transform: translate3d(calc(50vw - 20px), -18px, 0);
          }

          100% {
            transform: translate3d(calc(100vw + 340px), 12px, 0);
          }

        }

        @keyframes fishBodyFloat {

          0%,
          100% {
            transform: rotate(0deg);
          }

          50% {
            transform: rotate(-3deg);
          }

        }

        @keyframes bubbleRise {

          0% {
            opacity: 0;
            transform: translateY(15px) scale(0.7);
          }

          20% {
            opacity: 0.22;
          }

          100% {
            opacity: 0;
            transform: translateY(-85px) scale(1.15);
          }

        }

        @media (max-width: 650px) {

          .swimming-fish {
            width: 130px;
          }

          .fish-b {
            width: 105px;
          }

          .fish-c {
            width: 150px;
          }

          .fish-a {
            top: 22%;
          }

          .fish-b {
            top: 52%;
          }

          .fish-c {
            top: 78%;
          }

        }

        @media (prefers-reduced-motion: reduce) {

          .swimming-fish,
          .swimming-fish svg,
          .fish-bubble {
            animation: none !important;
          }

          .swimming-fish {
            display: none;
          }

        }

      `}</style>


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
           <h2>ARTO</h2>
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

            <span>
              MENU
            </span>

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

          <span>
            01
          </span>

          <span>
            CONTEMPORARY ART HOUSE
          </span>

        </div>


        <div className="hero-center">

          <p className="hero-kicker">
            ARTO PRESENTS
          </p>

          <h1>

            A PLACE
            <br />

            <span>
              FOR ART
            </span>

            <br />

            <i>
              TO BREATHE.
            </i>

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

              <em>
                meet.
              </em>

            </span>

          </h2>


          <p className="intro-text">

            BONSAI BENEATH brings together visual art,
            movement, music and theatre in one evolving
            cultural space.

          </p>

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

                ARTO
                <br />
               
              </h3>

            </div>

            <b>
              ↗
            </b>

          </Link>


          {/* =================================================
              DANCE CARD — ONLY MODIFIED CARD
          ================================================= */}

          <Link
            to="/art/dance"
            className={`art-card art-card-two ${
              danceTransition ? "dance-card-transition" : ""
            }`}
            onClick={handleDanceClick}
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

            ART
            <br />

            <em>
              ALIVE.
            </em>

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

            around <em>
              ideas.
            </em>

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

            <em>
              EXPERIENCE
            </em>

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
            ARTO
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