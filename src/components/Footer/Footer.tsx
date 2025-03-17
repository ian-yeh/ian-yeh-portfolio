// src/components/Header/Header.tsx

//import React from 'react'; // Add this line
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-arrow'>&lt;</div> {/* Left arrow */}
      <div className="footer-text">&copy; 2025 Ian Yeh. All rights reserved.</div>
      <div className='footer-arrow'>&gt;</div> {/* Right arrow */}
    </div>
    
  );
}

export default Footer;
