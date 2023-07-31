import React from 'react'
import './SocialIcons.css'
// react icons
import { FaFacebook, FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa6";

const SocialIcons = () => {
  return (
    <div className='SocialIcons'>
        <a href='https://github.com/Zackweb56' className="facebook">
            <FaFacebook />
        </a>
        <a href='https://github.com/Zackweb56' className="whatsapp">
            <FaWhatsapp />           
        </a>
        <a href='https://github.com/Zackweb56' className="github">
            <FaGithub />           
        </a>
        <a href='https://www.linkedin.com/in/zakaria-boughaba-447318283' className="linkedin">
           <FaLinkedin />           
        </a>
    </div>
  )
}

export default SocialIcons