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
  return (
    <BrowserRouter>
      <Routes>

        {/* HOME */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* ART */}
        <Route
          path="/art"
          element={<Art />}
        />

        {/* ART — BONSAI BENEATH */}
        <Route
          path="/art/bonsai-beneath"
          element={<BonsaiBeneath />}
        />

        {/* ART — DANCE */}
        <Route
          path="/art/dance"
          element={<Dance />}
        />

        {/* ART — MUSIC */}
        <Route
          path="/art/music"
          element={<Music />}
        />

        {/* ART — THEATRE */}
        <Route
          path="/art/theatre"
          element={<Theatre />}
        />

        {/* EXHIBITIONS */}
        <Route
          path="/exhibitions"
          element={<Exhibitions />}
        />

      </Routes>
    </BrowserRouter>
  )
}

export default App