import React from 'react'
import './Home.css'
// files
import About from '../../sections/About/About'
import HireMe from '../../sections/HireMe/HireMe';
import Hero from '../../sections/Hero/Hero';
import Projects from '../../sections/Projects/Projects';
import Skills from '../../sections/Skills/Skills';
import Navbar from '../../components/Navbar/Navbar';

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <HireMe />
        <Projects />
    </div>
  )
}

export default Home