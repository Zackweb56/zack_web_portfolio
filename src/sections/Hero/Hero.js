import React from 'react'
import Button from '../../components/Button/Button';
import SocialIcons from '../../components/SocialIcons/SocialIcons';
import { FaDownload } from "react-icons/fa6";
import Coding from '../../assets/coding.png'
// import { saveAs } from 'file-saver';
import my_cv_english from '../../assets/my_cv_english.pdf';
import './Hero.css'

function Hero() {
    // const handleDownload = () => {
    //     const cvURL = '/my_cv_english.pdf'; // Replace with the actual filename and path if different.
    //     saveAs(cvURL, 'my_cv.pdf'); // You can change the downloaded file's name here.
    // };
    return (
    <div className='container-md'>
        <div className="area" >
            <ul className="circles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div >
        <div id="Hero">
            <div className="Hero d-flex justify-content-between align-items-center">
                <div className="information">
                    <h1>
                        Hello, <span style={{color:'var(--main-color)'}}>I'm</span> <br /> BOUGHABA ZAKARIA A Full stack developer
                    </h1>
                    <p> I am a highly skilled full-stack developer proficient in both front-end and back-end development. I have the ability to create dynamic and user-friendly web applications with exceptional features.</p>
                    <div className="btn">
                        <Button title="Download CV" link={my_cv_english} download="my_cv_english" icon={<FaDownload />} />
                    </div>
                    <SocialIcons />
                </div>
                <div className="Hero_image">
                    <img src={Coding} className="img-fluid" alt="Hero image" />
                </div>
            </div>
        </div>
    </div>
  );
}

export default Hero