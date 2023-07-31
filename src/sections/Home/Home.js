import React from 'react'
import Button from '../../components/Button/Button';
import SocialIcons from '../../components/SocialIcons/SocialIcons';
import { FaDownload } from "react-icons/fa6";
import Coding from '../../assets/coding.png'
import './Home.css'

function Home() {
    const handleDownload = () => {
        // Replace 'myfile.pdf' with the actual filename and path if it's different.
        const pdfURL = '/my_cv_english.pdf';
        window.open(pdfURL, '_blank');
    };
    return (
    <>
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
        <div id="home" className='container-md'>
            <div className="home d-flex justify-content-between align-items-center">
                <div className="information">
                    <h1>
                        Hello, <span style={{color:'var(--main-color)'}}>I'm</span> <br /> BOUGHABA ZAKARIA A Full stack developer
                    </h1>
                    <p> I am a highly skilled full-stack developer proficient in both front-end and back-end development. I have the ability to create dynamic and user-friendly web applications with exceptional features.</p>
                    <div className="btn" onClick={handleDownload}>
                        <Button title="Download CV" link="/my_cv_english.pdf" icon={<FaDownload />} />
                    </div>
                    <SocialIcons />
                </div>
                <div className="home_image">
                    <img src={Coding} className="img-fluid" alt="home image" />
                </div>
            </div>
        </div>
    </>
  );
}

export default Home