import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Home } from './components/Home'
import { Changelog } from './components/Changelog'
import { Roadmap } from './components/Roadmap'
import { Tutorials } from './components/Tutorials'
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
          <Route path="/tutorials" element={<Tutorials />} />
        </Routes>
      </main>
      <Footer />
      <Chatbot />
    </Router>
  )
}

export default App
