import React, {useState,useEffect} from 'react'
import './App.css';
import Footer from './components/Footer/Footer';
import Loader from './components/Loader/Loader';
import Navbar from './components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import MoreInfo from './sections/About/MoreInfo/MoreInfo';
// react router
// import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

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
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/more_info' element={<MoreInfo />} />
          </Routes>
          <Footer />
          <ScrollToTop />
        </Router>
      )}
    </>
  );
}

export default App;
