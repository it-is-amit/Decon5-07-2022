import './App.css';
import React, { useState, useEffect } from 'react'
import Home from './components/Home';
import About from './components/About';
import Parts from './components/Parts';
import MobileApp from './components/MobileApp';
import Benefits from './components/Benefits';
import Join from './components/Join';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
// import Pageination from './components/Pageination';
import Aos from "aos";
import "aos/dist/aos.css";
import Devicedata from './components/Devicedata';
import Animation from './components/Animation';
// import Scrollbar from 'smooth-scrollbar';

// import gsap from "gsap"; 
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { ScrollSmoother } from 'gsap/ScrollSmoother';

function App() {

  const [CurrentSection, setCurrentSection] = useState(0);
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div id='heyYou'>
        <Navbar setCurrentSection={setCurrentSection} />
        <Home />
        <Devicedata CurrentSection={CurrentSection} />
        <About />
        <Animation />
        <Parts />
        <MobileApp />
        <Benefits />
        <Join />
        <Footer />
      </div>
    </>
  )
}

export default App;

