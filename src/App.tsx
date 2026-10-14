import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Header } from './components/Header'
import { Home } from './components/Home'
import { Changelog } from './components/Changelog'
import { Roadmap } from './components/Roadmap'
import { Footer } from './components/Footer'
import { Chatbot } from './components/Chatbot'

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/changelog" element={<Changelog />} />
          <Route path="/roadmap" element={<Roadmap />} />
          {/* Netlify serves index.html for any path, so an unknown URL reaches
              the router rather than 404ing. Without a catch-all it matched no
              route and rendered an empty <main> under a working header — which
              is what /tutorials did once that page was removed. */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
      <Chatbot />
    </Router>
  )
}

export default App
