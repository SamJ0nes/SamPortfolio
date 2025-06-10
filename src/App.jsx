import './styles/global.css'
import './styles/App.css'
import Sidebar from './components/Sidebar'
import DotCanvas from './components/DotGridBackground'
import Home from './components/sections/Home'
import About from './components/sections/About'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'
import Education from './components/sections/Education'
import Contact from './components/sections/Contact'
import { motion, useScroll } from "motion/react"
import React, { useEffect, useState } from 'react'

function App() {
  const handleNextSection = (isDown) => {
    const sectionIds = ['home', 'about', 'experience', 'education', 'projects', 'contact'];
    const scrollY = window.scrollY;
    let found = false;
    if (isDown) {
      for (let i = 0; i < sectionIds.length; i++) {
        const section = document.getElementById(sectionIds[i]);
        if (section && section.offsetTop > scrollY) {
          section.scrollIntoView({ behavior: 'smooth' });
          found = true;
          break;
        }
      }
    }
    else {
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section && section.offsetTop < scrollY) {
          section.scrollIntoView({ behavior: 'smooth' });
          found = true;
          break;
        }
      }
    }
  }

  const { scrollYProgress } = useScroll();
  const [atTop, setAtTop] = useState(true);
  const [atBottom, setAtBottom] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1100);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      setAtTop(scrollY < 50); // 50px tolerance for top detection
      setAtBottom(scrollY + windowHeight >= docHeight - 50); // 50px tolerance for bottom detection
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1100);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <motion.div style={{scaleY: scrollYProgress, zIndex: 101, scaleX: scrollYProgress, position: "fixed", top: 0, left: 0, right: 0, height: 10, 
        originX: 0, backgroundColor: "#61dafb"}} />

      <div className="contentContainer" style={{ display: 'flex' }}>

        <Sidebar />

        <div className='mainContainer'>

          <main style={{ scrollBehavior: 'smooth' }}>
            <section className='sections home' id='home' style={{height:'100vh'}}>
              {/* Only use dot canvas on desktop screen sizes (too much processing power for mobiles) */}
              {isDesktop && <DotCanvas spacing={25} maxDist={1000}></DotCanvas>}
              <div className='sectionContent'>
                <Home />
              </div>
            </section>
            <section className='sections' id='about' >
              <div className='sectionContent'>
                <About />
              </div>
            </section>
            <section className='sections' id='experience' >
              <div className='sectionContent'>
                <Experience />
              </div>
            </section>
            <section className='sections' id='education' >
              <div className='sectionContent'>
                <Education />
              </div>
            </section>
            <section className='sections' id='projects' >
              <div className='sectionContent'>
                <Projects />
              </div>
            </section>
            <section className='sections' id='contact' >
              <div className='sectionContent'>
                <Contact />
              </div>
            </section>
          </main>
        </div>

        {!atBottom && (
          <button className="navButton down" onClick={() => handleNextSection(true)}>
            <i className="bi bi-arrow-down"></i>
          </button>
        )}
        {!atTop && (
          <button className="navButton up" onClick={() => handleNextSection(false)}>
            <i className="bi bi-arrow-up"></i>
          </button>
        )}
      </div>
    </>
  )
}

export default App
