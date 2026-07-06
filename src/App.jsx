import { useEffect } from 'react'
import './App.css'
import About from './Components/About'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Projects from './Components/Projects'
import Skills from './Components/Skills'
import ScrollToTop from './Components/ScrollToTop'

function App() {
  useEffect(() => {
    try {
      const audio = new Audio("./Ashish.mp3");
      audio.play();
    } catch (e) {
      console.log("Error playing audio:", e);
    }
  }, []);

  return (
    <div className='bg-[#171d32] h-auto w-full overflow-hidden'>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
