import React from 'react'
import './SocialIcons.css'
// react icons
import { FaFacebook, FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa6";

const SocialIcons = () => {
  return (
    <div className='SocialIcons'>
        <a href='https://github.com/Zackweb56' className="facebook">
          <span><FaFacebook /></span>
        </a>
        <a href='https://github.com/Zackweb56' className="whatsapp">
          <span><FaWhatsapp /></span>    
        </a>
        <a href='https://github.com/Zackweb56' className="github">
          <span><FaGithub /></span>     
        </a>
        <a href='https://www.linkedin.com/in/zakaria-boughaba-447318283' className="linkedin">
          <span><FaLinkedin /></span>           
        </a>
    </div>
  )
}

export default SocialIcons