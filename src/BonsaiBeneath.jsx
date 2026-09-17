import { Link } from "react-router-dom"

function BonsaiBeneath() {
  return (
    <div className="bonsai-page">

      <header className="inner-header">

        <Link to="/" className="brand">
          <span className="brand-small">MAISON</span>
          <span className="brand-main">AURÉLIEN</span>
        </Link>

        <Link to="/art" className="back-link">
          ← Art
        </Link>

      </header>

      <main>

        <section className="bonsai-hero">

          <p className="eyebrow">
            MAISON AURÉLIEN — FEATURED WORK
          </p>

          <h1>
            Bonsai
            <br />
            <em>Beneath.</em>
          </h1>

          <p className="bonsai-lead">
            A quiet study of nature, time and the spaces
            that exist beneath what we choose to see.
          </p>

        </section>

        <section className="bonsai-content">

          <p className="eyebrow">
            ABOUT THE WORK
          </p>

          <h2>
            Look beneath
            <br />
            the <em>surface.</em>
          </h2>

          <p>
            Bonsai Beneath considers the relationship between
            what is visible and what remains hidden.
          </p>

        </section>

      </main>

      <footer className="inner-footer">

        <div>
          <span className="brand-small">MAISON</span>
          <span className="brand-main">AURÉLIEN</span>
        </div>

        <Link to="/art">
          Back to Art ↗
        </Link>

      </footer>

    </div>
  )
}

export default BonsaiBeneath

