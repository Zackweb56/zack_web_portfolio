import React, {useState,useEffect} from 'react'
import './App.css';
import Footer from './components/Footer/Footer';
import Loader from './components/Loader/Loader';
import Navbar from './components/Navbar/Navbar';
import About from './sections/About/About';
import Home from './sections/Home/Home';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
// react router
// import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {isLoading ? (<Loader />) : (
        <div>
          <Navbar />
          <Home />
          <About />
          <Skills />
          <Projects />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
