import About from './components/About'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Notification from './components/Notification'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <div className='flex flex-col overflow-x-hidden'>
        <Navbar/>
        <span className='mt-16' id='home'><Home/></span>
        <div className='w-full h-4 bg-[#F08220]'  id='about'></div>
        <div className='mt-4 mb-36'><Notification/></div>
        <div className='w-full min-h-[200px] mb-4'><About/></div>
        <div className='m-10' id='contact'><Contact/></div>
        <Footer/>
      </div>
    </>
  )
}

export default App
