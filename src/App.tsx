import { Routes, Route } from "react-router-dom";

import NavBar from './components/NavBar'
import Home from './pages/Home'
import About from './pages/About'
import Projects from "./pages/Projects";

function App() {

  return (
    <div>
      <div className='flex md:flex-row flex-col md:gap-64 md:p-20 p-10'>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path='/:projectId' element={<Projects />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
