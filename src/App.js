import React, {useState,useEffect} from 'react'
import './App.css';
import Footer from './components/Footer/Footer';
import Loader from './components/Loader/Loader';
// import Navbar from './components/Navbar/Navbar';
import MoreInfo from './sections/About/MoreInfo/MoreInfo';
// react router
// import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Home from './Pages/Home/Home';

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
          {/* <Navbar /> */}
          <Routes>
            <Route path='/zack_web_portfolio' element={<Home />} />
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
