import React from 'react'
import SocialIcons from '../SocialIcons/SocialIcons';
import './Footer.css'

const Footer = () => {
  return (
    <footer id="footer" className='container-md'>
        <hr className="line" style={{ width: '100%' }} />
          <p className="copyrights ">All Rights Reserved &copy;2023-2024 | by <span>Boughaba Zakaria</span></p>
    </footer>
  );
}

export default Footer