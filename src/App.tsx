import { Routes, Route } from "react-router-dom";

import NavBar from './components/NavBar'
import Home from './pages/Home'
import About from './pages/About'
import Footer from './components/Footer'
import Projects from "./pages/Projects";

function App() {

  return (
    <div className='flex flex-col min-h-screen'>
      <div className='flex gap-64 p-20'>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path='/:projectId' element={<Projects />} />
        </Routes>
      </div>
      <div className='self-end mr-20 mb-20'>
        <Footer />
      </div>
    </div>
  )
}

export default App
