import React, {useState, useEffect} from 'react'
import $ from 'jquery';
import Logo from '../../assets/Logo01.png'
import './Navbar.css'

function Navbar() {
    useEffect(() => {
        // Example: using jQuery to add a click event listener to a button
        $('#navTrigger').on('click', () => {
        //   alert('Button clicked!');
          $('#navTrigger').toggleClass('active');
          console.log("Clicked menu");
          $("#mainListDiv").toggleClass("show_list");
          $("#mainListDiv").fadeIn();
        });
        // $(window).scroll(function() {
        //     if ($(document).scrollTop() > 50) {
        //         $('.nav').addClass('affix');
        //         console.log("OK");
        //     } else {
        //         $('.nav').removeClass('affix');
        //     }
        // });
        // Remember to clean up the event listener when the component unmounts
        return () => {
          $('#navTrigger').off('click');
        };
    }, []);  

    const [activeLink, setActiveLink] = useState('home');

    const handleSmoothScroll = (e, section) => {
        e.preventDefault();
        setActiveLink(section);

        const target = document.getElementById(section);
        const topOffset = 60; // Offset for the fixed navigation bar (if you have one)
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;
    
        window.scrollBy({
          top: offsetPosition,
          behavior: 'smooth',
        });
    }
    return (
    <>
        <nav className="nav affix">
            <div className="con">
                <a href="#home" className="logo">
                    {/* zack web <span>.</span> */}
                    <img src={Logo} alt="zack_web_logo" />
                </a>
                <div id="mainListDiv" className="main_list">
                    <ul className="navlinks">
                        <li><a href="#home" onClick={(e) => handleSmoothScroll(e, 'home')} className={activeLink === 'home' ? 'active_link' : ''} >Home</a></li>
                        <li><a href="#about" onClick={(e) => handleSmoothScroll(e, 'about')} className={activeLink === 'about' ? 'active_link' : ''} >About Me</a></li>
                        <li><a href="#skills" onClick={(e) => handleSmoothScroll(e, 'skills')} className={activeLink === 'skills' ? 'active_link' : ''} >Skills</a></li>
                        <li><a href="#projects" onClick={(e) => handleSmoothScroll(e, 'projects')} className={activeLink === 'projects' ? 'active_link' : ''}>Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <span className="navTrigger" id='navTrigger'>
                    <i></i>
                    <i></i>
                    <i></i>
                </span>
            </div>
        </nav>
    </>
  );
}

export default Navbar