import coast from '../assets/coast.jpg'
import Footer from '../components/Footer'

function Home() {
    return (
        <>
        <div className='max-w-3xl flex-1'>
            <img src={coast} alt='coastline' className='transition-transform duration-500 transform scale-100'/>
            <Footer />
        </div>
        
        </>
    )
}

export default Home;