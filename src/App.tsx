import NavBar from './components/NavBar'
import Home from './pages/Home'
import Footer from './components/Footer'

function App() {

  return (
    <div className='flex flex-col min-h-screen'>
      <div className='flex gap-64 p-20'>
        <NavBar />
        <Home />
      </div>
      <div className='self-end mr-20 mb-20'>
        <Footer />
      </div>
    </div>
  )
}

export default App
