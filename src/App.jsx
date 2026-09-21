import { useEffect, useState } from "react"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Art from "./pages/Art"
import Exhibitions from "./pages/Exhibitions"

import BonsaiBeneath from "./pages/BonsaiBeneath"
import Dance from "./pages/Dance"
import Music from "./pages/Music"
import Theatre from "./pages/Theatre"

function App() {
  const [fishPosition, setFishPosition] = useState({
    x: -100,
    y: -100,
  })

  const [bubbles, setBubbles] = useState([])

  useEffect(() => {
    const handleMouseMove = (event) => {
      setFishPosition({
        x: event.clientX,
        y: event.clientY,
      })
    }

    const handleClick = (event) => {
      const newBubbles = Array.from({ length: 6 }, (_, index) => ({
        id: `${Date.now()}-${index}-${Math.random()}`,
        x: event.clientX + (Math.random() - 0.5) * 35,
        y: event.clientY + (Math.random() - 0.5) * 25,
        size: 7 + Math.random() * 10,
        delay: Math.random() * 0.2,
      }))

      setBubbles((currentBubbles) => [
        ...currentBubbles,
        ...newBubbles,
      ])

      setTimeout(() => {
        setBubbles((currentBubbles) =>
          currentBubbles.filter(
            (bubble) =>
              !newBubbles.some(
                (newBubble) => newBubble.id === bubble.id
              )
          )
        )
      }, 1600)
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("click", handleClick)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("click", handleClick)
    }
  }, [])

  return (
    <BrowserRouter>

      {/* =====================================================
          FISH CURSOR
          ===================================================== */}

      <div
        className="fish-cursor"
        style={{
          left: `${fishPosition.x}px`,
          top: `${fishPosition.y}px`,
        }}
        aria-hidden="true"
      >
        <span className="fish-body">🐟</span>
      </div>


      {/* =====================================================
          CLICK BUBBLES
          ===================================================== */}

      <div
        className="bubble-layer"
        aria-hidden="true"
      >
        {bubbles.map((bubble) => (
          <span
            key={bubble.id}
            className="cursor-bubble"
            style={{
              left: `${bubble.x}px`,
              top: `${bubble.y}px`,
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              animationDelay: `${bubble.delay}s`,
            }}
          />
        ))}
      </div>


      {/* =====================================================
          WEBSITE ROUTES
          ===================================================== */}

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/art"
          element={<Art />}
        />

        <Route
          path="/art/bonsai-beneath"
          element={<BonsaiBeneath />}
        />

        <Route
          path="/art/dance"
          element={<Dance />}
        />

        <Route
          path="/art/music"
          element={<Music />}
        />

        <Route
          path="/art/theatre"
          element={<Theatre />}
        />

        <Route
          path="/exhibitions"
          element={<Exhibitions />}
        />

      </Routes>

    </BrowserRouter>
  )
}

export default App