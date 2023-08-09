import React from 'react'
import SocialIcons from '../SocialIcons/SocialIcons';
import './Footer.css'

const Footer = () => {
  return (
    <footer id="footer" className='my-4 container-md'>
      <div className="social_icons my-1">
      <SocialIcons/>
      </div>
      <p className='copyrights m-1'> created by <span>Boughaba Zakaria</span></p>
      <p className="copyrights m-1">&copy;2023-2024 | All Rights Reserved</p>
    </footer>
  );
}

export default Footer