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

        <Route path="/" element={<Home />} />

        <Route path="/art" element={<Art />} />

        <Route path="/exhibitions" element={<Exhibitions />} />

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

      </Routes>
    </BrowserRouter>
  )
}

export default App